import HttpError from './HttpError.js';

/**
 * Class representing validation errors. The details contains all errors descriptions.
 * Inherits from the HttpError object.
 */
export default class UserInputValidationError extends HttpError {
    /**
     * HttpError constructor.
     * Calls the error constructor and sets the status.
     * @param {string} path - Path of the request that generated the error.
     * @param {string} method - Method of the request that generated the error.
     * @param {string} [summary] - Error's summary.
     * @param {string} [description] - More detailed explanation about the error.
     * @param {Array|*} [details] - More informations about the error, that would be unclear if depicted in a string.
     */
    constructor(path, method, summary, description, details) {
        const statusCode = 400;
        summary ||= 'We are having trouble using the data you provided. Please, check your data to make sure they match the constraints.';
        super(summary, path, method, statusCode, description, details);
        this.name = 'UserInputValidationError';
    }
}