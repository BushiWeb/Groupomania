import { createLoggerNamespace } from '../logger/index.js';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import helmet from 'helmet';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:html-page');

/**
 * Add middlewares to serve the html page.
 * @param {Express.Application} app - Express application
 */
export default function htmlPageLoader(app) {
    loaderLogger.verbose('Loading the middleware to serve the HTML page');

    // Add security headers
    app.use(
        helmet.contentSecurityPolicy({
            useDefaults: false,
            directives: {
                defaultSrc: ['\'self\'', 'localhost:3000'],
                objectSrc: ['\'none\''],
                frameAncestor: ['none'],
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
        })
    );
    loaderLogger.verbose('Security headers added');
    loaderLogger.debug('Use helmet.contentSecurityPolicy to set the Content-Security-Policy default-src to self and the API URL, the object-src to none and the frame-ancestor to none.');
    loaderLogger.debug('Use helmet.crossOriginEmbedderPolicy to set the Cross-Origin-Embedder-Policy to require-corp');
    loaderLogger.debug('Use helmet.crossOriginOpenerPolicy to set the Cross-Origin-Opener-Policy to same-origin');
    loaderLogger.debug('Use helmet.crossOriginRessourcePolicy to set the Cross-Origin-Ressource-Policy to same-origin');
    loaderLogger.debug('Use helmet.referrerPolicy to set the Referrer-Policy to strict-origin-when-cross-origin');
    loaderLogger.debug('Use helmet.noSniff to set the X-Content-Type-Options to nosniff');
    loaderLogger.debug('Use helmet.framegard to set the X-Frame-Options to DENY');
    loaderLogger.debug('Use helmet.permittedCrossDomainPolicies to set the Permitted-Cross-Domain-Policies to none');

    // Get the root directory
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const root = join(__dirname, '../..');
    loaderLogger.debug(`Root folder found: ${root}`);

    // Add the middleware to serve the HTML file
    app.get('/', (req, res) => {
        res.sendFile('./build/index.html', {
            root,
        });
    });
    loaderLogger.debug('Middleware to serve the HTML page addeed');
}