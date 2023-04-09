import { createLoggerNamespace } from '../../logger/index.js';
import loginController from '../../controllers/authentication/login.js';
import createBodyParser from '../../middlewares/body-parsing.js';
import validationMiddlewares from '../../middlewares/user-input-validation.js';
import authenticate from '../../middlewares/authentication.js';
import loginBodySchema from '../../schemas/login.js';
import getUserSchema from '../../schemas/getUser.js';
import signupController from '../../controllers/authentication/signup.js';
import signupBodySchema from '../../schemas/signup.js';
import updateUserSchema from '../../schemas/updateUser.js';
import updateUserController from '../../controllers/users/updateUser.js';
import getUserController from '../../controllers/users/getuser.js';
import getUsersController from '../../controllers/users/getUsers.js';
import getUsersSchema from '../../schemas/getUsers.js';
import getPostsController from '../../controllers/posts/getPosts.js';
import getPostsSchema from '../../schemas/getPosts.js';
import express from 'express';
import config from '../../config/config.js';
import multer from '../../middlewares/multer.js';
import createPostSchema from '../../schemas/create-post.js';
import createPostController from '../../controllers/posts/createPost.js';
import updatePostSchema from '../../schemas/update-post.js';
import updatePostController from '../../controllers/posts/updatePost.js';
import likePostSchema from '../../schemas/like-post.js';
import likePostController from '../../controllers/posts/likePost.js';
import deletePostSchema from '../../schemas/delete-post.js';
import deletePostController from '../../controllers/posts/deletePost.js';
import updateUserRoleSchema from '../../schemas/update-user-role.js';
import updateUserRoleController from '../../controllers/users/updateUserRole.js';

const loaderLogger = createLoggerNamespace('groupomania:bff:bff-loader:routes');

const expressJsonOptions = {
    limit: config.get('payload.maxSize'),
};

/**
 * Add all routes.
 * @param {Express.Application} router - Express application
 */
export default function routeLoader(router) {
    loaderLogger.verbose('Loading html routes');

    router.post(
        '/login',
        createBodyParser({
            'application/json': express.json(expressJsonOptions),
        }),
        validationMiddlewares(loginBodySchema),
        authenticate(false),
        loginController
    );
    loaderLogger.debug('POST /login - add route to login or refresh the access token');

    router.post(
        '/signup',
        createBodyParser({
            'application/json': express.json(expressJsonOptions),
        }, false),
        validationMiddlewares(signupBodySchema),
        authenticate(false),
        signupController
    );
    loaderLogger.debug('POST /signup - add route to login or refresh the access token');

    router.get(
        '/users',
        createBodyParser({}),
        validationMiddlewares(getUsersSchema),
        authenticate(true),
        getUsersController
    );
    loaderLogger.debug('GET /users - add route to get all the users');

    router.get(
        '/users/:userId',
        createBodyParser({}),
        validationMiddlewares(getUserSchema),
        authenticate(true),
        getUserController
    );
    loaderLogger.debug('GET /users/:userId - add route to get the user\'s informations');

    router.put(
        '/users/:userId',
        createBodyParser({
            'application/json': express.json(expressJsonOptions),
        }, false),
        validationMiddlewares(updateUserSchema),
        authenticate(true),
        updateUserController
    );
    loaderLogger.debug('PUT /users/:userId - add route to update the user password and email');

    router.put(
        '/users/:userId/role',
        createBodyParser({
            'application/json': express.json(expressJsonOptions),
        }, false),
        validationMiddlewares(updateUserRoleSchema),
        authenticate(true),
        updateUserRoleController
    );
    loaderLogger.debug('PUT /users/:userId/role - add route to update the user role');

    router.get(
        '/posts',
        createBodyParser({}),
        validationMiddlewares(getPostsSchema),
        authenticate(true),
        getPostsController
    );
    loaderLogger.debug('GET /posts - add route to get all the posts');

    router.post(
        '/posts',
        createBodyParser({
            'application/json': express.json(expressJsonOptions),
            'multipart/form-data': multer,
        }, false),
        validationMiddlewares(createPostSchema, true),
        authenticate(true),
        createPostController
    );
    loaderLogger.debug('POST /posts - add route to create a post');

    router.put(
        '/posts/:postId',
        createBodyParser({
            'application/json': express.json(expressJsonOptions),
            'multipart/form-data': multer,
        }, false),
        validationMiddlewares(updatePostSchema, true),
        authenticate(true),
        updatePostController
    );
    loaderLogger.debug('PUT /posts/:postId - add route to update a post');

    router.post(
        '/posts/:postId/like',
        createBodyParser({
            'application/json': express.json(expressJsonOptions),
        }, false),
        validationMiddlewares(likePostSchema),
        authenticate(true),
        likePostController
    );
    loaderLogger.debug('POST /posts/:postId/like - add route to like a post');

    router.delete(
        '/posts/:postId',
        createBodyParser({}),
        validationMiddlewares(deletePostSchema),
        authenticate(true),
        deletePostController
    );
    loaderLogger.debug('DELETE /posts/:postId - add route to delete a post');
}