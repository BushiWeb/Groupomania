import { simpleFetch } from '../../../utils/fetch.js';

export const ERROR_MESSAGES = {
    requiredTitle: 'L\'email est obligatoire',
    requiredMessage: 'Le mot de passe est obligatoire',
    requiredImage: 'L\'image est obligatoire',
    wrongImageFormat: 'Le fichier doit être une image au format png, jpeg, webp ou avif',
    forbiddenAction: 'Vous n\'avez pas les droits pour modifier ce post',
    notFound: 'Le post que vous souhaitez modifier ne peut pas être trouvé. Il se peut qu\'il soit supprimé.',
};

const ALLOWED_TYPES = [
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/avif',
];

/**
 * Validate form data
 * @param {Object} validationData
 * @param {Object} validationData.title
 * @param {boolean} [validationData.title.required=true]
 * @param {string} validationData.title.value
 * @param {Object} validationData.message
 * @param {boolean} [validationData.message.required=true]
 * @param {string} validationData.message.value
 * @param {Object} validationData.image
 * @param {boolean} [validationData.message.required=false]
 * @param {boolean} [validationData.message.format=true]
 * @param {string} validationData.image.value
 * @throws Throws if there is an error
 */
export function validatePostData({
    title: { required: titleRequired = true, value: title },
    message: { required: messageRequired = true, value: message },
    image: { required: imageRequired = false, format: imageFormat = true, value: image },
}) {
    const errors = {};

    if (titleRequired && !title) {
        errors.title = ERROR_MESSAGES.requiredTitle;
    }

    if (messageRequired && !message) {
        errors.message = ERROR_MESSAGES.requiredMessage;
    }

    if (imageRequired && !image) {
        errors.image = ERROR_MESSAGES.requiredImage;
    } else if (
        image &&
        imageFormat &&
        !(image instanceof File && ALLOWED_TYPES.includes(image.type))
    ) {
        errors.image = ERROR_MESSAGES.wrongImageFormat;
    }

    if (Object.keys(errors).length !== 0) {
        throw errors;
    }
}

/**
 * Generates the data object to send with the request
 * @param {Object} data - Data to send
 * @param {string} [data.title]
 * @param {string} [data.message]
 * @param {File|bool} [data.image] - Either the file to upload, or false if the image needs to be deleted
 * @param {File|bool} [data.deleteImage] - When updating, weither to delete the image or not.
 *  Ignored if the image property is given.
 * @returns {Object|FormData}
 */
function generateRequestData({
    title, message, image, deleteImage,
}) {
    let data = {
        ...title && { title },
        ...message && { message },
    };

    if (image instanceof File) {
        const stringifiedData = JSON.stringify(data);
        data = new FormData();
        data.set('post', stringifiedData);
        data.set('image', image);
    } else if (deleteImage) {
        data.deleteImage = true;
    }

    return data;
}

/**
 * Sends the create post request
 * If no file is given, send data as JSON.
 * If an image is given, send the data as multipart/form-data.
 * @param {Object} rawData - Data to send
 * @returns Returns the server response in JSON format
 * @throws Throws in case of an error
 */
export async function createPostRequest(rawData) {
    const data = generateRequestData(rawData);

    const response = simpleFetch({
        url: '/data/posts',
        method: 'POST',
        data,
    });

    return response;
}

/**
 * Sends a request to update the post
 * If no file is given, send data as JSON.
 * If an image is given, send the data as multipart/form-data.
 * If the image value is false, sends data as JSON with the deleteImage property
 * @param {Object} rawData - Data to send
 * @param {number} postId
 * @returns Returns the server response in JSON format
 * @throws Throws in case of an error
 */
export async function updatePostRequest(rawData, postId) {
    const data = generateRequestData(rawData);

    const response = simpleFetch({
        url: `/data/posts/${postId}`,
        method: 'PUT',
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
    case 400:
        if (/required file/.test(requestError.error?.message)) {
            return { image: ERROR_MESSAGES.requiredImage };
        }
        if (!requestError.error?.details) {
            throw new Error('Unhandled 400 error type');
        }
        break;
    case 401:
        throw new Error('Unauthorized');
    case 403:
        return { global: ERROR_MESSAGES.forbiddenAction };
    case 404:
        return { global: ERROR_MESSAGES.notFound };
    case 415:
        return { image: ERROR_MESSAGES.wrongImageFormat };
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