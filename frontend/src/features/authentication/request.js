import { simpleFetch } from '../../utils/fetch.js';
import isEmail from 'validator/lib/isEmail.js';
import isStrongPassword from 'validator/lib/isStrongPassword.js';

export const ERROR_MESSAGES = {
    requiredEmail: 'L\'email est obligatoire',
    requiredPassword: 'Le mot de passe est obligatoire',
    wrongEmail: 'L\'email doit être du type "exemple@email.com"',
    wrongPassword: 'Le mot de passe doit contenir 8 caractères dont au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 symbole',
    existingAccount: 'Un compte avec cet email existe déjà, veuillez vous connecter',
    wrongCredentials: 'L\'email ou le mot de passe est invalide',
};

/**
 * Validate form data
 * @param {Object} validationData
 * @param {Object} validationData.email
 * @param {boolean} [validationData.email.required=true]
 * @param {boolean} [validationData.email.format=true]
 * @param {string} validationData.email.value
 * @param {Object} validationData.password
 * @param {boolean} [validationData.password.required=true]
 * @param {boolean} [validationData.password.format=true]
 * @param {string} validationData.password.value
 * @throws Throws if there is an error
 */
export function validateAuthData({
    email: { required: emailRequired = true, format: emailFormat = true, value: email },
    password: { required: passwordRequired = true, format: passwordFormat = true, value: password },
}) {
    const errors = {};

    if (emailRequired && !email) {
        errors.email = ERROR_MESSAGES.requiredEmail;
    } else if (emailFormat && !isEmail(email)) {
        errors.email = ERROR_MESSAGES.wrongEmail;
    }

    if (passwordRequired && !password) {
        errors.password = ERROR_MESSAGES.requiredPassword;
    } else if (passwordFormat && !isStrongPassword(password)) {
        errors.password = ERROR_MESSAGES.wrongPassword;
    }

    if (Object.keys(errors).length !== 0) {
        throw errors;
    }
}

/**
 * Sends the authentication request
 * @param {Object} data - Data to send
 * @param {string} path - Either login or signup, depending on the action
 * @returns Returns the server response in JSON format
 * @throws Throws in case of an error
 */
export async function authRequest(data, path) {
    const response = simpleFetch({
        url: `/data/${path}`,
        method: 'POST',
        data,
    });

    return response;
}

/**
 * Handles request errors from authentication requests
 * @param {Response} error - Response returned containing the error.
 * @returns {Promise}
 *  Returns a Promise resolved with an object container the error message for each field
 * @throws Throws an error if the error doesn't contain a body, or if it is not handled
 */
export async function handleAuthRequestError(error) {
    const requestError = await error.json();
    const errorMessages = {};

    switch (error.status) {
    case 409:
        return { global: ERROR_MESSAGES.existingAccount };
    case 401:
        return { global: ERROR_MESSAGES.wrongCredentials };
    case 400:
        if (!requestError.error?.details) {
            throw new Error('Unhandled 400 error type');
        }
        break;
    default:
        throw new Error('Unhandled error status');
    }

    for (const fieldError of requestError.error.details) {
        const isRequiredError = /required/.test(fieldError.message);
        if (fieldError.param === 'email') {
            errorMessages.email = isRequiredError ? ERROR_MESSAGES.requiredEmail : ERROR_MESSAGES.wrongEmail;
        } else if (fieldError.param === 'password') {
            errorMessages.password = isRequiredError ? ERROR_MESSAGES.requiredPassword : ERROR_MESSAGES.wrongPassword;
        }
    }
    return errorMessages;
}

/**
 * Handles frontend validation errors
 * @param {Object} error - Response returned containing the error.
 * @returns {{email: string, password: string}} Returns an object container the error message for each field
 */
export function handleValidationError(error) {
    return {
        email: error.email,
        password: error.password,
    };
}