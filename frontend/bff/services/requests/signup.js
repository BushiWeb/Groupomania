import { createLoggerNamespace } from '../../logger/index.js';
import axios from 'axios';

const signupServiceLogger = createLoggerNamespace('groupomania:bff:service:requests');

/**
 * Sends a create user request to the API.
 * @param {Object} requestData - Data to send to the server.
 * @param {string} requestData.email
 * @param {string} requestData.password
 * @returns {{userId: number, email: string}} Returns the data returned by the API.
 * @throws {AxiosError} Throws an error if the response is not successfull.
 */
export default async function signupRequest(requestData) {
    signupServiceLogger('Signup request service starting');

    const requestUrl = '/users';
    const { data } = await axios.post(requestUrl, requestData);
    return data;
}