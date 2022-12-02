import { createLoggerNamespace } from '../logger/logger.js';
import bcrypt from 'bcrypt';
import config from '../config/config.js';
import db from '../models/index.js';

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