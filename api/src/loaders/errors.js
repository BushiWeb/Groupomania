import createLoggerNamespace from '../logger/logger-namespace.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:headers');

/**
 * Add all error related middlewares.
 * @param {Express.Application} app - Express application
 */
export default function errorsLoader (app) {
    loaderLogger.verbose('Loading error middlewares');

    // Intercept Express 404 errors, sent when the method or the URL isn't defined
    app.use((req, res, next) => {
        const error = new Error('Sorry, we can\'t find the ressource you are looking for.');
        error.status = 404;
        next(error);
    });
}