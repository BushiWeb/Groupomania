import { createLoggerNamespace } from '../logger/index.js';
import { UnauthorizedError } from '../errors/index.js';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';

const authLogger = createLoggerNamespace('groupomania:api:authentication');

/**
 * Checks if the request has an authorization header.
 * @param {Express.Request} req - Express request object.
 * @return Returns the value of the header.
 * @throws {UnauthorizedError} Throws if the header is missing
 */
function getAuthorizationHeader(req) {
    authLogger.debug('Checking the authorization header');

    let authorizationHeader = req.get('authorization');

    if (!authorizationHeader) {
        authLogger.debug('No authorization header, throwing an error');
        throw new UnauthorizedError({
            message: 'Missing authorization header',
            title: 'Can\'t find the authentication informations',
            description: 'We are having trouble figuring who you are. Make sure you provided your authentication informations in the "Authorization" header as a bearer token before trying again.'
        });
    }

    return authorizationHeader;
}

/**
 * Checks if the request has the bearer authorization scheme and get the token.
 * @param {string} authorizationHeader - Content of the authorization header.
 * @return Returns the token.
 * @throws {UnauthorizedError} Throws if the scheme is not bearer.
 */
function getTokenFromAuthorization(authorizationHeader) {
    authLogger.debug('Checking the authorization scheme');

    let [scheme, token] = authorizationHeader.split(' ');

    if (scheme.toLowerCase() !== 'bearer') {
        authLogger.debug(`Used ${scheme} authentication scheme instead of Bearer, throwing an error`);
        throw new UnauthorizedError({
            message: `Wrong authentication scheme, using ${scheme} instead of Bearer`,
            title: 'Can\'t get the authentication informations',
            description: 'We are having trouble understanding your authentication informations. Make sure you provided your authentication informations in the "Authorization" header as a bearer token before trying again.',
            details: {
                receivedScheme: scheme,
                expectedSchemes: ['Bearer']
            }
        });
    }

    return token;
}

/**
 * Checks the payload format.
 * @param {string} tokenPayload - Payload of the token.
 * @param {boolean} isRefreshToken - Boolean indicating if the payload corresponds to a refresh token payload (if true) or an access token payload (if false).
 * @throws {UnauthorizedError} Throws if the payload is invalid.
 */
function checkTokenPayload(tokenPayload, isRefreshToken) {
    authLogger.debug('Checking the payload format');

    const missingProperty = !tokenPayload.userId && 'userId' || !tokenPayload.role && 'role' || !tokenPayload.jti && isRefreshToken && 'jti' || '';

    if (missingProperty) {
        authLogger.debug(`The payload doesn't contain the ${missingProperty}, throwing an error`);
        throw new UnauthorizedError({
            message: 'Missing informations in the payload',
            title: 'Authentication informations incomplete',
            description: 'We are missing authentication informations. Please, verify you token and check it\'s origin. If the token doesn\'t come from us, do not use it. Otherwise, you may try again.',
            logDetails: {
                missingProperty: missingProperty
            }
        });
    }
}


/**
 * Function generating the authentication middleware.
 * Allows to either check an access token or a refresh token.
 * @param {boolean} [isRefreshToken=false] - Boolean indicating if the middleware should handle a refresh token (if true) or an access token (if false).
 * @return Returns the configured authentication middleware.
 */
export default function authenticate(isRefreshToken = false) {
    /**
     * Middleware checking if the user is authenticated.
     * If the user is authenticated, then the execution continues. Otherwise, we call the error handling middleware.
     * @param {Express.Request} req - Express request object.
     * @param {Express.Response} res - Express response object.
     * @param next - Next middleware to execute.
     */
    return function (req, res, next) {
        authLogger.verbose('Authentication middleware starting');

        let tokenPayload;

        try {
            const authorizationHeader = getAuthorizationHeader(req);
            authLogger.debug('Authorization header checked');

            const token = getTokenFromAuthorization(authorizationHeader);
            authLogger.debug('Authorization scheme checked, token retrieved');

            const tokenKey = isRefreshToken ? config.get('refreshJwt.key') : config.get('jwt.key');

            tokenPayload = jwt.verify(token, tokenKey, { algorithms: [config.get('jwt.alg')] });
            authLogger.debug('Authentication payload valid');

            checkTokenPayload(tokenPayload, isRefreshToken);
            authLogger.debug('Token payload valid');
        } catch (error) {
            if (error instanceof UnauthorizedError) {
                error.setRequestInformations(req.originalUrl, req.method);
            }
            return next(error);
        }

        res.locals.auth = tokenPayload;

        authLogger.debug('Data saved, end of authentication middleware');
        next();
    };
}