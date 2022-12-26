import { checkSchema, matchedData, validationResult } from 'express-validator';
import createUserBodySchema from '../schemas/create-user-body.js';
import loginBodySchema from '../schemas/login.js';
import getUserSchema from '../schemas/get-user.js';
import getAllUsersSchema from '../schemas/get-all-users.js';
import updateUserSchema from '../schemas/update-user.js';
import updateUserRoleSchema from '../schemas/update-user-role.js';
import deleteUserSchema from '../schemas/delete-user.js';
import createPostSchema from '../schemas/create-post.js';
import getAllPostsSchema from '../schemas/get-all-posts.js';
import getPostSchema from '../schemas/get-post.js';
import updatePostSchema from '../schemas/update-post.js';
import likePostSchema from '../schemas/like-post.js';
import deletePostSchema from '../schemas/delete-post.js';
import { createLoggerNamespace } from '../logger/index.js';
import { HttpError, UserInputValidationError, UnsupportedMediaTypeError } from '../errors/index.js';
import config from '../config/config.js';

const validationLogger = createLoggerNamespace('groupomania:api:validation');

/**
 * Formats the validations error recursively.
 * Remove all values to avoid leaking or logging sensitive informations.
 * @param {Object} error - Object containing the error informations.
 * @param {string} [error.param] - Name of the parameter that is not valid.
 * @param {string} [error.msg] - Error message.
 * @param {string} [error.location] - Location of the parameter (body, cookie, param, query, headers).
 * @param {string} [error.value] - Value of the parameter.
 * @param {{param: string, msg: string, location: string, value: string, nestedErrors: Array}[]} [error.nestedErrors] - Contains suberrors. These errors have the same structure as the error parameter.
 * @returns Returns the formated error.
 */
function validationErrorFormatter({ param, msg, location, nestedErrors }) {
    let errorObject = {
        ...(param && { param }),
        ...(msg && { message: msg }),
        ...(location && { location }),
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
            details: errors.array()
        });
        return next(validationError);
    }

    validationLogger.debug('Validation successful');

    // Remove unused properties, that haven't gone through validation
    req.body = matchedData(req, {locations: ['body']});
    req.params = matchedData(req, {locations: ['params']});
    req.query = matchedData(req, {locations: ['query']});

    next();
}



/**
 * Function returning a middleware checking for files errors.
 * @param {boolean} [required=false] - Checks wether the file is required or not.
 * @returns {Function} Returns the middleware.
 */
function fileValidation(required = false) {
    validationLogger.debug(`Creating the file validation middleware, ${required ? 'the file is required' : 'the file is optionnal'}`);
    return function (req, res, next) {
        validationLogger.debug('File validation middleware execution');

        // Checking file filter
        if (req.rejectedFile && req.rejectedFile.length > 0) {
            validationLogger.debug('Error while validating files, throwing an error');

            const uploadedFileFormats = [];
            for (const file of req.rejectedFile) {
                if (!uploadedFileFormats.includes(file.mimetype)) {
                    uploadedFileFormats.push(file.mimetype);
                }
            }

            const fileValidationError = new UnsupportedMediaTypeError({
                message: 'The uploaded file has the wrong type.',
                title: 'We can\'t accept the uploaded file.',
                description: 'We don\'t accept this type of file. Please, refer to the details to see which file type are allowed, and try again with an other file format.',
                details: {
                    uploadedFileFormats,
                    allowedFileFormats: config.get('payload.files.allowedFileTypes')
                }
            });

            return next(fileValidationError);
        }

        // Checking if files are required
        if (
            required &&
            !req.file &&
            (!req.files ||
                (Array.isArray(req.files) && req.files.length === 0) ||
                (typeof req.files === 'object' && Object.keys(req.files).length === 0))
        ) {
            validationLogger.debug('No files sent, throwing an error');
            const fileValidationError = new UserInputValidationError({
                message: 'Missing required file',
                title: 'The file is mandatory for this request',
                description: 'We can\'t find the file. This request needs a file to be processed. Please, try again with a file.'
            });
            return next(fileValidationError);
        }

        validationLogger.debug('No file validation error');
        return next();
    };
}



/**
 * Returns all the required middlewares to handle the validation.
 * @param {Object} schema - Validation schema to use.
 * @param {boolean} [files=false] - Wether this request accepts files or not, thus if files have to be validated.
 * @param {boolean} [requiredFiles=false] - If the request accepts files, wether those files are required of not.
 * @returns {Array} Returns an array containing the middleware in the order of execution.
 */
export default function validationMiddlewares(schema, files = false, requiredFiles = false) {
    let middlewareList = [checkSchema(schema), validationHandlingMiddleware];

    if (files) {
        middlewareList = middlewareList.concat(fileValidation(requiredFiles));
    }

    return middlewareList;
}

export {
    loginBodySchema,
    createUserBodySchema,
    getUserSchema,
    getAllUsersSchema,
    updateUserSchema,
    updateUserRoleSchema,
    deleteUserSchema,
    createPostSchema,
    getAllPostsSchema,
    getPostSchema,
    updatePostSchema,
    likePostSchema,
    deletePostSchema,
    validationHandlingMiddleware,
    validationErrorFormatter
};