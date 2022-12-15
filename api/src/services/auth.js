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
 * @returns {string} Returns the token.
 * @throws Throws an error if something unexpected occurs while saving the token.
 */
async function createRefreshToken(userId) {
    authServicesLogger.verbose('Refresh token creation service starting');

    const tokenId = UUIDv4();

    // Generate the token
    const issuedAtDate = Math.floor(Date.now() / 1000);
    const expirationDate = issuedAtDate + config.get('refreshJwt.exp');
    const refreshToken = jwt.sign(
        {
            userId: userId,
            exp: expirationDate,
            iat: issuedAtDate
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
        expiration: expirationDate * 1000
    });
    authServicesLogger.debug('Refresh token saved');

    return refreshToken;
}



/**
 * Log a user in.
 * Compares the password and generates a JWT.
 * @param {User} user - User model, containing all user informations.
 * @param {string} password - User's password.
 * @returns {{userId: number, accessToken: string}} Returns the user id, the refresh token and the access JWT.
 * @throws Throws an error if something unexpected occurs.
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
    const accessToken = jwt.sign(
        {
            userId: user.userId,
            role: user.roleId
        },
        config.get('jwt.key'),
        {
            algorithm: config.get('jwt.alg'),
            expiresIn: config.get('jwt.exp')
        }
    );
    authServicesLogger.debug('User\'s token created');

    // Generate the refresh token
    const refreshToken = await createRefreshToken(user.userId);

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
 * @throws Throws an error if something unexpected occurs.
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