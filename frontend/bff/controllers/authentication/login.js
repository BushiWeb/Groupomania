import { createLoggerNamespace } from '../../logger/index.js';
import getUserInfoRequest from '../../services/requests/getUserInfo.js';
import loginRequest from '../../services/requests/login.js';
import refreshRequest from '../../services/requests/refresh.js';

const loginControllerLogger = createLoggerNamespace('groupomania:bff:controller:login');

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
        // Login or refresh the access token
        let loginInformations;
        let userInformations;
        if (req.body.email && req.body.password) {
            loginInformations = await loginRequest({ email: req.body.email, password: req.body.password });
            userInformations = await getUserInfoRequest(loginInformations.userId);
        } else {
            loginInformations = await refreshRequest(req.session.user.refreshToken);
        }

        // Get the user informations

        // Save the new data in the session
        req.session.regenerate((error) => {
            if (error) {
                return next(error);
            }

            req.session.user = {
                refreshToken: loginInformations.refreshToken,
                accessToken: loginInformations.accessToken,
                ...userInformations && { infos: userInformations },
            };

            // Send the response
            req.session.save((error) => {
                if (error) {
                    return next(error);
                }

                res.status(200).json({
                    accessToken: loginInformations.accessToken,
                    ...userInformations || req.session.user.infos,
                });
            });
        });
    } catch (error) {
        next(error);
    }
}