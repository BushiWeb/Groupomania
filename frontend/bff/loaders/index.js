import { createLoggerNamespace } from '../logger/index.js';
import errorsLoader from './errors.js';
import loggingMiddelwareLoader from './logger.js';
import routeLoader from './routes.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader');

/**
 * Calls all application's loaders.
 * @param {Express.Application} app - Express application.
 * @async
 */
export default async function loadApp(app) {
    app.set('x-powered-by', false);
    loaderLogger.debug('Remove X-Powered-By');

    loggingMiddelwareLoader(app);
    loaderLogger.verbose('Logging middleware initialized');

    routeLoader(app);
    loaderLogger.verbose('Routes initialized');

    errorsLoader(app);
    loaderLogger.verbose('Error middlewares initialized');
}