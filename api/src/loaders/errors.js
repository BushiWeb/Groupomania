import createLoggerNamespace from '../logger/logger-namespace.js';
import NotFoundError from '../errors/errors/NotFoundError.js';
import { errorHandler, errorParser } from '../errors/error-middleware.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:errors');

/**
 * Add all error related middlewares.
 * @param {Express.Application} app - Express application
 */
export default function errorsLoader (app) {
    loaderLogger.verbose('Loading error middlewares');

    // Intercept Express 404 errors, sent when the method or the URL isn't defined
    app.use((req, res, next) => {
        const error = new NotFoundError({
            path: req.path,
            method: req.method,
            summary: 'The request you sent can\'t be processed.',
            description: 'We have a problem understanding your request. You may check your request and make sure we can understand it, then try again.'
        });
        next(error);
    });
    loaderLogger.verbose('Middleware to intercept Express Not Found error added.');

    // Normalizes error format
    app.use(errorParser);
    loaderLogger.verbose('Error parsing middleware added');

    // Create error responses
    app.use(errorHandler);
    loaderLogger.verbose('Error handling middleware added');

}