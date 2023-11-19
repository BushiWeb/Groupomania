import express from 'express';
import { createLoggerNamespace } from '../logger/index.js';
import { loginController, logoutController, getAccessTokenController } from '../controllers/auth-controller.js';
import config from '../config/config.js';
import validationMiddlewares, { loginBodySchema } from '../middlewares/user-input-validation.js';
import authenticate from '../middlewares/authentication.js';
import createBodyParser from '../middlewares/body-parsing.js';

const authRoutesLogger = createLoggerNamespace('groupomania:api:routes:auth');

const router = express.Router();
authRoutesLogger.verbose('Authentication router initialisation');

const expressJsonOptions = {
    limit: config.get('payload.maxSize'),
};

/**
 * Login route.
 * Parses the request's body.
 * Validates and sanitizes body data.
 * Call the corresponding controller.
 */
router.post(
    '/login',
    createBodyParser({
        'application/json': express.json(expressJsonOptions),
    }, false),
    validationMiddlewares(loginBodySchema),
    loginController
);
authRoutesLogger.debug('POST /login - login route added');

/**
 * Logout route.
 * Checks that the body is empty.
 * Authenticates the user with the refresh token.
 * Calls the corresponding controller.
 */
router.post(
    '/logout',
    createBodyParser({}),
    authenticate(true),
    logoutController
);
authRoutesLogger.debug('POST /logout - logout route added');

/**
 * Route to get a new access token. Also rotates the refresh token.
 * Checks that the body is empty.
 * Authenticate the user with the refres token.
 * Calls the corresponding controller.
 */
router.post(
    '/accessToken',
    createBodyParser({}),
    authenticate(true),
    getAccessTokenController
);
authRoutesLogger.debug('POST /logout - logout route added');

export default router;