import { createLoggerNamespace } from '../logger/index.js';
import bcrypt from 'bcrypt';
import config from '../config/config.js';
import db from '../models/index.js';
import { UnauthorizedError } from '../errors/index.js';
import jwt from 'jsonwebtoken';

const authServicesLogger = createLoggerNamespace('groupomania:api:services:auth');

/**
 * Log a user in.
 * Fetches the user from the database using its email, compares the password and generates a JWT.
 * @param {Object} userInfos - Object containing the user informations.
 * @param {string} userInfos.email - User's email.
 * @param {string} userInfos.password - User's password.
 * @returns {{userId: number, accessToken: string}} Returns the user id and the access JWT.
 * @throws Throws an error if something unexpected occurs.
 */
export async function login({email, password}) {
    authServicesLogger.verbose('Login service starting');

    try {
        // Fetch the user
        authServicesLogger.debug('Fetching the user');
        const user = await db.models.User.findOne({
            where: { email }
        });
        if (user === null) {
            authServicesLogger.debug('The email is invalid. Throwing an error');
            throw new UnauthorizedError({
                message: 'The user corresponding to the given email can\'t be found.',
                title: 'The credentials are not working.',
                description: 'It seems we can identify you with those credentials. Please, check your inputs and try again. If you are not registered, you must first create an account before loging in.'
            });
        }

        // Compare the passwords
        authServicesLogger.debug('Comparing passwords');
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            authServicesLogger.debug('The password is invalid. Throwing an error');
            throw new UnauthorizedError({
                message: 'The password is invalid.',
                title: 'The credentials are not working.',
                description: 'It seems we can identify you with those credentials. Please, check your inputs and try again. If you are not registered, you must first create an account before loging in.'
            }, null, {});
        }

        // Generate the JWT
        authServicesLogger.debug('The email and password are valid, generating the token');
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