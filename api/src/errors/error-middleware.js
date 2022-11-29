import { createLoggerNamespace } from '../logger/logger.js';

const errorLogger = createLoggerNamespace('groupomania:api:error');

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