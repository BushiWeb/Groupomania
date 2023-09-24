import { simpleFetch } from '../../../utils/fetch.js';

export const ERROR_MESSAGES = {
    requiredTitle: 'L\'email est obligatoire',
    requiredMessage: 'Le mot de passe est obligatoire',
};

/**
 * Validate form data
 * @param {Object} validationData
 * @param {Object} validationData.title
 * @param {boolean} [validationData.title.required=true]
 * @param {string} validationData.title.value
 * @param {Object} validationData.message
 * @param {boolean} [validationData.message.required=true]
 * @param {string} validationData.message.value
 * @throws Throws if there is an error
 */
export function validatePostData({
    title: { required: titleRequired = true, value: title },
    message: { required: messageRequired = true, value: message },
}) {
    const errors = {};

    if (titleRequired && !title) {
        errors.title = ERROR_MESSAGES.requiredTitle;
    }

    if (messageRequired && !message) {
        errors.message = ERROR_MESSAGES.requiredMessage;
    }

    if (Object.keys(errors).length !== 0) {
        throw errors;
    }
}

/**
 * Sends the create post request
 * @param {Object} data - Data to send
 * @returns Returns the server response in JSON format
 * @throws Throws in case of an error
 */
export async function createPostRequest(data) {
    const response = simpleFetch({
        url: '/data/posts',
        method: 'POST',
        data,
    });

    return response;
}

/**
 * Handles request errors from post creation requests
 * @param {Response} error - Response returned containing the error.
 * @returns {Promise}
 *  Returns a Promise resolved with an object container the error message for each field
 * @throws Throws an error if the error doesn't contain a body, or if it is not handled
 */
export async function handleCreatePostRequestError(error) {
    const requestError = await error.json();
    const errorMessages = {};

    switch (error.status) {
    case 401:
        throw new Error('Unauthorized');
    case 400:
        if (!requestError.error?.details) {
            throw new Error('Unhandled 400 error type');
        }
        break;
    default:
        throw new Error('Unhandled error status');
    }

    for (const fieldError of requestError.error.details) {
        if (fieldError.param === 'title') {
            errorMessages.title = ERROR_MESSAGES.requiredTitle;
        } else if (fieldError.param === 'message') {
            errorMessages.message = ERROR_MESSAGES.requiredMessage;
        }
    }
    return errorMessages;
}