import { createLoggerNamespace } from '../../logger/index.js';
import bffHeadersLoader from './headers.js';
import routeLoader from './routes.js';

const loaderLogger = createLoggerNamespace('groupomania:bff:bff-loader');

/**
 * Calls all router's loaders.
 * @param {Express.Router} router - Express router.
 * @async
 */
export default function loadBFFRouter(router) {
    bffHeadersLoader(router);
    loaderLogger.verbose('Security headers added');

    routeLoader(router);
    loaderLogger.verbose('All routes loaded');
}