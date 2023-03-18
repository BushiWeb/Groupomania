import { checkSchema, matchedData, validationResult } from 'express-validator';
import { createLoggerNamespace } from '../logger/index.js';
import { HttpError, UserInputValidationError } from '../errors/index.js';

const validationLogger = createLoggerNamespace('groupomania:bff:validation');

/**
 * Formats the validations error recursively.
 * Remove all values to avoid leaking or logging sensitive informations.
 * @param {Object} error - Object containing the error informations.
 * @param {string} [error.param] - Name of the parameter that is not valid.
 * @param {string} [error.msg] - Error message.
 * @param {string} [error.location] - Location of the parameter (body, cookie, param, query, headers).
 * @param {string} [error.value] - Value of the parameter.
 * @param {{
 *  param: string,
 *  msg: string,
 *  location: string,
 *  value: string,
 *  nestedErrors: Array
 * }[]} [error.nestedErrors] - Contains suberrors. These errors have the same structure as the error parameter.
 * @returns Returns the formated error.
 */
function validationErrorFormatter({
    param,
    msg,
    location,
    nestedErrors,
}) {
    let errorObject = {
        ...param && { param },
        ...msg && { message: msg },
        ...location && { location },
    };

    if (nestedErrors) {
        errorObject.nestedErrors = [];
        for (const nestedError of nestedErrors) {
            errorObject.nestedErrors.push(validationErrorFormatter(nestedError));
        }
    }

    return errorObject;
}


/**
 * Middleware handling the validation results.
 * If there is no validation error, then the execution continues. Otherwise, we call the error handling middleware.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
function validationHandlingMiddleware(req, res, next) {
    validationLogger.verbose('Validation middleware execution');

    // Format the error objects: remove the value for security reasons
    const errors = validationResult(req).formatWith(validationErrorFormatter);

    // Search for custom errors
    const customError = errors.errors?.find(value => value.msg instanceof HttpError);
    if (customError) {
        validationLogger.debug('Validation unsuccessful with a custom error');
        return next(customError.msg);
    }

    // Search for errors
    if (!errors.isEmpty()) {
        validationLogger.debug('Validation unsuccessful');
        const validationError = new UserInputValidationError({
            message: 'Errors while validating user inputs.',
            title: 'The received data are invalid.',
            description: 'We are having trouble processing the data you provided. You may take a look at the details for more informations on how to solve this problem. You may solve the problems and try again.',
            details: errors.array(),
        });
        return next(validationError);
    }

    validationLogger.debug('Validation successful');

    // Remove unused properties, that haven't gone through validation
    req.body = matchedData(req, { locations: ['body']});
    req.params = matchedData(req, { locations: ['params']});
    req.query = matchedData(req, { locations: ['query']});

    next();
}



/**
 * Returns all the required middlewares to handle the validation.
 * @param {Object} schema - Validation schema to use.
 * @param {boolean} [files=false] - Wether this request accepts files or not, thus if files have to be validated.
 * @param {boolean} [requiredFiles=false] - If the request accepts files, wether those files are required of not.
 * @returns {Array} Returns an array containing the middleware in the order of execution.
 */
export default function validationMiddlewares(schema) {
    return [checkSchema(schema), validationHandlingMiddleware];
}

export {
    validationHandlingMiddleware,
    validationErrorFormatter,
};