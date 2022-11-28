import HttpError from './HttpError.js';

/**
 * Class representing an error in the API.
 * Inherits from the HttpError object.
 */
export default class NotFoundError extends HttpError {
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
        const statusCode = 404;
        summary ||= 'The ressource you are requesting can\'t be found. Please, double check your request and try again.';
        super(summary, path, method, statusCode, description, details);
        this.name = 'NotFoundError';
    }
}