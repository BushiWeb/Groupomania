import isEmail from 'validator/lib/isEmail.js';
import { simpleFetch } from '../../../utils/fetch.js';
import isStrongPassword from 'validator/lib/isStrongPassword.js';

export const ERROR_MESSAGES = {
    wrongEmailFormat: 'L\'email doit être du type "exemple@email.com"',
    wrongPasswordFormat: 'Le mot de passe doit contenir 8 caractères dont au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 symbole',
    requiredOldPassword: 'L\'ancien mot de passe est obligatoire pour confirmer votre identité',
    wrongOldPassword: 'L\'ancien mot de passe est invalide',
    forbiddenAction: 'Vous n\'avez pas les droits pour modifier cet utilisateur',
    notFound: 'L\'utilisateur que vous souhaitez modifier ne peut pas être trouvé. Il se peut qu\'il soit supprimé.',
    existingAccount: 'Un compte avec cet email existe déjà, veuillez choisir un nouvel email',
};

/**
 * Validate form data
 * @param {Object} validationData
 * @param {Object} validationData.email
 * @param {Object} validationData.oldPassword
 * @param {Object} validationData.newPassword
 * @throws Throws if there is an error
 */
export function validatePostData({
    email,
    oldPassword,
    newPassword,
}) {
    const errors = {};

    if ((email || newPassword) && !oldPassword) {
        errors.oldPassword = ERROR_MESSAGES.requiredOldPassword;
    }

    if (email && !isEmail(email)) {
        errors.email = ERROR_MESSAGES.wrongEmailFormat;
    }

    if (newPassword && !isStrongPassword(newPassword)) {
        errors.newPassword = ERROR_MESSAGES.wrongPasswordFormat;
    }


    if (Object.keys(errors).length !== 0) {
        throw errors;
    }
}

/**
 * Sends a request to update the user
 * @param {{email, password, currentPassword}} data - Data to send
 * @param {number} userId
 * @returns Returns the server response in JSON format
 * @throws Throws in case of an error
 */
export async function updateUserRequest(data, userId) {
    const response = simpleFetch({
        url: `/data/users/${userId}`,
        method: 'PUT',
        data,
    });

    return response;
}

/**
 * Handles request errors from user update requests
 * @param {Response} error - Response returned containing the error.
 * @returns {Promise}
 *  Returns a Promise resolved with an object container the error message for each field
 * @throws Throws an error if the error doesn't contain a body, or if it is not handled
 */
export async function handleUpdateUserRequestError(error) {
    const requestError = await error.json();
    const errorMessages = {};

    switch (error.status) {
    case 400:
        if (!requestError.error?.details) {
            throw new Error('Unhandled 400 error type');
        }
        break;
    case 401:
        if (/credentials/.test(requestError.error?.title)) {
            return { oldPassword: ERROR_MESSAGES.wrongOldPassword };
        }
        throw new Error('Unauthorized');
    case 403:
        if (requestError.error?.details) {
            return { global: ERROR_MESSAGES.forbiddenAction };
        }
        return { global: ERROR_MESSAGES.existingAccount };
    case 404:
        return { global: ERROR_MESSAGES.notFound };
    case 409:
        return { global: ERROR_MESSAGES.existingAccount };
    default:
        throw new Error('Unhandled error status');
    }

    for (const fieldError of requestError.error.details) {
        if (fieldError.param === 'email') {
            errorMessages.email = ERROR_MESSAGES.wrongEmailFormat;
        } else if (fieldError.param === 'password') {
            errorMessages.newPassword = ERROR_MESSAGES.wrongPasswordFormat;
        } else if (fieldError.param === 'currentPassword') {
            errorMessages.oldPassword = ERROR_MESSAGES.requiredOldPassword;
        }
    }
    return errorMessages;
}