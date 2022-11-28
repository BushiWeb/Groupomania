import headersLoader from './headers.js';
import createLoggerNamespace from '../logger/logger-namespace.js';
import databaseLoader from './database.js';
import errorsLoader from './errors.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader');

/**
 * Calls all application's loaders.
 * @param {Express.Application} app - Express application.
 * @async
 */
export default async function loadApp (app) {
    headersLoader(app);
    loaderLogger.verbose('Header middleware initialized');

    await databaseLoader(app);
    loaderLogger.verbose('Database connection initialized');

    errorsLoader(app);
    loaderLogger.verbose('Error middlewares initialized');
}