import { createLoggerNamespace } from '../../logger/index.js';
import axios from 'axios';

const loginServiceLogger = createLoggerNamespace('groupomania:bff:service:requests');

/**
 * Sends a login request to the API.
 * @param {Object} requestData - Data to send to the server.
 * @param {string} requestData.email
 * @param {string} requestData.password
 * @returns {{accessToken: string, refreshToken: string, userId: number}} Returns the data returned by the API.
 * @throws {AxiosError} Throws an error if the response is not successfull.
 */
export default async function loginRequest(requestData) {
    loginServiceLogger.debug('Login request service starting');

    const requestUrl = '/auth/login';
    const { data } = await axios.post(requestUrl, requestData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return data;
}