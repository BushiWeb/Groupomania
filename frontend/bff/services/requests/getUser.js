import apiRequest from './apiRequest.js';
import { createLoggerNamespace } from '../../logger/index.js';

const requestServiceLogger = createLoggerNamespace('groupomania:bff:service:requests');

/**
 * Creates a Get User request to the API.
 * @param {string} userId - Id of the user to fetch.
 * @param {{accessToken: string, refreshToken: string}} sessionAuth - Session object containing the authentication
 *  tokens. Used to get the tokens.
 *  It may be modified by side effects if the tokens are refreshed.
 * @returns {Promise} Returns a promise resolved with the request response data.
 * @throws Throws if the request returns an error.
 */
export default async function getUserRequest(userId, sessionAuth) {
    requestServiceLogger.debug('Get user request service starting');

    const response = await apiRequest({
        path: `/users/${userId}?roleInfo=true`,
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