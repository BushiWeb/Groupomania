import { createLoggerNamespace } from '../logger/index.js';
import bcrypt from 'bcrypt';
import config from '../config/config.js';
import { UnauthorizedError } from '../errors/index.js';
import jwt from 'jsonwebtoken';

const authServicesLogger = createLoggerNamespace('groupomania:api:services:auth');

/**
 * Log a user in.
 * Compares the password and generates a JWT.
 * @param {User} user - User model, containing all user informations.
 * @param {string} password - User's password.
 * @returns {{userId: number, accessToken: string}} Returns the user id and the access JWT.
 * @throws Throws an error if something unexpected occurs.
 */
export async function login(user, password) {
    authServicesLogger.verbose('Login service starting');

    try {
        // Compare the passwords
        authServicesLogger.debug('Comparing passwords');
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            authServicesLogger.debug('The password is invalid. Throwing an error');
            throw new UnauthorizedError({ message: 'The password is invalid.' }, null, {});
        }

        // Generate the JWT
        authServicesLogger.debug('The password is valid, generating the token');
        const token = jwt.sign(
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

        return {
            userId: user.userId,
            accessToken: token
        };

    } catch (error) {
        authServicesLogger.debug('Auth service error');
        throw error;
    }
}