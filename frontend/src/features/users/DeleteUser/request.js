import { simpleFetch } from '../../../utils/fetch.js';

export const ERROR_MESSAGES = {
    requiredPassword: 'Le mot de passe est obligatoire pour confirmer votre identité',
    wrongPassword: 'Le mot de passe est invalide',
    forbiddenAction: 'Vous n\'avez pas les droits pour modifier cet utilisateur',
    notFound: 'L\'utilisateur que vous souhaitez modifier ne peut pas être trouvé. Il se peut qu\'il soit supprimé.',
};

/**
 * Validate form data
 * @param {Object} validationData
 * @param {string} validationData.password
 * @throws Throws if there is an error
 */
export function validatePostData({
    password,
}) {
    const errors = {};

    if (!password) {
        errors.password = ERROR_MESSAGES.requiredPassword;
    }

    if (Object.keys(errors).length !== 0) {
        throw errors;
    }
}

/**
 * Sends a request to delete the user role
 * @param {{currentPassword: string}} data
 * @param {number} userId
 * @returns Returns the server response in JSON format
 * @throws Throws in case of an error
 */
export async function deleteUserRequest(data, userId) {
    const response = simpleFetch({
        url: `/data/users/${userId}`,
        method: 'DELETE',
        data,
    });

    return response;
}

/**
 * Handles request errors from user deletion requests
 * @param {Response} error - Response returned containing the error.
 * @returns {Promise}
 *  Returns a Promise resolved with an object container the error message for each field
 * @throws Throws an error if the error doesn't contain a body, or if it is not handled
 */
export async function handleDeleteUserRequestError(error) {
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
            return { password: ERROR_MESSAGES.wrongPassword };
        }
        throw new Error('Unauthorized');
    case 403:
        return { global: ERROR_MESSAGES.forbiddenAction };
    case 404:
        return { global: ERROR_MESSAGES.notFound };
    default:
        throw new Error('Unhandled error status');
    }

    for (const fieldError of requestError.error.details) {
        if (fieldError.param === 'currentPassword') {
            errorMessages.password = ERROR_MESSAGES.requiredPassword;
        } else {
            throw new Error('Unhandled 400 error type');
        }
    }
    return errorMessages;
}