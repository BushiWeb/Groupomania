import apiRequest from './apiRequest.js';
import { createLoggerNamespace } from '../../logger/index.js';

const requestServiceLogger = createLoggerNamespace(
    'groupomania:bff:service:requests',
);

/**
 * Creates a signup request to the API.
 * @param {string} email - User email.
 * @param {string} password - User password.
 * @returns {Promise} Returns a promise resolved with the request response data.
 * @throws Throws if the request returns an error.
 */
export default async function signupRequest(email, password) {
    requestServiceLogger.debug('Signup request service starting');
    const response = await apiRequest({
        path: '/users',
        method: 'post',
        requestData: { email, password },
    });

    if (response.error) {
        throw response.error;
    }

    return response.data;
}
