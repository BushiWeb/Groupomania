import express from 'express';
import { createLoggerNamespace } from '../logger/logger.js';
import { createUserController } from '../controllers/user-controllers.js';
import config from '../config/config.js';
import validationMiddlewares, { createUserBodySchema } from '../schemas/index.js';
import { checkSchema } from 'express-validator';

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
    express.json(expressJsonOptions),
    validationMiddlewares(createUserBodySchema),
    createUserController
);
userRoutesLogger.debug('POST / - create user route added');

export default router;