import express from 'express';
import { createLoggerNamespace } from '../logger/index.js';
import { createUserController, getAllUsersController, getuserByIdController, updateUserController } from '../controllers/user-controllers.js';
import config from '../config/config.js';
import validationMiddlewares, { createUserBodySchema, getAllUsersSchema, getUserSchema, updateUserSchema } from '../middlewares/user-input-validation.js';
import createBodyParser from '../middlewares/body-parsing.js';
import authenticate from '../middlewares/authentication.js';
import authorise from '../middlewares/authorization.js';

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
 * Authenticate the client with the access token.
 * Call the corresponding controller.
 */
router.get(
    '/:id',
    createBodyParser({}),
    validationMiddlewares(getUserSchema),
    authenticate(),
    getuserByIdController
);
userRoutesLogger.debug('GET /:id - get user route added');

/**
 * All users fetching route.
 * Checks that there is no body
 * Validates and sanitizes request parameters.
 * Authenticate the client with the access token.
 * Call the corresponding controller.
 */
router.get(
    '/',
    createBodyParser({}),
    validationMiddlewares(getAllUsersSchema),
    authenticate(),
    getAllUsersController
);
userRoutesLogger.debug('GET / - get all users route added');

/**
 * User update route.
 * Checks that there is a JSON body.
 * Validates and sanitizes request parameters.
 * Authenticate the client with the access token.
 * Checks if the user has the right to execute this action.
 * Call the corresponding controller.
 */
router.put(
    '/:userId',
    createBodyParser({
        'application/json': express.json(expressJsonOptions)
    }, false),
    validationMiddlewares(updateUserSchema),
    authenticate(),
    authorise('update', 'User', {
        User: {
            origin: 'res',
            field: 'auth'
        },
        Subject: {
            origin: 'params'
        }
    }, ['email', 'password']),
    updateUserController
);
userRoutesLogger.debug('PUT /:id - update user route added');

export default router;