import { createLoggerNamespace } from '../../logger/index.js';
import { staticHTMLController } from '../../controllers/static-html/index.js';

const loaderLogger = createLoggerNamespace(
    'groupomania:bff:html-loader:routes',
);

/**
 * Add all routes.
 * @param {Express.Application} router - Express application
 */
export default function routeLoader(router) {
    loaderLogger.verbose('Loading html routes');

    router.get('/', staticHTMLController);
    loaderLogger.debug('GET / - HTML page serving route added');
}
