import { createLoggerNamespace, morganMiddleware } from '../logger/logger.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:logger');

/**
 * Add all logging middlewares.
 * @param {Express.Application} app - Express application
 */
export default function loggingMiddelwareLoader (app) {
    loaderLogger.verbose('Loading logging middlewares');

    app.use(morganMiddleware);
    loaderLogger.debug('Morgan logging middleware added');

}