import headersLoader from './headers.js';
import { createLoggerNamespace } from '../logger/index.js';
import errorsLoader from './errors.js';
import routeLoader from './routes.js';
import loggingMiddelwareLoader from './logger.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader');

/**
 * Calls all application's loaders.
 * @param {Express.Application} app - Express application.
 * @async
 */
export default async function loadApp(app) {
    loggingMiddelwareLoader(app);
    loaderLogger.verbose('Logging middleware initialized');

    errorsLoader(app);
    loaderLogger.verbose('Error middlewares initialized');
}