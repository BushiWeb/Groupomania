import apiRequest from './apiRequest.js';
import { createLoggerNamespace } from '../../logger/index.js';
import config from '../../config/config.js';

const requestServiceLogger = createLoggerNamespace(
    'groupomania:bff:service:requests',
);

/**
 * Creates a paginated Get Users request to the API.
 * @param {string} page - Page number for pagination.
 * @param {{accessToken: string, refreshToken: string}} sessionAuth - Session object containing the authentication
 *  tokens. Used to get the tokens.
 *  It may be modified by side effects if the tokens are refreshed.
 * @returns {Promise} Returns a promise resolved with the request response data.
 * @throws Throws if the request returns an error.
 */
export default async function getUsersRequest(page, sessionAuth) {
    requestServiceLogger.debug('Get users request service starting');

    const response = await apiRequest({
        path: `/users?roleInfo=true&limit=${config.get(
            'pagination.users',
        )}&page=${page}`,
        method: 'get',
        accessToken: sessionAuth.accessToken,
        refreshToken: sessionAuth.refreshToken,
    });

    if (response.refreshedTokens) {
        sessionAuth.accessToken = response.refreshedTokens.accessToken;
        sessionAuth.refreshToken = response.refreshedTokens.refreshToken;
    }

    if (response.error) {
        throw response.error;
    }

    return response.data;
}
