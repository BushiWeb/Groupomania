import { createLoggerNamespace } from '../logger/index.js';
import bcrypt from 'bcrypt';
import config from '../config/config.js';
import db from '../models/index.js';
import { NotFoundError } from '../errors/index.js';

const usersServicesLogger = createLoggerNamespace('groupomania:api:services:users');

/**
 * Creates a new user.
 * Starts by encrypting the password.
 * @param {Object} userInfos - Object containing the user informations.
 * @param {string} userInfos.email - User's email.
 * @param {string} userInfos.password - User's password.
 * @param {string} [userInfos.roleId] - User's role, optionnal.
 * @returns {User} Returns the newly created user.
 * @throws Throws an error if something unexpected occurs.
 */
export async function createUser({email, password, roleId}) {
    usersServicesLogger.verbose('Create User service starting');

    try {
        // Hash password
        const saltRound = config.get('passwordHash.saltRound');
        let hashedPassword = await bcrypt.hash(password, saltRound);
        usersServicesLogger.debug('Password hashed');

        // User creation
        let userInfos = {
            email,
            password: hashedPassword
        };

        if (roleId) {
            userInfos.roleId = roleId;
        }

        const newUser = await db.models.User.create(userInfos);
        usersServicesLogger.debug('User created');

        return newUser;
    } catch (error) {
        usersServicesLogger.debug('Create user service error');
        throw error;
    }
}

/**
 * Fetch the user corresponding to the given email
 * Starts by encrypting the password.
 * @param {string} email - User email.
 * @returns {User} Returns the newly created user.
 * @throws {NotFoundError} Throws an error if the user doesn't exist.
 */
export async function getUserByEmail(email) {
    usersServicesLogger.verbose('Get user by email service starting');

    try {
        const user = await db.models.User.findOne({
            where: { email }
        });
        if (user === null) {
            usersServicesLogger.debug('The email is invalid. Throwing an error');
            throw new NotFoundError({
                message: `No user has the email address ${email}.`,
                title: 'The user can\'t be found.',
                description: 'We can\'t find the user corresponding to the email address. Please, verify your input and try again. If the user does not yet exist, you may create it.'
            });
        }

        usersServicesLogger.debug('User fetched');
        return user;
    } catch (error) {
        usersServicesLogger.debug('Get user by email service error');
        throw error;
    }
}