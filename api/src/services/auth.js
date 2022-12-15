import { createLoggerNamespace } from '../logger/index.js';
import bcrypt from 'bcrypt';
import config from '../config/config.js';
import { InternalServerError, UnauthorizedError } from '../errors/index.js';
import jwt from 'jsonwebtoken';
import { v4 as UUIDv4} from 'uuid';
import db from '../models/index.js';

const authServicesLogger = createLoggerNamespace('groupomania:api:services:auth');

/**
 * Creates a refresh token an save it in the database.
 * @param {number} userId - Id of the user the token belongs to.
 * @param {number} role - Role id of the user the token belongs to.
 * @param {number} [expiration] - Timestamp representing the expiration date. Use second precision, not milliseconds. If undefined, the expiration date will be calculated.
 * @returns {string} Returns the token.
 */
export async function createRefreshToken(userId, role, expiration) {
    authServicesLogger.verbose('Refresh token creation service starting');

    const tokenId = UUIDv4();

    // Generate the token
    const expirationDate = expiration || Math.floor(Date.now() / 1000) + config.get('refreshJwt.exp');
    const refreshToken = jwt.sign(
        {
            userId,
            role,
            exp: expirationDate
        },
        config.get('refreshJwt.key'),
        {
            algorithm: config.get('refreshJwt.alg'),
            jwtid: tokenId
        }
    );
    authServicesLogger.debug('Refresh token created');

    // Save the token
    const saltRound = config.get('hash.saltRound');
    const tokenValue = await bcrypt.hash(refreshToken, saltRound);
    await db.models.RefreshToken.create({
        tokenId,
        tokenValue,
        expiration: expirationDate * 1000,
        userId
    });
    authServicesLogger.debug('Refresh token saved');

    return refreshToken;
}



/**
 * Creates an access token.
 * @param {number} userId - Id of the user the token belongs to.
 * @param {number} role - Role id of the user the token belongs to.
 * @returns {string} Returns the token.
 */
export async function createAccessToken(userId, role) {
    authServicesLogger.verbose('Access token creation service starting');

    // Generate the token
    const accessToken = jwt.sign(
        {
            userId,
            role
        },
        config.get('jwt.key'),
        {
            algorithm: config.get('jwt.alg'),
            expiresIn: config.get('jwt.exp')
        }
    );
    authServicesLogger.debug('Access token created');

    return accessToken;
}



/**
 * Validates a password.
 * @param {string} password - Password to validate.
 * @param {User} user - User owning the password.
 * @return {boolean} Returns true if the password is valid.
 * @throws {UnauthorizedError} Throws if the password is invalid.
 */
export async function validatePassword(password, user) {
    authServicesLogger.debug('Password validation service starting');
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        authServicesLogger.debug('The password is invalid. Throwing an error');
        throw new UnauthorizedError({ message: 'The password is invalid.' }, null, {});
    }

    return true;
}



/**
 * Checks if the refresh token is valid, i.e. it hasn't been invalidated.
 * Validation regarding the expiration or the key for example should be done earlier, using the authentication middleware.
 * @param {string} tokenId - Id of the token to check. Should have the UUID format.
 * @returns {RefreshToken} Returns the corresponding refresh token model if the refresh token is valid.
 * @throws {UnauthorizedError} Throws if the refresh token is not valid anymore.
 */
export async function validateRefreshToken(tokenId) {
    authServicesLogger.verbose('Validate refresh token service starting');

    const refreshToken = await db.models.RefreshToken.findByPk(tokenId);

    if (refreshToken === null) {
        authServicesLogger.debug('The refresh token is invalid. Throwing an error');
        throw new UnauthorizedError({
            message: 'The refresh token is invalid.',
            title: 'The authentication token is invalid',
            description: 'the token is not valid anymore. It may have invalidated following a logout or for safety reasons. You may try to log back in using your email and password.'
        }, null);
    }

    authServicesLogger.debug('Refresh token found, so the refresh token is valid');
    return refreshToken;
}



/**
 * Invalidate one or multiple refresh token, by deleting them from the database.
 * The action depends on the parameter:
 *      - If the parameter is an instance of RefreshToken, then delete the entry corresponding to the instance.
 *      - If the parameter is a string representing a token id, then delete the token corresponding to the id.
 *      - If the parameter is a number representing a user id, delete all the tokens associated to the user.
 * @param {RefreshToken|number|string} identifier - Identifier of the token, either an instance of RefreshToken, a string representing a token id or a number representing a user id.
 * @throws {InternalServerError} Throws if the identifier does not represent anything.
 */
export async function invalidateRefreshToken(identifier) {
    authServicesLogger.verbose('Invalidate refresh token service starting');

    const RefreshToken = db.models.RefreshToken;

    if (identifier instanceof RefreshToken) {
        authServicesLogger.debug('Delete from an instance of RefreshToken');
        return await identifier.destroy();

    }

    if (typeof identifier === 'string') {
        authServicesLogger.debug('Delete from a tokenId');
        return await RefreshToken.destroy({
            where: {
                tokenId: identifier
            }
        });

    }

    if (typeof identifier === 'number') {
        authServicesLogger.debug('Delete from a userId');
        return await RefreshToken.destroy({
            where: {
                userId: identifier
            }
        });

    }

    authServicesLogger.debug('The identifier can not be processed, throwing an error');
    throw new InternalServerError({
        message: 'The identifier of the invalidateRefreshToken service is neither a number, neither a string nor an instance of RefreshToken.'
    });
}


/**
 * Log a user in.
 * Compares the password and generates a JWT.
 * @param {User} user - User model, containing all user informations.
 * @param {string} password - User's password.
 * @returns {{userId: number, accessToken: string}} Returns the user id, the refresh token and the access JWT.
 */
export async function login(user, password) {
    authServicesLogger.verbose('Login service starting');

    authServicesLogger.debug('Comparing passwords');
    await validatePassword(password, user);

    authServicesLogger.debug('The password is valid, generating the tokens');
    const accessToken = await createAccessToken(user.userId, user.roleId);
    const refreshToken = await createRefreshToken(user.userId, user.roleId);

    return {
        userId: user.userId,
        accessToken,
        refreshToken
    };
}



/**
 * Log a user out.
 * Delete the refresh token from the database.
 * When a user logs out, he logs out from the user agent used to send the request, and only the refresh token is invalidated.
 * @param {string} tokenId - Refresh token id used for loging out.
 */
export async function logout(tokenId) {
    authServicesLogger.verbose('Logout service starting');

    await invalidateRefreshToken(tokenId);

    authServicesLogger.verbose('Refresh token deleted, logout successful');
}