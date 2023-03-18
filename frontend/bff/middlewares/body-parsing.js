import { createLoggerNamespace } from '../logger/index.js';
import { UnsupportedMediaTypeError } from '../errors/index.js';
import express from 'express';
import config from '../config/config.js';

const parsingLogger = createLoggerNamespace('groupomania:bff:body-parsing');


/**
 * Get the Content-Type.
 * Checks if the body is empty and if the requests accepts empty bodies.
 * @param {Express.Request} req - The request.
 * @param {boolean} awaitsBody - A boolean indicating if the request accepts a body as JSON format.
 * @param {boolean} isEmptyAllowed - A boolean indicating if an empty body is allowed for the request.
 * @returns {string|boolean} Returns the content type. If the body is empty, returns false.
 * @throws {UnsupportedMediaTypeError} Throws if the request has no body but requires one, or if the body is not JSON.
 */
function validateContentType(req, awaitsBody, isEmptyAllowed) {
    parsingLogger.debug('Validating the Content-Type');

    let contentType = req.get('Content-Type');

    if (!awaitsBody && contentType) {
        parsingLogger.debug('No body is awaited, throwing an error');
        throw new UnsupportedMediaTypeError({
            message: `The request ${req.method} ${req.originalUrl} requires no content.`,
            title: 'The request contains a body.',
            description: 'There was a body with the request. Please, make sure to give no data with the request, and try again.',
        });
    }

    if (awaitsBody && !contentType && !isEmptyAllowed) {
        parsingLogger.debug('Empty body is forbidden, throwing an error');
        throw new UnsupportedMediaTypeError({
            message: `The request ${req.method} ${req.originalUrl} requires a content.`,
            title: 'The request is missing a body content.',
            description: 'We couldn\'t find the request Content-Type. Please, make sure you are sending a body and it\'s Content-Type with the request, and try again. This request requires a JSON body.',
        });
    }

    if (!contentType) {
        parsingLogger.debug('Emtpy body allowed');
        return false;
    }

    if (contentType.split(';')[0] !== 'application/json') {
        parsingLogger.debug('JSON body type required, throwing an error');
        throw new UnsupportedMediaTypeError({
            message: `The request ${req.method} ${req.originalUrl} requires JSON content.`,
            title: 'The request has a content with the wrong type.',
            description: 'the request\'s Content-Type was not application/json. Please, convert your body to JSON format and try again.',
        });
    }

    return true;
}



/**
 * Function returning a middleware validating the content type and parsing the request body.
 * The fonction tells the middleware weither or not a content is required, and if so, if an empty body is still allowed.
 * @param {boolean} awaitsBody - Boolean indicating weither or not a body is allowed.
 * @param {boolean} [emptyAllowed=true] - Boolean indicating if an ampty body is allowed for the request.
 * @returns {Function} Returns the configured middleware.
 */
export default function createBodyParser(awaitsBody, emptyAllowed = true) {
    parsingLogger.verbose('Starting parsing middleware creation');
    parsingLogger.debug(`This request ${awaitsBody ? 'awaits' : 'doesn\'t accept'} a body${awaitsBody && emptyAllowed ? ' but also accepts empty bodies' : ''}.`);

    /**
     * Middleware validating the content-type and parsing the request body.
     * @param {Express.Request} req - Express request object.
     * @param {Express.Response} res - Express response object.
     * @param next - Next middleware to execute.
     */
    return (req, res, next) => {
        parsingLogger.verbose('Starting body parsing');

        try {
            const bodyGiven = validateContentType(req, awaitsBody, emptyAllowed);
            if (!bodyGiven) {
                parsingLogger.debug('Empty body, next middleware');
                return next();
            }

            parsingLogger.debug('Parser execution');
            express.json({
                limit: config.get('payload.maxSize'),
            })(req, res, (err) => {
                parsingLogger.debug('Parsing middleware executed, analysing result');

                if (err) {
                    return next(err);
                }

                next();
            });
        } catch (error) {
            next(error);
        }
    };
}