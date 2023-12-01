import helmet from 'helmet';
import { createLoggerNamespace } from '../../logger/index.js';

const loaderLogger = createLoggerNamespace(
    'groupomania:bff:html-loader:headers',
);

/**
 * Add all middleware adding headers.
 * @param {Express.Application} router - Express application
 */
export default function htmlHeadersLoader(router) {
    loaderLogger.verbose('Loading html router headers');

    router.use(
        helmet.contentSecurityPolicy({
            useDefaults: false,
            directives: {
                defaultSrc: [
                    "'self'",
                    'localhost:8000',
                    'localhost:3000',
                    'fonts.googleapis.com',
                    'fonts.gstatic.com',
                ],
                objectSrc: ["'none'"],
                frameAncestors: ["'none'"],
                imgSrc: [
                    'https:',
                    'data:',
                    'blob:',
                    "'self'",
                    'localhost:8000',
                    'localhost:3000',
                ]
            },
        }),
        helmet.crossOriginEmbedderPolicy(),
        helmet.crossOriginOpenerPolicy(),
        helmet.crossOriginResourcePolicy(),
        helmet.referrerPolicy({
            policy: 'strict-origin-when-cross-origin',
        }),
        helmet.noSniff(),
        helmet.frameguard({
            action: 'deny',
        }),
        helmet.permittedCrossDomainPolicies({
            permittedPolicies: 'none',
        }),
    );
    loaderLogger.verbose('Security headers added');
}
