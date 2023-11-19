import { createLoggerNamespace } from '../logger/index.js';
import { UnsupportedMediaTypeError } from '../errors/index.js';

const parsingLogger = createLoggerNamespace('groupomania:api:body-parsing');


/**
 * Get the Content-Type.
 * Checks if the body is empty and if the requests accepts empty bodies.
 * @param {Express.Request} req - The request.
 * @param {boolean} isEmptyAllowed - A boolean indicating if an empty body is allowed for the request.
 * @returns {string|boolean} Returns the content type. If the body is empty, returns false.
 * @throws {UnsupportedMediaTypeError} Throws if the request has no body but requires one.
 */
function getContentType(req, isEmptyAllowed) {
    parsingLogger.debug('Searching the Content-Type');

    let contentType = req.get('Content-Type');

    if (!contentType && !isEmptyAllowed) {
        parsingLogger.debug('Empty body is forbidden, throwing an error');
        throw new UnsupportedMediaTypeError({
            message: `The request ${req.method} ${req.originalUrl} requires a content.`,
            title: 'The request is missing a body content.',
            description: 'We couldn\'t find the request Content-Type. Please, make sure you are sending a body and it\'s Content-Type with the request, and try again. The list off all supported data formats for this endpoint is given in the details. An empty body is not allowed for this endpoint.',
        });
    }

    if (!contentType) {
        parsingLogger.debug('Emtpy body allowed');
        return false;
    }

    return contentType.split(';')[0];
}


/**
 * Get the parser corresponding to the Content-Type, as well as the data formatting function.
 * Throws an error if there is no parser.
 * @param {string} contentType - Content-Type of the request.
 * @param {Object} parsers - Object containing the parsers associated to the Content-Type.
 * @returns {{parser: Function, dataFormatter: Function}} Returns the parser and the optionnal data formatter in an
 *  object.
 * @throws {UnsupportedMediaTypeError} Throws an error if no parser is associated to the Content-Type.
 */
function getParser(contentType, parsers) {
    let parser = parsers[contentType];

    if (!parser) {
        parsingLogger.debug('Unsupported Content-Typed, throwing an error');
        throw new UnsupportedMediaTypeError({
            message: `The request doesn't handle ${contentType} bodies.`,
            title: 'The request\'s body can\'t be parsed.',
            description: `We currently don't support the ${contentType} Content-Type. Please, try again with a different data format. The list off all supported data formats for this endpoint is given in the details.`,
        });
    }

    if (!parser.parser) {
        parser = { parser };
    }

    return parser;
}


/**
 * Function returning a middleware validating the content type and parsin the request body.
 * The fonction configures the middleware with the accepted content-type and their related parsers.
 * @param {Object.<string, {parser: Function, dataFormatter: Function}|Function} parsers - Object representing the
 *  accepted content types. The keys are the MIME types of the accepted Content-Types. The values is either the
 *  middleware to parse the body (i.e. the result of express.json, multer.single(), ...); or an object containing that
 *  middleware and an optionnal function. This function is going to be executed after the parser, it takes the
 *  request's body as a parameter and sends it back. It can be used to change the structure of the body.
 * @param {boolean} [emptyAllowed=true] - Boolean indicating if an ampty body is allowed for the request.
 * @returns {Function} Returns the configured middleware.
 */
export default function createBodyParser(parsers, emptyAllowed = true) {
    parsingLogger.verbose('Starting parsing middleware creation');
    parsingLogger.debug(`This request accepts the following Content-Types : ${Object.keys(parsers)}${emptyAllowed ? ', as well as empty bodies' : ''}`);

    /**
     * Middleware validating the content-type and parsing the request body.
     * @param {Express.Request} req - Express request object.
     * @param {Express.Response} res - Express response object.
     * @param next - Next middleware to execute.
     */
    return (req, res, next) => {
        parsingLogger.verbose('Starting body parsing');

        try {
            const contentType = getContentType(req, emptyAllowed);
            if (!contentType) {
                parsingLogger.debug('Empty body, next middleware');
                return next();
            }
            parsingLogger.debug(`Searching parsing middleware for ${contentType}`);

            const parser = getParser(contentType, parsers);

            parsingLogger.debug('Parser execution');
            parser.parser(req, res, (err) => {
                parsingLogger.debug('Parsing middleware executed, analysing result');

                if (err) {
                    return next(err);
                }

                try {
                    if (parser.dataFormatter) {
                        req.body = parser.dataFormatter(req.body);
                        parsingLogger.debug('Data formating executed');
                    }
                } catch (error) {
                    parsingLogger.verbose('Error while executing the data formatting function');
                    return next(error);
                }

                next();
            });
        } catch (error) {
            if (error instanceof UnsupportedMediaTypeError) {
                error.details = [].concat(emptyAllowed ? 'Empty body allowed' : [], Object.keys(parsers));
            }
            next(error);
        }
    };
}