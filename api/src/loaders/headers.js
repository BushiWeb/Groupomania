import cors from 'cors';
import helmet from 'helmet';
import { createLoggerNamespace } from '../logger/index.js';
import config from '../config/config.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:headers');

/**
 * Add all middleware adding headers.
 * @param {Express.Application} app - Express application
 */
export default function headersLoader(app) {
    loaderLogger.verbose('Loading global headers');

    // Remove X-Powered-By
    app.disable('x-powered-by');

    // Add CORS headers
    let corsOptions = {};
    const corsConfiguration = config.get('cors');
    for (const parameter in corsConfiguration) {
        if (corsConfiguration[parameter]) {
            corsOptions[parameter] = corsConfiguration[parameter];
        }
    }
    app.use(cors(corsOptions));
    loaderLogger.verbose('CORS middleware added');
    loaderLogger.debug('CORS middleware options are %O', corsOptions);

    // Add other security headers
    app.use(
        helmet.noSniff(),
        helmet.frameguard({ action: 'deny' }),
        helmet.contentSecurityPolicy({ directives: { 'frame-ancestors': 'none' }})
    );
    loaderLogger.verbose('Security header middlewares added');
    loaderLogger.debug('Use helmet.noSniff to set the X-Content-Type-Options to nosniff');
    loaderLogger.debug('Use helmet.framegard to set the X-Frame-Options to DENY');
    loaderLogger.debug('Use helmet.contentSecurityPpolicy to set the Content-Security-Policy frame-ancestors to none');
}