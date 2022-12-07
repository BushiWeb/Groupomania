import { createLoggerNamespace } from '../logger/logger.js';
import HttpError from './errors/HttpError.js';
import NotFoundError from './errors/NotFoundError.js';
import MethodNotAllowedError from './errors/MethodNotAllowedError.js';

const errorLogger = createLoggerNamespace('groupomania:api:error');

/**
 * Error parser, normalizes errors.
 * Transforms all errors that don't inherit from HttpError into HttpErrors.
 * After this middleware, all errors have the same structure and can be handled the same way.
 * @param {HttpError} err - Error thrown by a middleware.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export function errorParser(err, req, res, next) {
    errorLogger.verbose('Error parser execution');

    // HttpErrors don't need to be normalized
    if (err instanceof HttpError) {
        errorLogger.debug('HttpError, no need for parsing');
        return next(err);
    }

    // Temporary, to avoid request hanging
    next(err);

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
    if (err.getErrorResponse) {
        res.status(err.statusCode).json(err.getErrorResponse());
    } else {
        res.status(500).json({error: { message: err.message, type: err.name }});
    }
    if (err.getErrorLogInformations) {
        errorLogger.error(err.getErrorLogInformations());
    } else {
        errorLogger.error(err);
    }
}


/**
 * Middleware:
 * Analyses unhandled request and decides if the request was unknown or the method was wrong.
 * If the method is wrong, calls the next error middleware with a 405 error. Otherwise, calls the next error middleware with a 404 error.
 * @param {HttpError} err - Error thrown by a middleware.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export function unHandledRequestHandler (req, res, next) {
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
            path: req.originalUrl,
            method: req.method
        });

    } else {
        errorLogger.debug(`The method ${req.method} is not accepted with the route ${req.originalUrl}`);
        error = new MethodNotAllowedError({
            message: `The method ${req.method} can't be used on the path ${req.originalUrl}`,
            path: req.originalUrl,
            method: req.method
        });
    }

    next(error);
}