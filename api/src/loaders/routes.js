import { createLoggerNamespace } from '../logger/index.js';
import UserRouter from '../routes/user-routes.js';
import getRoutesRegexp from '../utils/get-routes.js';
import AuthRouter from '../routes/auth-routes.js';
import RoleRouter from '../routes/role-routes.js';
import PostRouter from '../routes/post-routes.js';
import express from 'express';
import config from '../config/config.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:routes');

/**
 * Add all users related routes and middlewares.
 * @param {Express.Application} app - Express application
 */
export default function routeLoader(app) {
    loaderLogger.verbose('Loading users routes and middlewares');

    app.use(
        '/images',
        (req, res, next) => {
            res.set('Cross-Origin-Resource-Policy', 'cross-origin');
            next();
        },
        express.static(config.get('payload.files.saveFolder'), { fallthrough: false })
    );
    loaderLogger.debug('Images route added');

    app.use('/api/v1/users', UserRouter);
    loaderLogger.debug('User router added');

    app.use('/api/v1/posts', PostRouter);
    loaderLogger.debug('Post router added');

    app.use('/api/v1/auth', AuthRouter);
    loaderLogger.debug('Authentication router added');

    app.use('/api/v1/roles', RoleRouter);
    loaderLogger.debug('Role router added');

    // Finds all available routes to analyse errors
    app.set('routes-regexp', getRoutesRegexp(app));
    loaderLogger.debug(`All route's regexps found: ${app.get('routes-regexp')}`);

}