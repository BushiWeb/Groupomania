import HttpError from './HttpError.js';

/**
 * Class representing an error occuring when the user send a body in an unsupported format in the API.
 * Inherits from the HttpError object.
 */
export default class UnsupportedMediaTypeError extends HttpError {
    /**
     * UnsupportedMediaTypeError constructor.
     * Calls the error constructor and sets the status.
     * @param {Object} error - Object containing the public error informations. This object may contain any property, even if not defined in the documentation. Any other property will be logged, but not sent to the user.
     * @param {string} error.message - Error message.
     * @param {string} [error.title] - User friendly short error message.
     * @param {string} [error.description] - User friendly more in depth error description
     * @param {Array|*} [error.details] - More informations about the error, that would be unclear if depicted in a string. These data will be shown to the user. If you need the data for logging reasons only, add them as standalone properties in the error.
     * @param {string} error.path - Path of the request that generated the error.
     * @param {string} error.method - Method of the request that generated the error.
     * @param {*} [cause] - Original error, used to generate the HTTP error.
     * @param {Object} [headers = {}] - Headers to add to the response.
     */
    constructor({message, title: optionnalTitle, description: optionnalDescription, details, path, method, ...otherData}, cause, headers = {}) {
        const statusCode = 415;
        const name = 'UnsupportedMediaTypeError';
        const title = optionnalTitle || 'the Content-Type is not supported.';
        const description = optionnalDescription || 'We currently can\'t handle this Content-Type. You may try again with a different data format.';
        super({ message, name, title, description, details, statusCode, path, method, ...otherData }, cause, headers);
    }
}