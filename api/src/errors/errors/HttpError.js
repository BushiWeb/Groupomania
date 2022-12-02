/**
 * Class representing an error in the API.
 * Inherits from the base Error object.
 */
export default class HttpError extends Error {
    /**
     * HttpError constructor.
     * Calls the error constructor and sets the status.
     * @param {Object} error - Object containing the public error informations.
     * @param {string} error.summary - Error's summary.
     * @param {string} error.path - Path of the request that generated the error.
     * @param {string} error.method - Method of the request that generated the error.
     * @param {number} [error.statusCode=500] - The error status code, to send back to the user.
     * @param {string} [error.description] - More detailed explanation about the error.
     * @param {Array|*} [error.details] - More informations about the error, that would be unclear if depicted in a string.
     * @param {Object} [log] - Object containing the data to log. If the log parameter is absent, the public error informations will be used.
     * @param {string|Error} [log.message] - Message to log. It can be a string or an error instance. If absent, the summary and description will be used.
     * @param {*} [origin] - Original error, used to generate the HTTP error.
     */
    constructor({summary, path, method, statusCode = 500, description, details}, log, origin) {
        super(summary);
        this.statusCode = statusCode;
        this.name = 'HttpError';
        this.dateTime = new Date();
        this.path = path;
        this.method = method;
        if (description) {
            this.description = description;
        }

        if (Array.isArray(details) && details.length > 0) {
            this.details = details;
        } else if (details) {
            this.details = [details];
        }

        if (log) {
            this.logInformations = log;
        }

        if (origin) {
            this.originError = origin;
        }
    }

    /**
     * Returns a JSON representation of the error that is user safe. The representation shouldn't contain any sensitive information whatsoever, and can be sent to the user without any modification.
     * @return {{type: string, title: string, message: string, details: Array, statusCode: number, timestamp: string, path: string, method: string}} Returns an object containing the error informations: the type is the error name; the title is a brief summary of the error; the message gives more details about the error, if necessary; the details is an array containing more informations that would be unclear if depicted in the message, i.e. invalid fields; the statusCode contains the response status and remains unchanged even when using a proxy, the timestamp is the date and time of the error, in ISO formatwith timezone UTC; the paht and methods contains the HTTP request methods and path that generated the error.
     */
    getErrorResponse() {
        let error = {
            type: this.name,
            title: this.message,
            statusCode: this.statusCode,
            timestamp: this.dateTime,
            path: this.path,
            method: this.method
        };

        if (this.description) {
            error.message = this.description;
        }

        if (this.details) {
            error.details = this.details;
        }

        return { error };
    }
}