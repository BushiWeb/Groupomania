import { createLoggerNamespace } from '../../logger/index.js';
import axios from 'axios';

const getUserInfoServiceLogger = createLoggerNamespace('groupomania:bff:service:requests');

/**
 * Send a request to the API to get the user informations.
 * @param {number} userId - Id of the user to fetch.
 * @param {String} token - Access token to use.
 * @returns {{
 *  userId: number,
 *  email: String,
 *  role: {
 *      name: String,
 *      roleId: number
 *  }
 * }} Returns the data returned by the API.
 * @throws {AxiosError} Throws an error if the response is not successfull.
 */
export default async function getUserInfoRequest(userId, token) {
    getUserInfoServiceLogger('Get user informations request service starting');

    const requestUrl = `/users/${userId}?roleInfo=true`;
    const { data } = await axios.post(requestUrl, {}, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    return data;
}