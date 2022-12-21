import headersLoader from './headers.js';
import { createLoggerNamespace } from '../logger/index.js';
import databaseLoader from './database.js';
import errorsLoader from './errors.js';
import routeLoader from './routes.js';
import loggingMiddelwareLoader from './logger.js';
import jobsLoader from './jobs.js';
import adminUserLoader from './admin-user.js';
import accessControlLoader from './authorization.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader');

/**
 * Calls all application's loaders.
 * @param {Express.Application} app - Express application.
 * @async
 */
export default async function loadApp (app) {
    loggingMiddelwareLoader(app);
    loaderLogger.verbose('Logging middleware initialized');

    await databaseLoader();
    loaderLogger.verbose('Database initialized');

    accessControlLoader();
    loaderLogger.verbose('Access controle rules initialized');

    await adminUserLoader();
    loaderLogger.verbose('Admin user available');

    await jobsLoader();
    loaderLogger.verbose('Jobs initialized');

    headersLoader(app);
    loaderLogger.verbose('Header middleware initialized');

    routeLoader(app);
    loaderLogger.verbose('Routes added');

    errorsLoader(app);
    loaderLogger.verbose('Error middlewares initialized');
}