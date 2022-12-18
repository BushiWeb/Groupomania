import { NotFoundError, UnauthorizedError } from '../errors/index.js';
import { createLoggerNamespace } from '../logger/index.js';
import { createAccessToken, createRefreshToken, validatePassword, invalidateRefreshToken, validateRefreshToken } from '../services/auth.js';
import { getUserByEmail } from '../services/users.js';

const authControllerLogger = createLoggerNamespace('groupomania:api:controllers:auth');

/**
 * Login controller.
 * Fetches the user to check the password. Generates the tokens if the assword is valid.
 * Sends a message to the client with status 200 and the authentication tokens if the request is successful, or calls the error handler middleware if an error occurs.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function loginController(req, res, next) {
    authControllerLogger.verbose('Login middleware starting');
    try {
        const user = await getUserByEmail(req.body.email);
        authControllerLogger.debug('User fetched');
        await validatePassword(req.body.password, user);
        authControllerLogger.debug('Password valid');
        const accessToken = await createAccessToken(user.userId, user.roleId);
        authControllerLogger.debug('Access token created');
        const refreshToken = await createRefreshToken(user.userId, user.roleId);
        authControllerLogger.debug('Refresh token created');

        res.status(200).json({
            userId: user.userId,
            accessToken,
            refreshToken
        });

        authControllerLogger.verbose('Response sent, login successful');
    } catch (error) {
        let normalizedError = error;

        if (error instanceof NotFoundError) {
            normalizedError = new UnauthorizedError({
                message: 'The user corresponding the the email can\'t be found'
            }, error, {});
        }
        if (normalizedError instanceof UnauthorizedError) {
            normalizedError
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
 * Deletes the refresh token from the database.
 * Sends a message to the client with status 204 if the logout is successful, or calls the error handler middleware if an error occurs.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function logoutController(req, res, next) {
    authControllerLogger.verbose('Logout middleware starting');
    try {
        await invalidateRefreshToken(res.locals.auth.jti);

        res.status(204).end();
        authControllerLogger.verbose('Response sent, logout successful');
    } catch (error) {
        return next(error);
    }
}



/**
 * Get new access token controller.
 * Calls the right services.
 * Sends a message to the client with status 204 if the logout is successful, or calls the error handler middleware if an error occurs.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function getAccessTokenController(req, res, next) {
    authControllerLogger.verbose('Logout middleware starting');
    try {
        const currentRefreshToken = res.locals.auth;
        const refreshTokenModel = await validateRefreshToken(currentRefreshToken.jti);
        authControllerLogger.debug('Refresh token still valid');
        await invalidateRefreshToken(refreshTokenModel);
        authControllerLogger.debug('Refresh token invalidated');
        const refreshToken = await createRefreshToken(currentRefreshToken.userId, currentRefreshToken.role, currentRefreshToken.exp);
        authControllerLogger.debug('New refresh token created');
        const accessToken = await createAccessToken(currentRefreshToken.userId, currentRefreshToken.role);
        authControllerLogger.debug('New access token created');

        res.status(200).json({
            userId: currentRefreshToken.userId,
            accessToken,
            refreshToken
        });
        authControllerLogger.verbose('Response sent, new tokens generated');
    } catch (error) {
        if (error instanceof UnauthorizedError) {
            await invalidateRefreshToken(res.locals.auth.userId);
        }
        return next(error);
    }
}