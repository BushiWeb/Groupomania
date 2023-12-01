import { createLoggerNamespace } from '../logger/index.js';
import expressStaticGzip from 'express-static-gzip';

const loaderLogger = createLoggerNamespace('groupomania:bff:loader:routes');

/**
 * Add static file routes
 * @param {Express.Application} app - Express application
 */
export default function staticLoader(app) {
    loaderLogger.verbose('Loading users routes and middlewares');

    // Cache static files for 1 year. These files change their names when updated, so aggressie caching is OK
    app.use('/static', (req, res, next) => {
        res.set('Cache-Control', 'max-age: 31536000');
        next();
    });

    // Add the static routes
    app.use(
        expressStaticGzip('build', {
            enableBrotli: true,
            index: false,
            orderPreference: ['br'],
        }),
    );
    loaderLogger.debug('Build static route added');
}
