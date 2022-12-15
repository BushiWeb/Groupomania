import { createLoggerNamespace } from '../logger/index.js';
import UserRouter from '../routes/user-routes.js';
import getRoutesRegexp from '../utils/get-routes.js';
import AuthRouter from '../routes/auth-routes.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:routes');

/**
 * Add all users related routes and middlewares.
 * @param {Express.Application} app - Express application
 */
export default function routeLoader (app) {
    loaderLogger.verbose('Loading users routes and middlewares');

    app.use('/api/v1/users', UserRouter);
    loaderLogger.debug('User router added');

    app.use('/api/v1/auth', AuthRouter);
    loaderLogger.debug('Authentication router added');

    // Finds all available routes to analyse errors
    app.set('routes-regexp', getRoutesRegexp(app));
    loaderLogger.debug(`All route's regexps found: ${app.get('routes-regexp')}`);

}