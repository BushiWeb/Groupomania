import apiRequest from './apiRequest.js';
import { createLoggerNamespace } from '../../logger/index.js';

const requestServiceLogger = createLoggerNamespace('groupomania:bff:service:requests');

/**
 * Creates a Login request to the API.
 * @param {string} email - User email.
 * @param {string} password - User password.
 * @returns {Promise} Returns a promise resolved with the request response data.
 * @throws Throws if the request returns an error.
 */
export default async function loginRequest(email, password) {
    requestServiceLogger.debug('Login request service starting');
    const response = await apiRequest({
        path: '/auth/login',
        method: 'post',
        requestData: { email, password },
    });

    if (response.error) {
        throw response.error;
    }

    return response.data;
}