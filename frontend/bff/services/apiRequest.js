import { createLoggerNamespace } from '../logger/index.js';
import axios from 'axios';

const requestServiceLogger = createLoggerNamespace('groupomania:bff:service:requests');

/**
 * Creates the request configuration.
 * @param {Object} requestParameters
 * @param {String} requestMethod.path - URL path for the request. The protocol, domain, port and base path will
 *  automatically be appended from the axios configuration (for example http://localhost:8000/api/v1).
 * @param {String} requestMethod.method - Method to use for the request.
 * @param {Object} [requestMethod.requestData=null] - Data to join to the request.
 * @param {String} [requestMethod.contentType='application/json'] - Type of the content to join. Currently only JSON is
 *  supported. If the requestData is null, then the content will be automatically set to null.
 * @param {{
 *  accessToken: String,
 *  refreshToken: String
 * }} [authenticationTokens] - Provides the access token and the refresh token.
 *  The access token is used to authenticate the user for the request.
 *  If only the refresh token is provided, it will be used in place of the access token.
 *  If no tokens are provided, no authentication will be performed and the request won't be retried.
 * @returns {Object} Returns the configuration object.
 */
function generateRequestConfiguration({
    path,
    method,
    requestData = null,
    contentType = 'application/json',
    authenticationTokens: {
        accessToken,
        refreshToken,
    },
}) {
    requestServiceLogger.debug('Generating request configuration');

    // Deciding the token to use for authentication
    const authorizationToken = accessToken || refreshToken || null;

    // Parses the data
    let parsedData;
    switch (contentType) {
    default:
        parsedData = requestData;
    }

    //Generating the configuration
    return {
        url: path,
        method,
        data: parsedData,
        headers: {
            'Authorization': authorizationToken ? `Bearer ${authorizationToken}` : null,
            'Content-Type': requestData ? contentType : null,
        },
    };
}


/**
 * Sends a refresh request to the API.
 * @param {String} token
 * @returns {{accessToken: String, refreshToken: String}} Returns new tokens to use.
 * @throws {AxiosError} Throws if the request fails.
 */
async function reAuthenticate(token) {
    requestServiceLogger.debug('Refreshing the tokens');
    const { accessToken, refreshToken } = await apiRequest({
        path: '/auth/accessToken',
        method: 'post',
        contentType: null,
        authenticationTokens: {
            refreshToken: token,
        },
    });

    return { accessToken, refreshToken };
}

/**
 * Send a request to the API. If the authentication tokens are invalid, it will attempt to refresh them and try again
 *  once.
 * @param {Object} requestParameters
 * @param {String} requestMethod.path - URL path for the request. The protocol, domain, port and base path will
 *  automatically be appended from the axios configuration (for example http://localhost:8000/api/v1).
 * @param {String} requestMethod.method - Method to use for the request.
 * @param {Object} [requestMethod.requestData=null] - Data to join to the request.
 * @param {String} [requestMethod.contentType='application/json'] - Type of the content to join. Currently only JSON is
 *  supported. If the requestData is null, then the content will be automatically set to null.
 * @param {{
 *  accessToken: String,
 *  refreshToken: String
 * }} [authenticationTokens] - Provides the access token and the refresh token.
 *  The access token is used to authenticate the user for the request.
 *  The refresh token is used to try the request again in case of UnauthorizedError.
 *  If only the access token is provided, the request won't be retried.
 *  If only the refresh token is provided, it will be used in place of the access token, and the request won't
 *      be retried.
 *  If no tokens are provided, no authentication will be performed and the request won't be retried.
 *  This object may be updated by side effect if the tokens are refreshed. Make sure to keep the reference to this
 *      object to get the new values.
 * @returns {Promise} Returns a promise containing the data of the response.
 * @throws {AxiosError} Throws an error if the response is not successfull.
 */
export default async function apiRequest({
    path,
    method,
    requestData = null,
    contentType = 'application/json',
    authenticationTokens: {
        accessToken,
        refreshToken,
    } = {},
}) {
    requestServiceLogger.debug('Request service starting');

    const requestConfiguration = generateRequestConfiguration({
        path,
        method,
        requestData,
        contentType,
        authenticationTokens: {
            accessToken,
            refreshToken,
        },
    });

    try {
        requestServiceLogger.debug('Sending the request');
        const { data } = await axios(requestConfiguration);
        return data;

    } catch (error) {
        // If the error is an UnauthorizedError and the user provided both tokens, retry once
        if (accessToken && refreshToken && error.response && error.response.status === 401) {
            requestServiceLogger.debug('Trying again after reauthentication');
            // Refresh the tokens
            const refreshedTokens = await reAuthenticate(refreshToken);
            requestServiceLogger.debug('Reauthentication successful, trying again');

            // Update the tokens value
            accessToken = refreshedTokens.accessToken;
            refreshToken = refreshedTokens.refreshToken;

            // Try again
            const { data } = await axios(requestConfiguration);
            return data;
        }

        throw error;
    }
}