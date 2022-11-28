import createLoggerNamespace from '../logger/logger-namespace.js';
import NotFoundError from '../errors/errors/NotFoundError.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:headers');

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
}