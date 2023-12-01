import { createLoggerNamespace } from '../../logger/index.js';
import logoutRequest from '../../services/requests/logout.js';

const logoutControllerLogger = createLoggerNamespace(
    'groupomania:bff:controller:logout',
);

/**
 * Logout controller.
 * Send a logout request.
 * Deletes the current session, but keeps the CSRF token.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export default async function logoutController(req, res, next) {
    logoutControllerLogger.verbose('Logout controller starting');

    const pageTokens = req.session.pageCSRFTokens;
    const requestTokens = req.session.requestCSRFTokens;

    try {
        // Send the logout request
        await logoutRequest(req.session.user.refreshToken);
    } catch (error) {
        next(error);
    } finally {
        // Reset the session
        req.session.user = null;
        req.session.save((error) => {
            if (error) {
                logoutControllerLogger.debug('Error while saving the session');
                return next(error);
            }

            req.session.regenerate((error) => {
                if (error) {
                    logoutControllerLogger.debug(
                        'Error while regenerating the session',
                    );
                    return next(error);
                }

                req.session.pageCSRFTokens = pageTokens;
                req.session.requestCSRFTokens = requestTokens;
                res.status(204).end();
            });
        });
    }
}
