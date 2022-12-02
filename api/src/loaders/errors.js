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
        const error = new NotFoundError(req.path, req.method, 'We have a problem understanding your request. Please, double check your request and try again.', 'You may check the request method or path, we are not handling this one yet.');
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