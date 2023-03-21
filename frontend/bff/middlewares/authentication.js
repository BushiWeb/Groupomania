import { createLoggerNamespace } from '../logger/index.js';
import { UnauthorizedError, ForbiddenError } from '../errors/index.js';
import { generateCRSFToken } from '../services/session/generate-crsf-token.js';

const authLogger = createLoggerNamespace('groupomania:bff:authentication');

/**
 * Checks whether or not the X-CRSF-Token is provided and returns its value.
 * @param {Express.Request} req
 * @returns {string} Returns the CRSF token.
 * @throws {ForbiddenError} Throws an error if the CRSF token is invalid.
 */
function getCrsfToken(req) {
    authLogger.debug('Getting the CRSF token');

    // Search the header
    const crsfToken = req.get('X-CRSF-Token');
    if (!crsfToken) {
        throw new ForbiddenError({
            message: 'Missing X-CRSF-Token header',
            title: 'Can\'t find the header containing the CRSF token',
            description: 'The request doesn`t contain the CRSF token. If you are the author of the request, please include the CRSF token within the X-CRSF-Token Header.',
        });
    }

    return crsfToken;
}



/**
 * Checks whether or not the CRSF token is provided and if it is right.
 * The CRSF token must be provided inside of a custom X-CRSF-Token header.
 * @param {Express.Request} req
 * @param {string} token
 * @returns {boolean} Returns true if the CRSF token is valid.
 * @throws {ForbiddenError} Throws an error if the CRSF token is invalid.
 */
function checkCRSFToken(req, token) {
    authLogger.debug('Checking the CRSF token');

    if (!req.session.crsfToken) {
        throw new ForbiddenError({
            message: 'No CRSF token registered',
            title: 'We don\'t have any CRSF token registered for your session',
            description: 'You may have provided a CRSF token but we don\'t have any registered or valid token for your session. If you are the author of the request, you must first load the web application before making any request.',
        });
    }

    if (req.session.crsfToken !== token) {
        throw new ForbiddenError({
            message: 'Invalid CRSF token',
            title: 'The CRSF token is not valid',
            description: 'The provided CRSF token does not match the one stored for your session. If you are the author of the request, please provide the right CRSF token.',
        });
    }

    return true;
}


/**
 * Generates a new CRSF token and stores it inside of the session and the custom header for the response.
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
function updateCRSFToken(req, res) {
    const newToken = generateCRSFToken();
    req.session.crsfToken = newToken;
    res.set('X-CRSF-Token', newToken);
}


/**
 * Function generating the authentication middleware.
 * @param {boolean} [checkAuthentication=true] - Boolean indicating if the middleware should check whether
 *  or not the user already have a session.
 * @return Returns the configured authentication middleware.
 */
export default function authenticate(checkAuthentication = true) {
    /**
     * Middleware checking if the user is authenticated.
     * The function first checks the CRSF token to make sure the request comes from the user.
     * It then optionnaly checks the session to see if the user is authenticated.
     * It finally generates a new CRSF token and places it in a custom header for the response.
     * @param {Express.Request} req - Express request object.
     * @param {Express.Response} res - Express response object.
     * @param next - Next middleware to execute.
     */
    return function (req, res, next) {
        authLogger.verbose('Authentication middleware starting');

        try {
            const crsfToken = getCrsfToken(req);
            checkCRSFToken(req, crsfToken);

            if (checkAuthentication && !req.session.user) {
                throw new UnauthorizedError({
                    message: 'User is not authenticated',
                    title: 'You are not authenticated',
                    description: 'This request requires you to be authenticated, but we can\'t find your session. Please, login and try again.',
                });
            }
        } catch (error) {
            return next(error);
        }

        updateCRSFToken(req, res);
        next();
    };
}