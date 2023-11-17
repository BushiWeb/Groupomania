import helmet from 'helmet';
import { createLoggerNamespace } from '../../logger/index.js';
import cors from 'cors';
import config from '../../config/config.js';

const loaderLogger = createLoggerNamespace(
    'groupomania:bff:bff-loader:headers',
);

/**
 * Add all middleware adding headers.
 * @param {Express.Application} router - Express application
 */
export default function bffHeadersLoader(router) {
    loaderLogger.verbose('Loading bff router headers');

    // Add CORS headers
    let corsOptions = {};
    const corsConfiguration = config.get('cors');
    for (const parameter in corsConfiguration) {
        if (corsConfiguration[parameter]) {
            corsOptions[parameter] = corsConfiguration[parameter];
        }
    }
    router.use(cors(corsOptions));
    loaderLogger.verbose('CORS middleware added');
    loaderLogger.debug('CORS middleware options are %O', corsOptions);

    // Add other security headers
    router.use(
        helmet.noSniff(),
        helmet.frameguard({ action: 'deny' }),
        helmet.contentSecurityPolicy({
            directives: { 'frame-ancestors': 'none' },
        }),
    );
    loaderLogger.verbose('Security header middlewares added');
}
