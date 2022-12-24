import { createLoggerNamespace } from '../logger/index.js';
import {
    HttpError,
    NotFoundError,
    InternalServerError,
    UnauthorizedError,
    MethodNotAllowedError,
    UserInputValidationError,
    PayloadTooLargeError
} from '../errors/index.js';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';
import { MulterError } from 'multer';
import config from '../config/config.js';
import { unlink } from 'node:fs';
import { join } from 'node:path';

const errorLogger = createLoggerNamespace('groupomania:api:error');


/**
 * Deletes saved files if an error occurs before the request is completed.
 * @param {HttpError} err - Error thrown by a middleware.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function deleteFilesOnError(err, req, res, next) {
    errorLogger.verbose('File destroyer execution execution');

    // Get the list of saved files
    let files = [];
    if (req.file) {
        files.push(req.file);
    }
    if (req.files) {
        if (Array.isArray(req.files)) {
            files = files.concat(req.files);
        } else {
            for (const fieldName in req.files) {
                files = files.concat(fieldName);
            }
        }
    }
    errorLogger.debug(`There are ${files.length} files to delete`);

    // Deleting the files
    for (const file of files) {
        const imagePath = join('./images', file.filename);
        unlink(imagePath, (error) => {
            if (error) {
                errorLogger.warn(error);
            } else {
                errorLogger.debug(`The file ${file.filename} has been deleted`);
            }
        });
    }

    return next(err);
}



/**
 * Handles express' http-error normalization.
 * @param {jwt.JsonWebTokenError} err - Express error to normalize.
 * @returns {HttpError} Returns the associated HttpError.
 */
function normalizeExpressError(err) {
    errorLogger.debug('Express error normalization');
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

    return new HttpError({
        message: err.message,
        name: err.name,
        title: err.expose ? err.message : 'We had a problem while processing your request. You may try again. If the problem persists, don\'t hesitate to contact us.',
        statusCode: err.statusCode,
        ...(err.statusCode < 500 ? { details } : { logData: details }),
    }, err, err.headers);
}

/**
 * Handles JSW errors normalization.
 * @param {jwt.JsonWebTokenError} err - JWT error to normalize.
 * @returns {HttpError} Returns the associated HttpError.
 */
function normalizeJwtError(err) {
    if (err instanceof jwt.TokenExpiredError) {
        errorLogger.debug('JsonWebToken TokenExpiredError normalization');
        return new UnauthorizedError({
            message: err.message,
            title: 'The token has expired',
            description: 'We can\'t validate your authentication token because it has expired. You may ask for a new one and try again.',
            details: {
                expirationDate: err.expiredAt
            }
        }, err);

    }

    if (err instanceof jwt.NotBeforeError) {
        errorLogger.debug('JsonWebToken NotBeforeError normalization');
        return new UnauthorizedError({
            message: err.message,
            title: 'The token is not yet active',
            description: 'We can\'t validate your authentication token because it is not active yet. You should wait until it activeates before trying again.',
            details: {
                activationDate: err.date
            }
        }, err);

    }

    errorLogger.debug('JsonWebTokenError normalization');
    return new UnauthorizedError({
        message: err.message,
        title: 'There is a problem with the authentication token',
        description: 'We can\'t process the authentication token you provided. Please, check that this token is the right one and try again.'
    }, err);
}

/**
 * Handles Multer errors normalization.
 * @param {MulterError} err - JWT error to normalize.
 * @returns {HttpError} Returns the associated HttpError.
 */
function normalizeMulterError(err) {
    errorLogger.debug('MulterError normalization');

    if (err.code === 'LIMIT_FIELD_VALUE') {
        return new PayloadTooLargeError({
            message: err.message,
            details: {
                maxPayloadSize: `${config.get('payload.maxSize')} bytes`,
            }
        }, err);
    }

    if (err.code === 'LIMIT_FILE_SIZE') {
        return new PayloadTooLargeError({
            message: err.message,
            title: 'The file is too large.',
            description: 'We couldn\'t handle the request because of the file size. Please, reduce compress your file before trying again. The maximum file size is in the details.',
            details: {
                maxFileSize: `${config.get('payload.files.maxFileSize')} bytes`,
            }
        }, err);
    }

    return new UserInputValidationError({
        message: err.message,
        title: 'The request\'s body is invalid.',
        description: 'We are having trouble processing the request\'s body. You will find more informations in the details. Please, fix the issue and try again.',
        details: {
            errorDetail: err.message
        }
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

    if (err instanceof jwt.JsonWebTokenError) {
        return next(normalizeJwtError(err).setRequestInformations(req.originalUrl, req.method));
    }

    if (err instanceof MulterError) {
        return next(normalizeMulterError(err).setRequestInformations(req.originalUrl, req.method));
    }

    // Express' errors handling
    if (createError.isHttpError(err)) {
        return next(normalizeExpressError(err).setRequestInformations(req.originalUrl, req.method));
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
        res.header(err.headers);
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
            description: 'We have a problem understanding your request. You may check the documentation to see which path we understand, and try again.'
        });

    } else {
        errorLogger.debug(`The method ${req.method} is not accepted with the route ${req.originalUrl}`);
        error = new MethodNotAllowedError({
            message: `The method ${req.method} can't be used on the path ${req.originalUrl}`
        });
    }
    error.setRequestInformations(req.originalUrl, req.method);

    next(error);
}