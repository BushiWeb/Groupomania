import { createLoggerNamespace } from '../../logger/index.js';
import htmlHeadersLoader from './headers.js';
import routeLoader from './routes.js';

const loaderLogger = createLoggerNamespace('groupomania:bff:html-loader');

/**
 * Calls all router's loaders.
 * @param {Express.Router} router - Express router.
 * @async
 */
export default function loadHTMLRouter(router) {
    htmlHeadersLoader(router);
    loaderLogger.verbose('Security headers added');

    routeLoader(router);
    loaderLogger.verbose('All routes loaded');
}
