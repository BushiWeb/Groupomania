import apiRequest from './apiRequest.js';
import { createLoggerNamespace } from '../../logger/index.js';

const requestServiceLogger = createLoggerNamespace(
    'groupomania:bff:service:requests',
);

/**
 * Creates a logout request to the API.
 * @param {string} refreshToken
 * @returns {Promise} Returns a promise resolved with true.
 * @throws Throws if the request returns an error.
 */
export default async function logoutRequest(refreshToken) {
    requestServiceLogger.debug('Login request service starting');
    const response = await apiRequest({
        path: '/auth/logout',
        method: 'post',
        refreshToken,
    });

    if (response.error) {
        throw response.error;
    }

    return true;
}
