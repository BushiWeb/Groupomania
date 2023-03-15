/**
 * Class representing an error in the API.
 * Inherits from the base Error object.
 */
export default class HttpError extends Error {
    /**
     * HttpError constructor.
     * Calls the error constructor and sets the status.
     * @param {Object} error - Object containing the public error informations. This object may contain any property,
     *  even if not defined in the documentation. Any other property will be logged, but not sent to the user.
     * @param {string} error.message - Error message.
     * @param {string} [error.name = 'HttpError'] - Error name.
     * @param {string} [error.title] - User friendly short error message.
     * @param {string} [error.description] - User friendly more in depth error description.
     * @param {Array|*} [error.details] - More informations about the error, that would be unclear if depicted in a
     *  string. These data will be shown to the user. If you need the data for logging reasons only, add them as
     *  logDetails.
     * @param {Array|*} [error.logDetails] - More informations about the error, that would be unclear if depicted in a
     *  string. These data will not be shown to the user but will be displayed in the log.
     * @param {number} [error.statusCode=500] - The error status code, to send back to the user.
     * @param {string} [error.path] - Path of the request that generated the error.
     * @param {string} [error.method] - Method of the request that generated the error.
     * @param {*} [cause] - Original error, used to generate the HTTP error.
     * @param {Object} [headers = {}] - Headers to add to the response.
     */
    constructor(
        {
            message,
            name = 'HttpError',
            title, description,
            details,
            logDetails,
            statusCode = 500,
            path,
            method,
            ...otherData
        },
        cause,
        headers = {}
    ) {
        // Load error informations
        super(message, { ...cause && { cause }});

        this.name = name;
        this.title = title;
        this.description = description;
        this.details = !details || Array.isArray(details) ? details : [details];
        this.logDetails = !logDetails || Array.isArray(logDetails) ? logDetails : [logDetails];
        this.statusCode = statusCode;
        this.path = path;
        this.method = method;

        this.dateTime = new Date();

        this.more = otherData;

        this.headers = headers;
    }

    /**
     * Returns an object representation of the error that is user safe. The representation shouldn't contain any
     *  sensitive information whatsoever, and can be sent to the user without any modification.
     * @return {{
     *  type: string,
     *  title: string,
     *  message: string,
     *  details: Array,
     *  statusCode: number,
     *  timestamp: string,
     *  path: string,
     *  method: string
     * }} Returns an object containing the error informations:
     *      - The type is the error name;
     *      - The title is a brief summary of the error;
     *      - The message gives more details about the error, if necessary;
     *      - The details is an array containing more informations that would be unclear if depicted in the message,
     *        i.e. invalid fields;
     *      - The statusCode contains the response status and remains unchanged even when using a proxy,
     *      - The timestamp is the date and time of the error, in ISO formatwith timezone UTC;
     *      - The path and methods contains the HTTP request methods and path that generated the error.
     */
    getErrorResponse() {
        return {
            error: {
                type: this.name,
                title: this.title || this.message,
                ...this.description && { message: this.description },
                ...this.details && { details: this.details },
                statusCode: this.statusCode,
                timestamp: this.dateTime,
                ...this.path && { path: this.path },
                ...this.method && { method: this.method },
            },
        };
    }


    /**
     * Returns an object representation of the error to log. The representation shouldn't contain any sensitive
     * information whatsoever.
     * @return {{
     *  label: string,
     *  message: string,
     *  details: Array,
     *  statusCode: number,
     *  errorDate: string,
     *  path: string, method:
     *  string,
     *  stack: string,
     *  originStack: string
     * }} Returns an object containing the error informations:
     *      - The type is the error name;
     *      - The title is a brief summary of the error;
     *      - The message gives more details about the error, if necessary;
     *      - The details is an array containing more informations that would be unclear if depicted in the message,
     *        i.e. invalid fields;
     *      - The statusCode contains the response status and remains unchanged even when using a proxy,
     *      - The timestamp is the date and time of the error, in ISO formatwith timezone UTC;
     *      - The path and methods contains the HTTP request methods and path that generated the error.
     */
    getErrorLogInformations() {
        return {
            label: this.name,
            message: this.message,
            ...this.logDetails && { details: this.logDetails } || this.details && { details: this.details },
            statusCode: this.statusCode,
            errorDate: this.dateTime,
            ...this.path && { path: this.path },
            ...this.method && { method: this.method },
            stack: this.stack,
            ...this.cause?.stack && { originStack: this.cause.stack },
            ...this.more,
        };
    }

    /**
     * Set the path and method properties.
     * @param {string} path - Path to set.
     * @param {string} method - Method to set.
     * @returns {HttpError} Returns the current instance of HttpError for method chaining.
     */
    setRequestInformations(path, method) {
        this.path = path;
        this.method = method;
        return this;
    }

    /**
     * Set the title and the description.
     * @param {string} title
     * @param {string} description
     * @returns {HttpError} Returns the current instance of HttpError for method chaining.
     */
    setPublicMessages(title, description) {
        this.title = title;
        this.description = description;
        return this;
    }
}