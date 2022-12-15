import { NotFoundError, UnauthorizedError } from '../errors/index.js';
import { createLoggerNamespace } from '../logger/index.js';
import { login, logout } from '../services/auth.js';
import { getUserByEmail } from '../services/users.js';

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
        const user = await getUserByEmail(req.body.email);
        const authInfos = await login(user, req.body.password);

        res.status(200).json(authInfos);
        authControllerLogger.verbose('Response sent');
    } catch (error) {
        let normalizedError = error;

        if (error instanceof NotFoundError) {
            normalizedError = new UnauthorizedError({
                message: 'The user corresponding the the email can\'t be found'
            }, error, {});
        }
        if (normalizedError instanceof UnauthorizedError) {
            normalizedError
                .setRequestInformations(req.path, req.method)
                .setPublicMessages(
                    'The credentials are not working.',
                    'It seems we can identify you with those credentials. Please, check your inputs and try again. If you are not registered, you must first create an account before loging in.'
                );
        }
        return next(normalizedError);
    }
}

/**
 * Logout controller.
 * Calls the right service.
 * Sends a message to the client with status 204 if the logout is successful, or calls the error handler middleware if an error occurs.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function logoutController(req, res, next) {
    authControllerLogger.verbose('Logout middleware starting');
    try {
        await logout(res.locals.auth.jti);

        res.status(204).end();
        authControllerLogger.verbose('Response sent');
    } catch (error) {
        return next(error);
    }
}