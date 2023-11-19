import { ForeignKeyConstraintError, UniqueConstraintError } from 'sequelize';
import { ConflictError, UserInputValidationError } from '../errors/index.js';
import { createLoggerNamespace } from '../logger/index.js';
import {
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    updateUser,
} from '../services/users.js';
import { hashPassword, invalidateRefreshToken } from '../services/auth.js';
import { getAllPosts } from '../services/posts.js';
import { deleteImage } from '../services/images.js';

const userControllerLogger = createLoggerNamespace('groupomania:api:controllers:user');

/**
 * User creation controller.
 * Hashes the password.
 * Calls the right service.
 * Sends a message to the client with status 201 if the request is successful, or calls the error handler middleware if
 *  an error occurs.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function createUserController(req, res, next) {
    userControllerLogger.verbose('Create user middleware starting');
    try {
        const hashedPassword = await hashPassword(req.body.password);
        userControllerLogger.debug('Password hashed');

        const userInfos = {
            email: req.body.email,
            password: hashedPassword,
        };
        const newUser = await createUser(userInfos);

        const responseData = {
            id: newUser.userId,
            email: newUser.email,
        };
        res.status(201).json(responseData);
        userControllerLogger.verbose('Response sent');
    } catch (error) {
        let normalizedError = error;
        if (error instanceof UniqueConstraintError) {
            normalizedError = new ConflictError(
                {
                    message: 'Email address must be unique.',
                    title: 'This email address already exists',
                    description: 'It appears that you already have an account. You may try to log in.',
                },
                error
            );
        }
        return next(normalizedError);
    }
}



/**
 * User fetching.
 * Calls the right service.
 * Sends a message to the client with status 200 containing the user informations, or calls the error handler
 *  middleware if an error occurs.
 * If the client required more informations about the role, provide those informations.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function getuserByIdController(req, res, next) {
    userControllerLogger.verbose('Get user by id middleware starting');
    try {
        const options = {
            ...req.query.roleInfo && { roleInfo: req.query.roleInfo },
        };
        const user = await getUserById(req.params.userId, options);

        res.status(200).json(user);
        userControllerLogger.verbose('Response sent');
    } catch (error) {
        return next(error);
    }
}



/**
 * All users fetching.
 * Calls the right service.
 * Sends a message to the client with status 200 containing the users informations, or calls the error handler
 *  middleware if an error occurs.
 * If the client required more informations about the role, provide those informations.
 * If the client wanted to filter or paginate the results, provide the informations to do so.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function getAllUsersController(req, res, next) {
    userControllerLogger.verbose('Get all users middleware starting');
    try {
        const options = {
            ...req.query.roleInfo && { roleInfo: req.query.roleInfo },
            ...req.query.role && { role: req.query.role },
            ...req.query.limit && { limit: req.query.limit },
            ...req.query.page && { page: req.query.page },
        };
        const users = await getAllUsers(options);

        res.status(200).json(users);
        userControllerLogger.verbose('Response sent');
    } catch (error) {
        return next(error);
    }
}



/**
 * User's role update controller.
 * Calls the right service.
 * Sends a response with status 204 to the client if the request is successful, or calls the error handler middleware
 *  if an error occurs.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function updateUserRoleController(req, res, next) {
    userControllerLogger.verbose('Update user\'s role middleware starting');
    try {
        const newData = { roleId: req.body.roleId };

        await updateUser(req.params.userId, newData);

        res.status(204).end();
        userControllerLogger.verbose('Response sent');
    } catch (error) {
        let normalizedError = error;
        if (error instanceof ForeignKeyConstraintError) {
            normalizedError = new UserInputValidationError(
                {
                    message: 'The roleId does not match with an existing role.',
                    title: 'The roleId doesn\'t exist.',
                    description: 'The roleId you want to give to the user does not exist yet. You may execute the request GET /api/v1/roles to get the list of all available roles.',
                },
                error
            );
        }
        return next(normalizedError);
    }
}



/**
 * User update controller. Allows to update email and password.
 * Hashes the password if the password is updated.
 * Calls the right service.
 * Sends a response with status 204 to the client if the request is successful, or calls the error handler middleware
 *  if an error occurs.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function updateUserController(req, res, next) {
    userControllerLogger.verbose('Update user middleware starting');
    try {
        const newData = {
            ...req.body.email && { email: req.body.email },
            ...req.body.password && { password: await hashPassword(req.body.password) },
        };

        await updateUser(req.params.userId, newData);

        res.status(204).end();
        userControllerLogger.verbose('Response sent');
    } catch (error) {
        let normalizedError = error;
        if (error instanceof UniqueConstraintError) {
            normalizedError = new ConflictError(
                {
                    message: 'Email address must be unique.',
                    title: 'This email address already exists',
                    description: 'It appears that you already have an account. You may try to log in.',
                },
                error
            );
        }
        return next(normalizedError);
    }
}



/**
 * User deletion controller.
 * Calls the right service.
 * Deletes posts by cascade, deletes posts images too.
 * Sends a response with status 204 to the client if the request is successful, or calls the error handler middleware
 *  if an error occurs.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function deleteUserController(req, res, next) {
    userControllerLogger.verbose('Delete user middleware starting');
    let userPosts;
    try {
        // Get the user's posts to have access to their images
        userPosts = await getAllPosts({ userId: req.params.userId });

        await deleteUser(req.params.userId);
        userControllerLogger.debug('User deleted');

        await invalidateRefreshToken(req.params.userId);
        userControllerLogger.debug('User\'s refreh tokens deleted');

        res.status(204).end();
        userControllerLogger.verbose('Response sent');
    } catch (error) {
        return next(error);
    }

    // Delete the images
    const imageUrls = [];
    for (const post of userPosts) {
        if (post.imageUrl !== null) {
            imageUrls.push(post.imageUrl);
        }
    }
    deleteImage(imageUrls);
}