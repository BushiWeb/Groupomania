import apiRequest from './apiRequest.js';
import { createLoggerNamespace } from '../../logger/index.js';
import config from '../../config/config.js';

const requestServiceLogger = createLoggerNamespace(
    'groupomania:bff:service:requests',
);

/**
 * Creates a paginated Get posts request to the API.
 * @param {string} page - Page number for pagination.
 * @param {boolean} userInfos - Whether to include the post's author informations or not.
 * @param {{accessToken: string, refreshToken: string}} sessionAuth - Session object containing the authentication
 *  tokens. Used to get the tokens.
 *  It may be modified by side effects if the tokens are refreshed.
 * @param {string} [userId] - User id to filter the requested post by user
 * @returns {Promise} Returns a promise resolved with the request response data.
 * @throws Throws if the request returns an error.
 */
export default async function getPostsRequest(
    page,
    userInfos,
    sessionAuth,
    userId,
) {
    requestServiceLogger.debug('Get posts request service starting');

    const response = await apiRequest({
        path: `/posts?userInfo=${userInfos}&likeInfo=true&limit=${config.get(
            'pagination.posts',
        )}&page=${page}${userId !== undefined ? `&userId=${userId}` : ''}`,
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
