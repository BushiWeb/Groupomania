import HttpError from './HttpError.js';

/**
 * Class representing an error in the API.
 * Inherits from the HttpError object.
 */
export default class ConflictError extends HttpError {
    /**
     * HttpError constructor.
     * Calls the error constructor and sets the status.
     * @param {Object} error - Object containing the public error informations.
     * @param {string} error.summary - Error's summary.
     * @param {string} error.path - Path of the request that generated the error.
     * @param {string} error.method - Method of the request that generated the error.
     * @param {string} [error.description] - More detailed explanation about the error.
     * @param {Array|*} [error.details] - More informations about the error, that would be unclear if depicted in a string.
     * @param {Object} [log] - Object containing the data to log. If the log parameter is absent, the public error informations will be used.
     * @param {string|Error} [log.message] - Message to log. It can be a string or an error instance. If absent, the summary and description will be used.
     * @param {*} [origin] - Original error, used to generate the HTTP error.
     */
    constructor({path, method, summary, description, details}, log, origin) {
        const statusCode = 409;
        summary ||= 'There is a conflict with the target ressource.';
        description ||= 'We couldn\'t complete the request due to a conflict with the ressources. Please, solve the conflict before trying again.';
        super({summary, path, method, description, details, statusCode}, log, origin);
        this.name = 'ConflictError';
    }
}