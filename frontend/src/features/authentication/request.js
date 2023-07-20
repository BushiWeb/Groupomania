import { getAntiCSRFToken } from '../../utils/antiCSRFToken.js';
import { ERROR_MESSAGES } from './validation.js';

/**
 * Sends the signup request
 * @param {Object} data - Data to send
 * @returns Returns the server response in JSON format
 * @throws Throws in case of an error
 */
export async function signupRequest(data) {
    const response = await fetch('/data/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CRSF-Token': getAntiCSRFToken(),
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw response;
    }

    return response;
}

/**
 * Handles request errors from the request
 * @param {Response} error - Response returned containing the error.
 * @returns {bool|{email: string, password: string, global: string}}
 *  Returns an object container the error message for each field, or false if the error is not handled
 */
export async function handleSignupRequestError(error) {
    const requestError = await error.json();

    if (requestError.error?.statusCode === 409) {
        return { global: ERROR_MESSAGES.existingAccount };
    }

    if (requestError.error?.statusCode !== 400) {
        return false;
    }

    const errorMessages = {};

    for (const fieldError of requestError.error.details) {
        const isRequiredError = /required/.test(fieldError.message);
        if (fieldError.param === 'email') {
            errorMessages.email = isRequiredError ? ERROR_MESSAGES.requiredEmail : ERROR_MESSAGES.wrongEmail;
        } else if (fieldError.param === 'password') {
            errorMessages.password = isRequiredError ? ERROR_MESSAGES.requiredPassword : ERROR_MESSAGES.wrongPassword;
        }
    }
    console.log(errorMessages);
    return errorMessages;
}