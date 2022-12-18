import { UniqueConstraintError } from 'sequelize';
import { ConflictError } from '../errors/index.js';
import { createLoggerNamespace } from '../logger/index.js';
import { createUser, getUserById } from '../services/users.js';

const userControllerLogger = createLoggerNamespace('groupomania:api:controllers:user');

/**
 * User creation controller.
 * Calls the right service.
 * Sends a message to the client with status 201 if the request is successful, or calls the error handler middleware if an error occurs.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function createUserController(req, res, next) {
    userControllerLogger.verbose('Create user middleware starting');
    try {
        const userInfos = {
            email: req.body.email,
            password: req.body.password
        };
        const newUser = await createUser(userInfos);

        const responseData = {
            id: newUser.userId,
            email: newUser.email
        };
        res.status(201).json(responseData);
        userControllerLogger.verbose('Response sent');
    } catch (error) {
        let normalizedError;
        if (error instanceof UniqueConstraintError) {
            normalizedError = new ConflictError({
                message: 'Email address must be unique.',
                title: 'This email address already exists',
                description: 'It appears that you already have an account. You may try to log in.'
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
 * Sends a message to the client with status 200 containing the user informations, or calls the error handler middleware if an error occurs.
 * If the client required more informations about the role, provide those informations.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function getuserByIdController(req, res, next) {
    userControllerLogger.verbose('Get user by id middleware starting');
    try {
        const options = {
            ...(req.query.roleInfo && { roleInfo: req.query.roleInfo })
        };
        const user = await getUserById(req.params.id, options);

        res.status(200).json(user);
        userControllerLogger.verbose('Response sent');
    } catch (error) {
        return next(error);
    }
}