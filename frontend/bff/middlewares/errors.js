import { createLoggerNamespace } from '../logger/index.js';
import {
    HttpError,
    NotFoundError,
    InternalServerError,
    MethodNotAllowedError,
} from '../errors/index.js';
import createError from 'http-errors';
import { AxiosError } from 'axios';

const errorLogger = createLoggerNamespace('groupomania:bff:error');


/**
 * Handles express' http-error normalization.
 * @param err - Express error to normalize.
 * @returns {HttpError} Returns the associated HttpError.
 */
function normalizeExpressError(err) {
    errorLogger.debug('Express error normalization');

    /*
     * Assemble error details.
     * These details will be sent to the user if the status is amongst the 400 errors, and only logged otherwise.
     */
    const details = {
        ...err.type && { type: err.type },
        ...err.body && { body: err.body },
        ...err.charset && { charset: err.charset },
        ...err.received && { bytesReceivedNb: err.received },
        ...err.expected && { bytesExpectedNb: err.expected },
        ...err.limit && { maxSize: err.limit },
        ...err.length && { bodySize: err.length },
    };

    return new HttpError({
        message: err.message,
        name: err.name,
        title: err.expose ? err.message : 'We had a problem while processing your request. You may try again. If the problem persists, don\'t hesitate to contact us.',
        statusCode: err.statusCode,
        ...err.statusCode < 500 ? { details } : { logData: details },
    }, err, err.headers);
}

/**
 * Handles Axios errors.
 * @param err - Express error to normalize.
 * @returns {HttpError} Returns the associated HttpError.
 */
function normalizeAxiosErrors(err) {
    errorLogger.debug('Axios error normalization');

    if (err.response && [400, 401, 403, 404, 409].includes(err.response.data.error.statusCode)) {
        const error = err.response.data.error;
        return new HttpError({
            message: error.title,
            name: error.type,
            title: error.title,
            description: error.message,
            details: error.details,
            statusCode: error.statusCode,
        }, err);
    }

    return new InternalServerError({
        message: err.message,
        originalName: err.name,
        ...err.response && { originalError: err.response.data },
    }, err);
}

/**
 * Normalizes errors.
 * After this middleware, all errors have the same structure and can be handled the same way.
 * JsonWebTokens are normalized here.
 * Errors from Express (http-errors module) already have status and headers which will be kepts.
 * Other errors will have status code 500 and a generic user message.
 * @param {HttpError} err - Error thrown by a middleware.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export function errorNormalizer(err, req, res, next) {
    errorLogger.verbose('Error parser execution');

    if (err instanceof HttpError) {
        errorLogger.debug('HttpError, no need for normalizing');
        err.setRequestInformations(req.originalUrl, req.method);
        return next(err);
    }

    // Express' errors handling
    if (createError.isHttpError(err)) {
        return next(normalizeExpressError(err).setRequestInformations(req.originalUrl, req.method));
    }

    // Axios' errors handling
    if (err instanceof AxiosError) {
        return next(normalizeAxiosErrors(err).setRequestInformations(req.originalUrl, req.method));
    }

    // Normalize other errors
    errorLogger.debug('Generic error, normalizing');
    next(new InternalServerError({
        message: err.message,
        path: req.originalUrl,
        method: req.method,
        originalName: err.name,
    }, err));

}


/**
 * Error handler, generates and sends the error response.
 * @param {HttpError} err - Error thrown by a middleware.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
    errorLogger.verbose('Error handler execution');
    if (err instanceof HttpError) {
        res.header(err.headers);
        res.status(err.statusCode).json(err.getErrorResponse());
        errorLogger.error(err.getErrorLogInformations());
    } else {
        errorLogger.debug('Unparsed error');
        const error = new InternalServerError({
            message: err.message,
            path: req.originalUrl,
            method: req.method,
            originalName: err.name,
        }, err);
        res.status(500).json(error.getErrorResponse());
        errorLogger.error(error.getErrorLogInformations());
    }
}


/**
 * Middleware:
 * Analyses unhandled request and decides if the request was unknown or the method was wrong.
 * If the method is wrong, calls the next error middleware with a 405 error. Otherwise, calls the next error middleware
 *  with a 404 error.
 * @param {HttpError} err - Error thrown by a middleware.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export function unHandledRequestHandler(req, res, next) {
    errorLogger.verbose('Unhandled request');

    // Remove query parameters from the original url
    const originalUrl = req.originalUrl.split('?', 1)[0];
    errorLogger.debug(`The request's original URL is ${originalUrl}`);

    // Test if the route was defined or not
    const routesRegexp = req.app.get('routes-regexp');
    const unprocessableUrl = routesRegexp.every((regexp) => !regexp.test(originalUrl));


    let error;
    if (unprocessableUrl) {
        errorLogger.debug(`The route ${req.originalUrl} is not defined in the application.`);
        error = new NotFoundError({
            message: 'The request path isn\'t defined in the API.',
            title: 'The request you sent can\'t be processed.',
            description: 'We have a problem understanding your request. You may check the documentation to see which path we understand, and try again.',
        });

    } else {
        errorLogger.debug(`The method ${req.method} is not accepted with the route ${req.originalUrl}`);
        error = new MethodNotAllowedError({
            message: `The method ${req.method} can't be used on the path ${req.originalUrl}`,
        });
    }
    error.setRequestInformations(req.originalUrl, req.method);

    next(error);
}