import { createLoggerNamespace } from '../logger/index.js';
import errorsLoader from './errors.js';
import loggingMiddelwareLoader from './logger.js';
import htmlPageLoader from './html-page.js';
import staticLoader from './static.js';

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

    staticLoader(app);
    loaderLogger.verbose('Static routes initialized');

    htmlPageLoader(app);
    loaderLogger.verbose('HTML page fetching initialized');

    errorsLoader(app);
    loaderLogger.verbose('Error middlewares initialized');
}