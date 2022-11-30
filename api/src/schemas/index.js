import { matchedData, validationResult } from 'express-validator';
import createUserBodySchema from './create-user-body.js';import { createLoggerNamespace } from '../logger/logger.js';

const validationLogger = createLoggerNamespace('groupomania:api:validation');

/**
 * Middleware handling the validation results.
 * If there is no validation error, then the execution continues. Otherwise, we call the error handling middleware.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export default function validationMiddleware(req, res, next) {
    validationLogger.verbose('Validation middleware execution');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        validationLogger.debug('Validation unsuccessful');
        return next(new Error(JSON.stringify(errors.mapped())));
    }

    validationLogger.debug('Validation successful');

    // Remove unused properties, that haven't gone through validation
    req.body = matchedData(req, {locations: ['body']});

    next();
}

export {createUserBodySchema};