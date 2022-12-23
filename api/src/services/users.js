import { createLoggerNamespace } from '../logger/index.js';
import db from '../models/index.js';
import { NotFoundError } from '../errors/index.js';

const usersServicesLogger = createLoggerNamespace('groupomania:api:services:users');

/**
 * Creates a new user.
 * Starts by encrypting the password.
 * @param {Object} userInfos - Object containing the user informations.
 * @param {string} userInfos.email - User's email.
 * @param {string} userInfos.password - User's password. The password should be hashed using a secure cryptographic function.
 * @param {string} [userInfos.roleId] - User's role, optionnal.
 * @returns {User} Returns the newly created user.
 */
export async function createUser({email, password, roleId}) {
    usersServicesLogger.verbose('Create User service starting');

    let userInfos = {
        email,
        password
    };

    if (roleId) {
        userInfos.roleId = roleId;
    }

    const newUser = await db.models.User.create(userInfos);
    usersServicesLogger.debug('User created');

    return newUser;
}



/**
 * Fetch all users, ordered by email.
 * @param {Object} options - Search options.
 * @param {boolean} [options.roleInfo=false] - Whether to add the role informations to the user or just the role id.
 * @param {string|number} [options.role] - Filtering user by role, either role name or role id.
 * @param {number} [option.page] - Which page to get, usefull for pagination. Requires the limit parameter.
 * @param {number} [option.limit] - Number of entry to return, usefull for pagination.
 * @returns {User} Returns the user.
 */
export async function getAllUsers({ roleInfo = false, role, page, limit } = { roleInfo: false }) {
    usersServicesLogger.verbose('Get all users service starting');

    let searchOptions = {
        attributes: ['userId', 'email', 'roleId'],
        order: [['email', 'ASC']]
    };

    // Creating role filter
    if (role && typeof role === 'string') {
        usersServicesLogger.debug('Filtering by role name');
        searchOptions.include = {
            association: 'role',
            attributes: []
        };
        searchOptions.where = {
            '$role.name$': role
        };

    } else if (role && typeof role === 'number') {
        usersServicesLogger.debug('Filtering by role id');
        searchOptions.where = {
            roleId: role
        };
    }

    // Adding role informations
    if (roleInfo) {
        usersServicesLogger.debug('Adding role informations to the results');
        searchOptions.include = {
            association: 'role',
            attributes: ['roleId', 'name']
        };
        searchOptions.attributes.pop();
    }

    // Adding pagination informations
    if (limit) {
        usersServicesLogger.debug(`Limiting the number of results to ${limit}`);
        searchOptions.limit = limit;
    }

    if (limit && page) {
        usersServicesLogger.debug(`Paginating the result, getting the page number ${page}`);
        searchOptions.offset = (page - 1) * limit;
    }

    const users = await db.models.User.findAll(searchOptions);

    usersServicesLogger.debug('Users fetched');
    return users;
}



/**
 * Fetch the user corresponding to the given id
 * @param {number} userId - User id.
 * @param {Object} options - Search options.
 * @param {boolean} [options.roleInfo=false] - Whether to add the role informations to the user or just the role id.
 * @returns {User} Returns the user.
 * @throws {NotFoundError} Throws an error if the user doesn't exist.
 */
export async function getUserById(userId, { roleInfo = false } = { roleInfo: false }) {
    usersServicesLogger.verbose('Get user by id service starting');

    let searchOptions = {
        attributes: ['userId', 'email', 'roleId']
    };

    if (roleInfo) {
        usersServicesLogger.debug('Adding role informations to the result');
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



/**
 * Deletes an existing user.
 * @param {number} userId - Id of the user to delete.
 * @returns {Boolean} Returns true if the operation succeeds.
 * @throws {NotFoundError} Throws a not found error if the user doesn't exist.
 */
export async function deleteUser(userId) {
    usersServicesLogger.verbose('Delete User service starting');

    const deleteNumber = await db.models.User.destroy({where: { userId }});

    if (deleteNumber === 0) {
        usersServicesLogger.debug('The user doesn\'t exist. Throwing an error');
        throw new NotFoundError({
            message: `No user has the id ${userId}.`,
            title: 'The user can\'t be found.',
            description: 'We can\'t find the user corresponding to the id you gave. Please, verify your input and try again.'
        });
    }

    return true;
}



/**
 * Updates an existing user.
 * @param {number} userId - Id of the user to update.
 * @param {Object} userInfos - Object containing the new user informations.
 * @param {string} [userInfos.email] - User's email.
 * @param {string} [userInfos.password] - User's password. The password should be hashed with a secure cryptographic function.
 * @param {string} [userInfos.roleId] - User's role, optionnal.
 * @returns {Boolean} Returns true if the operation succeeds.
 * @throws {NotFoundError} Throws a not found error if the user doesn't exist.
 */
export async function updateUser(userId, userInfos) {
    usersServicesLogger.verbose('Update User service starting');

    const updateResults = await db.models.User.update(userInfos, { where: { userId }});

    if (updateResults[0] === 0) {
        usersServicesLogger.debug('The user doesn\'t exist. Throwing an error');
        throw new NotFoundError({
            message: `No user has the id ${userId}.`,
            title: 'The user can\'t be found.',
            description: 'We can\'t find the user corresponding to the id you gave. Please, verify your input and try again.'
        });
    }

    return true;
}