import { getAntiCSRFToken } from './antiCSRFToken.js';

/**
 *
 * @param {{Object}} config
 * @param {string} config.url
 * @param {string} [config.method = 'GET']
 * @param {Object} [config.data]
 * @param {Object} [config.headers]
 * @param {boolean} [config.antiCSRFToken = true]
 * @returns {Response} Returns the response
 * @throws {Response} Throws if the request returns an error
 */
export async function simpleFetch({
    url,
    method = 'GET',
    data,
    headers,
    antiCSRFToken = true,
}) {
    const response = await fetch(url, {
        method,
        headers: {
            ...data && { 'Content-Type': 'application/json' },
            ...antiCSRFToken && { 'X-CRSF-Token': getAntiCSRFToken() },
            ...headers,
        },
        ...data && { body: JSON.stringify(data) },
    });

    if (!response.ok) {
        throw response;
    }

    return response;
}