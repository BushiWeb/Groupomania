import express from 'express';
import { createLoggerNamespace } from '../logger/index.js';
import createBodyParser from '../middlewares/body-parsing.js';
import authenticate from '../middlewares/authentication.js';
import { getAllRolesController } from '../controllers/roles-controller.js';

const roleRoutesLogger = createLoggerNamespace('groupomania:api:routes:role');

const router = express.Router();
roleRoutesLogger.verbose('Role router initialisation');

/**
 * All roles fetching route.
 * Checks that there is no body
 * Authenticate the client with the access token.
 * Call the corresponding controller.
 */
router.get(
    '/',
    createBodyParser({}),
    authenticate(),
    getAllRolesController
);
roleRoutesLogger.debug('GET / - get all roles route added');

export default router;