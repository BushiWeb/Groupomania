import apiRequest from './apiRequest.js';
import { createLoggerNamespace } from '../../logger/index.js';

const requestServiceLogger = createLoggerNamespace(
    'groupomania:bff:service:requests',
);

/**
 * Creates a refresh access token request to the API.
 * @param {string} refreshToken
 * @returns {Promise} Returns a promise resolved with the request response data.
 * @throws Throws if the request returns an error.
 */
export default async function refreshRequest(refreshToken) {
    requestServiceLogger.debug('Refresh access token request service starting');

    const response = await apiRequest({
        path: '/auth/accessToken',
        method: 'post',
        refreshToken,
    });

    if (response.error) {
        throw response.error;
    }

    return response.data;
}
