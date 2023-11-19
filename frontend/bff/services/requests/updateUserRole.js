import apiRequest from './apiRequest.js';
import { createLoggerNamespace } from '../../logger/index.js';

const requestServiceLogger = createLoggerNamespace(
    'groupomania:bff:service:requests',
);

/**
 * Creates an update user role request to the API.
 * @param {number} roleId
 * @param {number} userId
 * @param {{accessToken: string, refreshToken: string}} sessionAuth - Session object containing the authentication
 *  tokens. Used to get the tokens.
 *  It may be modified by side effects if the tokens are refreshed.
 * @returns {Promise} Returns a promise resolved with true.
 * @throws Throws if the request returns an error.
 */
export default async function updateUserRoleRequest(
    roleId,
    userId,
    sessionAuth,
) {
    requestServiceLogger.debug('Update user request service starting');
    const response = await apiRequest({
        path: `/users/${userId}/role`,
        method: 'put',
        requestData: { roleId },
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

    return true;
}
