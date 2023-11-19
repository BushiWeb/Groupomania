import { createLoggerNamespace } from '../../logger/index.js';
import axios from 'axios';

const requestServiceLogger = createLoggerNamespace(
    'groupomania:bff:service:requests',
);

/**
 * Creates the request configuration.
 * @param {Object} requestParameters
 * @param {String} requestParameters.path - URL path for the request. The protocol, domain, port and base path will
 *  automatically be appended from the axios configuration (for example http://localhost:8000/api/v1).
 * @param {String} requestParameters.method - Method to use for the request.
 * @param {Object} [requestParameters.requestData=null] - Data to join to the request.
 * @param {String} [requestParameters.contentType='application/json'] - Type of the content to join.
 *  Currently only JSON is supported. If the requestData is null, then the content will be automatically set to null.
 * @param {String} [requestParameters.accessToken] - The access token is used to authenticate the user for the request.
 *  If not provided, the refresh token will be used in place. If there is no refresh token, the request won't
 *  be authenticated.
 * @param {String} [requestParameters.refreshToken] -The refresh token is used in place of the access token for
 *  authentication if it is not provided.
 * @returns {Object} Returns the configuration object.
 */
function generateRequestConfiguration({
    path,
    method,
    requestData = null,
    contentType = 'application/json',
    accessToken,
    refreshToken,
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
            Authorization:
                authorizationToken ? `Bearer ${authorizationToken}` : null,
            'Content-Type': requestData ? contentType : null,
        },
    };
}

/**
 * Sends a refresh request to the API.
 * @param {String} token
 * @returns {Promise} Returns new tokens to use or the error/
 */
async function reAuthenticate(token) {
    requestServiceLogger.debug('Refreshing the tokens');
    return apiRequest({
        path: '/auth/accessToken',
        method: 'post',
        contentType: null,
        refreshToken: token,
    });
}

/**
 * Retry the request
 * @param {String} refreshToken - Refresh token to use to refresh the tokens.
 * @param {Object} requestConfiguration - Request configuration used for the first try.
 * @returns {Promise} Returns a promise containing the data of the response or the error, as well as the new tokens.
 */
async function retryRequest(refreshToken, requestConfiguration) {
    requestServiceLogger.debug('Trying again after reauthentication');

    // Refresh the tokens
    const response = await reAuthenticate(refreshToken);
    if (response.error) {
        requestServiceLogger.debug('Reauthentication unsuccessful');
        return response;
    }

    const refreshedTokens = {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
    };

    // Try again
    try {
        requestServiceLogger.debug('Reauthentication successful, trying again');
        requestConfiguration.headers['Authorization'] =
            `Bearer ${refreshedTokens.accessToken}`;
        const { data } = await axios(requestConfiguration);
        return { data, refreshedTokens };
    } catch (error) {
        requestServiceLogger.debug('Error on second try');
        return { error, refreshedTokens };
    }
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
 * @param {String} [accessToken] - The access token is used to authenticate the user for the request. If not provided,
 *  the refresh token will be used in place. If there is no refresh token, the request won't be authenticated.
 * @param {String} [refreshToken] -The refresh token is used to try the request again in case of UnauthorizedError, if
 *  an acces token is provided. Otherwise, it is used in place of the access token for authentication.
 * @returns {Promise} Returns a promise containing the data of the response or the error.
 *  If the tokens are refreshed, also contains the tokens.
 */
export default async function apiRequest(requestParameters) {
    requestServiceLogger.debug('Request service starting');

    const requestConfiguration =
        generateRequestConfiguration(requestParameters);

    try {
        requestServiceLogger.debug('Sending the request');
        const { data } = await axios(requestConfiguration);
        return { data };
    } catch (error) {
        let result = { error };

        // If the error is an UnauthorizedError and the user provided both tokens, retry once
        if (
            requestParameters.accessToken &&
            requestParameters.refreshToken &&
            error.response &&
            error.response.status === 401
        ) {
            result = retryRequest(
                requestParameters.refreshToken,
                requestConfiguration,
            );
        }

        return result;
    }
}
