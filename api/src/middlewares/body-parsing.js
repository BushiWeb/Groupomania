import { createLoggerNamespace } from '../logger/logger.js';

const parsingLogger = createLoggerNamespace('groupomania:api:body-parsing');

/**
 * Function returning a middleware validating the content type and parsin the request body.
 * The fonction configures the middleware with the accepted content-type and their related parsers.
 * @param {Object.<string, {parser: Function, dataFormatting: Function}} parsers - Object representing the accepted content types. The keys are the MIME types of the accepted Content-Types, or "empty" if the request also accepts requests with no body. For each MIME type, parser gives the middleware to execute to parse the corresponding body. This can be the result of functions like express.json, or multer.single. Finaly, dataFormatting contains a function that is going to be executed after the body is parsed. This function receives the body of the request and returns the new body. If the property name is "empty", the corresponding object is ignored.
 * @returns {Function} Returns the configured middleware.
 */
export default function createBodyParser(parsers) {
    parsingLogger.verbose('Starting parsing middleware creation');

    let emptyAllowed = false;

    if (parsers.empty) {
        parsingLogger.debug('Empty body is allowed for this endpoint');
        emptyAllowed = true;
        delete parsers.empty;
    }

    parsingLogger.debug(`This endpoint accepts the following Content-Types : ${Object.keys(parsers)}`);

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
        const parser = parsers[rawContentType];

        // Throw if the Content-Type is not allowed
        if (!parser) {
            parsingLogger.debug('Unsupported Content-Typed, throwing an error');
            return next(new Error('The Content-Type is not allowed.'));
        }

        // Execute the parser, then execute the data formatter
        try {
            parser.parser(req, res, (err) => {
                parsingLogger.debug('Parsing middleware executed, analysing result');

                if (err) {
                    parsingLogger.error(err);
                    return next(err);
                }

                try {
                    if (parser.dataFormatting) {
                        req.body = parser.dataFormatting(req.body);
                        parsingLogger.debug('Data formating executed');
                    }
                } catch (error) {
                    parsingLogger.error(error);
                    return next(error);
                }

                next();
            });
        } catch (error) {
            parsingLogger.error(error);
            next(error);
        }
    };
}