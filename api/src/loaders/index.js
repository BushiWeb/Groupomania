import headersLoader from './headers.js';
import createLoggerNamespace from '../logger/logger-namespace.js';
import databaseLoader from './database.js';
import errorsLoader from './errors.js';
import usersRouteLoader from './users.js';
import loggingMiddelwareLoader from './logger.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader');

/**
 * Calls all application's loaders.
 * @param {Express.Application} app - Express application.
 * @async
 */
export default async function loadApp (app) {
    loggingMiddelwareLoader(app);
    loaderLogger.verbose('Logging middleware initialized');

    headersLoader(app);
    loaderLogger.verbose('Header middleware initialized');

    await databaseLoader();
    loaderLogger.verbose('Database initialized');

    usersRouteLoader(app);
    loaderLogger.verbose('User routes added');

    errorsLoader(app);
    loaderLogger.verbose('Error middlewares initialized');
}