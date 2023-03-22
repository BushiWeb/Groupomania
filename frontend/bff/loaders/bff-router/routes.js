import { createLoggerNamespace } from '../../logger/index.js';
import loginController from '../../controllers/authentication/login.js';

const loaderLogger = createLoggerNamespace('groupomania:bff:bff-loader:routes');

/**
 * Add all routes.
 * @param {Express.Application} router - Express application
 */
export default function routeLoader(router) {
    loaderLogger.verbose('Loading html routes');

    router.post('/login', loginController);
    loaderLogger.debug('POST /login - add route to login or refresh the access token');
}