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
 */
export async function createUser({email, password, roleId}) {
    usersServicesLogger.verbose('Create User service starting');

    // Hash password
    const saltRound = config.get('hash.saltRound');
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
}

/**
 * Fetch the user corresponding to the given id
 * @param {number} userId - User id.
 * @param {Object} options - Search options.
 * @param {boolean} [options.roleInfo=false] - Wether to add the role informations to the user or just the role id.
 * @returns {User} Returns the user.
 * @throws {NotFoundError} Throws an error if the user doesn't exist.
 */
export async function getUserById(userId, { roleInfo=false } = { roleInfo: false }) {
    usersServicesLogger.verbose('Get user by id service starting');

    let searchOptions = {
        attributes: ['userId', 'email', 'roleId']
    };

    if (roleInfo) {
        searchOptions.include = {
            association: 'role',
            attributes: ['roleId', 'name']
        };
        searchOptions.attributes.pop();
    }

    const user = await db.models.User.findByPk(userId, searchOptions);

    if (user === null) {
        usersServicesLogger.debug('The user doesn\'t exist. Throwing an error');
        throw new NotFoundError({
            message: `No user has the id ${userId}.`,
            title: 'The user can\'t be found.',
            description: 'We can\'t find the user corresponding to the id you gave. Please, verify your input and try again.'
        });
    }

    usersServicesLogger.debug('User fetched');
    return user;
}

/**
 * Fetch the user corresponding to the given email
 * @param {string} email - User email.
 * @returns {User} Returns the user.
 * @throws {NotFoundError} Throws an error if the user doesn't exist.
 */
export async function getUserByEmail(email) {
    usersServicesLogger.verbose('Get user by email service starting');

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
}