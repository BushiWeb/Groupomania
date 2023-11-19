import apiRequest from './apiRequest.js';
import { createLoggerNamespace } from '../../logger/index.js';

const requestServiceLogger = createLoggerNamespace(
    'groupomania:bff:service:requests',
);

/**
 * Creates a create post request to the API.
 * @param {Object | FormData} postData - Object of FormData containing the new post informations, including the files
 *  as blobs.
 * @param {string} contentType - Content-Type of the body.
 * @param {{accessToken: string, refreshToken: string}} sessionAuth - Session object containing the authentication
 *  tokens. Used to get the tokens.
 *  It may be modified by side effects if the tokens are refreshed.
 * @returns {Promise} Returns a promise resolved with the new post data.
 * @throws Throws if the request returns an error.
 */
export default async function createPostRequest(
    postData,
    contentType,
    sessionAuth,
) {
    requestServiceLogger.debug('Create post request service starting');

    const response = await apiRequest({
        path: '/posts',
        method: 'post',
        accessToken: sessionAuth.accessToken,
        refreshToken: sessionAuth.refreshToken,
        requestData: postData,
        contentType,
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
