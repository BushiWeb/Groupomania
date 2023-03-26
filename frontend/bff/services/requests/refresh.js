import { createLoggerNamespace } from '../../logger/index.js';
import axios from 'axios';

const refreshServiceLogger = createLoggerNamespace('groupomania:bff:service:requests');

/**
 * Sends a refresh access token request to the API.
 * @param {String} token - Refresh token to use.
 * @returns {{accessToken: string, refreshToken: string, userId: number}} Returns the data returned by the API.
 * @throws {AxiosError} Throws an error if the response is not successfull.
 */
export default async function refreshRequest(token) {
    refreshServiceLogger.debug('Refresh authentication request service starting');

    const requestUrl = '/auth/accessToken';
    const { data } = await axios({
        method: 'post',
        url: requestUrl,
        data: null,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': null,
        },
    });
    return data;
}