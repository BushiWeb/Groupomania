import { createLoggerNamespace } from '../logger/logger.js';
import HttpError from './errors/HttpError.js';
import NotFoundError from './errors/NotFoundError.js';
import MethodNotAllowedError from './errors/MethodNotAllowedError.js';
import InternalServerError from './errors/InternalServerError.js';
import UnauthorizedError from './errors/UnauthorizedError.js';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';

const errorLogger = createLoggerNamespace('groupomania:api:error');

/**
 * Error parser, normalizes errors.
 * After this middleware, all errors have the same structure and can be handled the same way.
 * JsonWebTokens are normalized here.
 * Errors from Express (http-errors module) already have status and headers which will be kepts.
 * Other errors will have status code 500 and a generic user message.
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

    // JsonWebToken normalization
    if (err instanceof jwt.TokenExpiredError) {
        errorLogger.debug('JsonWebToken TokenExpiredError normalization');
        return next(new UnauthorizedError({
            message: err.message,
            title: 'The token has expired',
            description: 'We can\'t validate your authentication token because it has expired. You may ask for a new one and try again.',
            details: {
                expirationDate: err.expiredAt
            },
            path: req.originalUrl,
            method: req.method
        }, err));

    } else if (err instanceof jwt.NotBeforeError) {
        errorLogger.debug('JsonWebToken NotBeforeError normalization');
        return next(new UnauthorizedError({
            message: err.message,
            title: 'The token is not yet active',
            description: 'We can\'t validate your authentication token because it is not active yet. You should wait until it activeates before trying again.',
            details: {
                activationDate: err.date
            },
            path: req.originalUrl,
            method: req.method
        }, err));

    } else if (err instanceof jwt.JsonWebTokenError) {
        errorLogger.debug('JsonWebTokenError normalization');
        return next(new InternalServerError({
            message: err.message,
            path: req.originalUrl,
            method: req.method,
            originalName: err.name
        }, err));
    }

    // http-errors handling
    if (createError.isHttpError(err)) {
        errorLogger.debug('Express error, minimal parsing');
        // Assemble error details. These details will be sent to the user if the status is amongst the 400 errors, and only logged otherwise.
        const details = {
            ...(err.type && { type: err.type }),
            ...(err.body && { body: err.body }),
            ...(err.charset && { charset: err.charset }),
            ...(err.received && { bytesReceivedNb: err.received }),
            ...(err.expected && { bytesExpectedNb: err.expected }),
            ...(err.limit && { maxSize: err.limit }),
            ...(err.length && { bodySize: err.length }),
        };

        return next(new HttpError({
            message: err.message,
            name: err.name,
            title: err.expose ? err.message : 'We had a problem while processing your request. You may try again. If the problem persists, don\'t hesitate to contact us.',
            statusCode: err.statusCode,
            path: req.originalUrl,
            method: req.method,
            ...(err.statusCode < 500 ? { details } : { logData: details }),
        }, err, err.headers));
    }

    // Normalize other errors
    errorLogger.debug('Generic error, normalizing');
    next(new InternalServerError({
        message: err.message,
        path: req.originalUrl,
        method: req.method,
        originalName: err.name
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
        res.status(err.statusCode).json(err.getErrorResponse());
        errorLogger.error(err.getErrorLogInformations());
    } else {
        errorLogger.debug('Unparsed error');
        const error = new InternalServerError({
            message: err.message,
            path: req.originalUrl,
            method: req.method,
            originalName: err.name
        }, err);
        res.status(500).json(error.getErrorResponse());
        errorLogger.error(error.getErrorLogInformations());
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