import express from 'express';
import { createLoggerNamespace } from '../logger/index.js';
import config from '../config/config.js';
import validationMiddlewares, { createPostSchema, getAllPostsSchema } from '../middlewares/user-input-validation.js';
import createBodyParser from '../middlewares/body-parsing.js';
import authenticate from '../middlewares/authentication.js';
import { createPostController, getAllPostsController } from '../controllers/post-controller.js';
import multer, { dataFormatter } from '../middlewares/multer.js';

const postRoutesLogger = createLoggerNamespace('groupomania:api:routes:post');

const router = express.Router();
postRoutesLogger.verbose('Post router initialisation');

const expressJsonOptions = {
    limit: config.get('payload.maxSize')
};

/**
 * Post creation route.
 * Parses the request's body, either json or form-data.
 * Validates and sanitizes body data.
 * Check authentication.
 * Call the corresponding controller.
 */
router.post(
    '/',
    createBodyParser({
        'application/json': express.json(expressJsonOptions),
        'multipart/form-data': {
            parser: multer,
            dataFormatter: dataFormatter('post')
        }
    }, false),
    validationMiddlewares(createPostSchema, true),
    authenticate(),
    createPostController
);
postRoutesLogger.debug('POST / - create post route added');

/**
 * All posts fetching route.
 * Checks that there is no body
 * Validates and sanitizes request parameters.
 * Authenticate the client with the access token.
 * Call the corresponding controller.
 */
router.get(
    '/',
    createBodyParser({}),
    validationMiddlewares(getAllPostsSchema),
    authenticate(),
    getAllPostsController
);
postRoutesLogger.debug('GET / - get all posts route added');

export default router;