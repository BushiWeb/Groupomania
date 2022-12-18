import express from 'express';
import { createLoggerNamespace } from '../logger/index.js';
import { createUserController, getuserByIdController } from '../controllers/user-controllers.js';
import config from '../config/config.js';
import validationMiddlewares, { createUserBodySchema, getUserSchema } from '../middlewares/user-input-validation.js';
import createBodyParser from '../middlewares/body-parsing.js';
import authenticate from '../middlewares/authentication.js';

const userRoutesLogger = createLoggerNamespace('groupomania:api:routes:user');

const router = express.Router();
userRoutesLogger.verbose('User router initialisation');

const expressJsonOptions = {
    limit: config.get('payload.maxSize')
};

/**
 * User creation route.
 * Parses the request's body.
 * Validates and sanitizes body data.
 * Call the corresponding controller.
 */
router.post(
    '/',
    createBodyParser({
        'application/json': express.json(expressJsonOptions)
    }, false),
    validationMiddlewares(createUserBodySchema),
    createUserController
);
userRoutesLogger.debug('POST / - create user route added');

/**
 * User fetching route.
 * Checks that there is no body
 * Validates and sanitizes request parameters.
 * Call the corresponding controller.
 */
router.get(
    '/:id',
    createBodyParser({}),
    validationMiddlewares(getUserSchema),
    authenticate(),
    getuserByIdController
);
userRoutesLogger.debug('POST / - create user route added');

export default router;