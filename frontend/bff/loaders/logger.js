import { createLoggerNamespace, morganMiddleware } from '../logger/index.js';

const loaderLogger = createLoggerNamespace('groupomania:bff:loader:logger');

/**
 * Add all logging middlewares.
 * @param {Express.Application} app - Express application
 */
export default function loggingMiddelwareLoader(app) {
    loaderLogger.verbose('Loading logging middlewares');

    app.use(morganMiddleware);
    loaderLogger.debug('Morgan logging middleware added');

}