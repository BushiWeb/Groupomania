import express from 'express';
import { createLoggerNamespace } from '../logger/logger.js';

const parsingLogger = createLoggerNamespace('groupomania:api:body-parsing');

/**
 * Function returning a middleware validating the content type and parsin the request body.
 * The fonction configures the middleware with the accepted content-type and their related parsers.
 * @param {Object.<string, {parser: *, options: Object|Array, dataFormatting: Function}} parsers - Object representing the accepted content types. The keys are the MIME types of the accepted Content-Types, or "empty" if the request also accepts requests with no body. For each MIME type, parser gives the parser to use: it can be "json", "raw", "text" or "urlencoded" to use the express parsers, a function generating a parsing middleware or an object containing a method generating a middleware (like a multer instance). options gives the options for the express parser or the function. It is given as is to the function. If the parser is an instance, options must contain the method property containing the name of the method to use, and the methodOptions property with an object to give as an argument to the method. Finaly, dataFormatting contains a function that is going to be executed after the body is parsed. This function receives the body of the request and returns the new body. If the property name is "empty", the corresponding object is ignored.
 * @returns {Function} Returns the configured middleware.
 */
export default function createBodyParser(parsers) {
    parsingLogger.verbose('Starting parsing middleware creation');

    const contentTypesMiddlewares = {};
    let emptyAllowed = false;

    for (const contentType in parsers) {
        if (contentType === 'empty') {
            parsingLogger.debug('Empty body allowed for this endpoint');
            emptyAllowed = true;
            continue;
        }

        const parser = parsers[contentType];
        contentTypesMiddlewares[contentType] = {};

        if (parser.parser instanceof Function) {
            // If the parser is a function, then we store it's result as the middleware
            contentTypesMiddlewares[contentType].middleware = parser.parser(parser.options);
            parsingLogger.debug(`${contentType} Content-Type parser is a function`);

        } else if (typeof parser.parser === 'string') {
            // If the parser is a string corresponding to one of Express parser, then we store the result of that parser
            contentTypesMiddlewares[contentType].middleware = express[parser.parser](parser.options);
            parsingLogger.debug(`${contentType} Content-Type parser is an express method`);

        } else if (parser.options?.method) {
            // If the parser is neither a string nor a function, it is an object. We execute the right method with its options, only if the optins.method property is available. Otherwise we throw an error
            contentTypesMiddlewares[contentType].middleware = parser.parser[parser.options.method](parser.options.methodOptions);
            parsingLogger.debug(`${contentType} Content-Type parser is a method from an object`);

        } else {
            // Either the parser is an object but don't have the method options, or the parser is neither an object, nor a string, nor a function. Throw a warning but continue the execution.
            parsingLogger.warn(`We can't find a middleware for ${contentType}. Make sure that it is either "empty", "raw", "text", "json", "urlencoded", a function generating a middleware or an object containing a method generating a middleware and the name of the method in options.method.`);
            continue;
        }

        //Storing the data formating function
        if (parser.dataFormatting) {
            contentTypesMiddlewares[contentType].dataFormatting = parser.dataFormatting;
        }
        parsingLogger.debug(`Middleware created for the ${contentType} Content-Type`);
    }

    return (req, res, next) => {
        parsingLogger.verbose('Starting body parsing');

        // Throws an error if the body is required but there is no body
        if (!req.get('Content-Type')) {
            if (emptyAllowed) {
                parsingLogger.debug('Empty body allowed, execute the next middleware');
                return next();
            }
            parsingLogger.debug('Empty body is forbidden for this endpoint, throwing an error');
            return next(new Error('The request needs a body to be fulfilled.'));
        }

        // Remove the parameters from the MIME type of the Content-Type
        const rawContentType = req.get('Content-Type').split(';')[0];
        parsingLogger.debug(`Searching parsing middleware for ${rawContentType}`);
        const parser = contentTypesMiddlewares[rawContentType];

        // Throw if the Content-Type is not allowed
        if (!parser) {
            parsingLogger.debug('Unsupported Content-Typed, throwing an error');
            return next(new Error('The Content-Type is not allowed.'));
        }

        // Execute the parser and the dataFormating function
        try {
            parser.middleware(req, res, (err) => {
                if (err) {
                    throw(err);
                }
            });
            parsingLogger.debug('Parsing middleware executed');

            if (parser.dataFormatting) {
                req.body = parser.dataFormatting(req.body);
            }
            parsingLogger.debug('Data formating executed');
        } catch (error) {
            parsingLogger.error(error);
            return next(error);
        }

        next();

    };
}