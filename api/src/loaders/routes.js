import createLoggerNamespace from '../logger/logger-namespace.js';
import UserRouter from '../routes/user-routes.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:users');

/**
 * Add all users related routes and middlewares.
 * @param {Express.Application} app - Express application
 */
export default function routeLoader (app) {
    loaderLogger.verbose('Loading users routes and middlewares');

    app.use('/api/v1/users', UserRouter);
    loaderLogger.debug('User router added');

}