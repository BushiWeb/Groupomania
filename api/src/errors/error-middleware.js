import { createLoggerNamespace } from '../logger/logger.js';
import HttpError from './errors/HttpError.js';

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

    errorLogger.error(err);
}