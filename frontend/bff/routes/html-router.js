import express from 'express';
import { createLoggerNamespace } from '../logger/index.js';
import helmet from 'helmet';
import { staticHTMLController } from '../controllers/static-html/index.js';


const routeLogger = createLoggerNamespace('groupomania:bff:route:html-page');

const router = express.Router();

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

// Add the middleware to serve the HTML file
router.get('/', staticHTMLController);
routeLogger.debug('GET / - HTML page serving route added');

export default router;