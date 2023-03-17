import express from 'express';
import { createLoggerNamespace } from '../logger/index.js';
import helmet from 'helmet';


const routeLogger = createLoggerNamespace('groupomania:api:route:html-page');

const router = express.Router();

// Get the root directory
const root = process.cwd();
routeLogger.debug(`Root folder found: ${root}`);

// Add security headers
router.use(
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
routeLogger.verbose('Security headers added');
routeLogger.debug('Use helmet.contentSecurityPolicy to set the Content-Security-Policy default-src to self and the API URL, the object-src to none and the frame-ancestor to none.');
routeLogger.debug('Use helmet.crossOriginEmbedderPolicy to set the Cross-Origin-Embedder-Policy to require-corp');
routeLogger.debug('Use helmet.crossOriginOpenerPolicy to set the Cross-Origin-Opener-Policy to same-origin');
routeLogger.debug('Use helmet.crossOriginRessourcePolicy to set the Cross-Origin-Ressource-Policy to same-origin');
routeLogger.debug('Use helmet.referrerPolicy to set the Referrer-Policy to strict-origin-when-cross-origin');
routeLogger.debug('Use helmet.noSniff to set the X-Content-Type-Options to nosniff');
routeLogger.debug('Use helmet.framegard to set the X-Frame-Options to DENY');
routeLogger.debug('Use helmet.permittedCrossDomainPolicies to set the Permitted-Cross-Domain-Policies to none');

// Add the middleware to serve the HTML file
router.get('/', (req, res) => {
    res.sendFile('./build/index.html', {
        root,
    });
});
routeLogger.debug('GET / - HTML pae serving route added');

export default router;