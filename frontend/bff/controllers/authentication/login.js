import { createLoggerNamespace } from '../../logger/index.js';
import loginRequest from '../../services/requests/login.js';
import refreshRequest from '../../services/requests/refresh.js';
import getUserRequest from '../../services/requests/getUser.js';
import config from '../../config/config.js';
import { UnauthorizedError } from '../../errors/index.js';

const loginControllerLogger = createLoggerNamespace(
    'groupomania:bff:controller:login',
);

/**
 * Send a login request and then a get user request.
 * @param {Express.Request} req
 * @returns {{infos: Object, accessToken: String, refreshToken: String}} Returns an object containing the user
 *  informations and the authentication tokens
 */
async function login(req) {
    loginControllerLogger.debug('Logging in with credentials');
    const loginInformations = await loginRequest(
        req.body.email,
        req.body.password,
    );
    const userInformations = await getUserRequest(
        loginInformations.userId,
        loginInformations,
    );
    return {
        infos: userInformations,
        accessToken: loginInformations.accessToken,
        refreshToken: loginInformations.refreshToken,
    };
}

/**
 * Send a refresh request.
 * @param {Express.Request} req
 * @returns {{infos: Object, accessToken: String, refreshToken: String}} Returns an object containing the user
 *  informations and the authentication tokens
 * @throws {UnauthorizedError} Throws an UnauthorizedError if there is no authenticated session.
 */
async function refresh(req) {
    loginControllerLogger.debug('Refreshing access token');

    if (!req.session.user) {
        throw new UnauthorizedError({
            message: 'User is not authenticated',
            title: 'You are not authenticated',
            description:
                "This request requires you to be authenticated, but we can't find your session. Please, login and try again.",
        });
    }

    const loginInformations = await refreshRequest(
        req.session.user.refreshToken,
    );
    return {
        infos: req.session.user.infos,
        accessToken: loginInformations.accessToken,
        refreshToken: loginInformations.refreshToken,
    };
}

/**
 * Extends session lifespan.
 * @param {Express.Request} req
 */
function extendSessionLifespan(req) {
    loginControllerLogger.debug('Extending session lifespan');
    req.session.cookie.maxAge = config.get('session.extendedCookieExp');
}

/**
 * Login controller.
 * If the user sends its credentials, sends a login request to the API, otherwise send a refresh request
 *  with the token stored in the session.
 * Fetch the user informations or get them from the session.
 * Store the user informations and the token in the session.
 * Send the user information and the access token to the user, as well as the CRSF token
 *  in a custom header (done in authorization middleware).
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export default async function loginController(req, res, next) {
    loginControllerLogger.verbose('Login controller starting');
    try {
        const maxAge = req.session.cookie.maxAge;

        // Login or refresh the access token
        let user;
        if (req.body.email && req.body.password) {
            user = await login(req);
        } else {
            user = await refresh(req);
        }

        // Save the new data in the session
        req.session.regenerate((error) => {
            if (error) {
                loginControllerLogger.debug(
                    'Error while regenerating the session',
                );
                return next(error);
            }

            loginControllerLogger.debug(
                'Session regenerated, saving data in the session',
            );
            req.session.user = user;
            req.session.cookie.maxAge = maxAge;

            // Extend the session lifespan if the user wants to be remembered
            if (req.body.rememberMe) {
                extendSessionLifespan(req);
            }

            // Send the response
            req.session.save((error) => {
                if (error) {
                    loginControllerLogger.debug(
                        'Error while saving the session',
                    );
                    return next(error);
                }

                loginControllerLogger.debug(
                    'Session saved. Sending the response',
                );
                res.status(200).json({ ...user.infos });
            });
        });
    } catch (error) {
        next(error);
    }
}
