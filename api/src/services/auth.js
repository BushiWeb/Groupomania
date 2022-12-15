import { createLoggerNamespace } from '../logger/index.js';
import bcrypt from 'bcrypt';
import config from '../config/config.js';
import { UnauthorizedError } from '../errors/index.js';
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
 * Log a user in.
 * Compares the password and generates a JWT.
 * @param {User} user - User model, containing all user informations.
 * @param {string} password - User's password.
 * @returns {{userId: number, accessToken: string}} Returns the user id, the refresh token and the access JWT.
 */
export async function login(user, password) {
    authServicesLogger.verbose('Login service starting');

    // Compare the passwords
    authServicesLogger.debug('Comparing passwords');
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        authServicesLogger.debug('The password is invalid. Throwing an error');
        throw new UnauthorizedError({ message: 'The password is invalid.' }, null, {});
    }

    // Generate the access token
    authServicesLogger.debug('The password is valid, generating the token');
    const accessToken = await createAccessToken(user.userId, user.roleId);

    // Generate the refresh token
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

    await db.models.RefreshToken.destroy({
        where: {
            tokenId
        }
    });
    authServicesLogger.verbose('Refresh token deleted, logout successful');
}