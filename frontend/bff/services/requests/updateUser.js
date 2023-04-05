import apiRequest from './apiRequest.js';
import { createLoggerNamespace } from '../../logger/index.js';

const requestServiceLogger = createLoggerNamespace('groupomania:bff:service:requests');

/**
 * Creates an update user request to the API.
 * @param {Object} userData
 * @param {string} [userData.email] - User email.
 * @param {string} [userData.password] - User password.
 * @param {number} userId
 * @param {string} accessToken
 * @returns {Promise} Returns a promise resolved with true.
 * @throws Throws if the request returns an error.
 */
export default async function updateUserRequest(userData, userId, accessToken) {
    requestServiceLogger.debug('Update user request service starting');
    console.log(userData);
    const response = await apiRequest({
        path: `/users/${userId}`,
        method: 'put',
        requestData: userData,
        accessToken,
    });

    if (response.error) {
        throw response.error;
    }

    return true;
}