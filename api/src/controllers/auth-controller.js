import UnauthorizedError from '../errors/errors/UnauthorizedError.js';
import { createLoggerNamespace } from '../logger/logger.js';
import { login } from '../services/auth.js';

const authControllerLogger = createLoggerNamespace('groupomania:api:controllers:auth');

/**
 * Login controller.
 * Calls the right service.
 * Sends a message to the client with status 200 and the authentication tokens if the request is successful, or calls the error handler middleware if an error occurs.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function loginController(req, res, next) {
    authControllerLogger.verbose('Login middleware starting');
    try {
        const userInfos = {
            email: req.body.email,
            password: req.body.password
        };
        const authInfos = await login(userInfos);

        res.status(200).json(authInfos);
        authControllerLogger.verbose('Response sent');
    } catch (error) {
        if (error instanceof UnauthorizedError) {
            error.setRequestInformations(req.path, req.method);
        }
        return next(error);
    }
}