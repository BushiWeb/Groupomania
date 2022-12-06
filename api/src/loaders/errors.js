import createLoggerNamespace from '../logger/logger-namespace.js';
import { unHandledRequestHandler, errorHandler, errorParser } from '../errors/error-middleware.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:errors');

/**
 * Add all error related middlewares.
 * @param {Express.Application} app - Express application
 */
export default function errorsLoader (app) {
    loaderLogger.verbose('Loading error middlewares');

    // Intercept Express 404 errors, sent when the method or the URL isn't defined
    app.use(unHandledRequestHandler);
    loaderLogger.verbose('Middleware to intercept Express Not Found error added.');

    // Normalizes error format
    app.use(errorParser);
    loaderLogger.verbose('Error parsing middleware added');

    // Create error responses
    app.use(errorHandler);
    loaderLogger.verbose('Error handling middleware added');

}
