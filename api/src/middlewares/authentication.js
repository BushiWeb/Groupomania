import { createLoggerNamespace } from '../logger/logger.js';
import UnauthorizedError from '../errors/errors/UnauthorizedError.js';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';

const authLogger = createLoggerNamespace('groupomania:api:authentication');

/**
 * Middleware checking if the user is authenticated.
 * If the user is authenticated, then the execution continues. Otherwise, we call the error handling middleware.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export default function authenticate(req, res, next) {
    authLogger.verbose('Authentication middleware starting');

    const wwwAuthenticateValue = 'Bearer';

    // Check the authorization header
    let authorizationHeader = req.get('authorization');
    if (!authorizationHeader) {
        authLogger.debug('No authorization header, throwing an error');
        return next(new UnauthorizedError(
            {
                message: 'Missing authorization header',
                title: 'Can\'t find the authentication informations',
                description: 'We are having trouble figuring who you are. Make sure you provided your authentication informations in the "Authorization" header as a bearer token before trying again.',
                path: req.originalUrl,
                method: req.method
            },
            null,
            {
                'www-authenticate': wwwAuthenticateValue
            }
        ));
    }
    authLogger.debug('Authorization header checked');

    // Check the authorization scheme
    let [scheme, token] = authorizationHeader.split(' ');
    if (scheme.toLowerCase() !== 'bearer') {
        authLogger.debug(`Used ${scheme} authentication scheme instead of Bearer, throwing an error`);
        return next(new UnauthorizedError(
            {
                message: `Wrong authentication scheme, using ${scheme} instead of Bearer`,
                title: 'Can\'t get the authentication informations',
                description: 'We are having trouble understanding your authentication informations. Make sure you provided your authentication informations in the "Authorization" header as a bearer token before trying again.',
                details: {
                    receivedScheme: scheme,
                    expectedSchemes: ['Bearer']
                },
                path: req.originalUrl,
                method: req.method
            },
            null,
            {
                'www-authenticate': wwwAuthenticateValue
            }
        ));
    }
    authLogger.debug(`Authorization scheme checkes, using ${scheme}`);

    // Verify the token and get the payload
    let tokenPayload;
    try {
        tokenPayload = jwt.verify(token, config.get('jwt.key'), { algorithms: [config.get('jwt.alg')] });
        authLogger.debug('Authentication payload valid');
    } catch (error) {
        authLogger.debug('Token invalid');
        return next(error);
    }

    // Verify and save the payload
    if (!tokenPayload.userId) {
        authLogger.debug('The payload doesn\'t contain the userId, throwing an error');
        return next(new UnauthorizedError(
            {
                message: 'Missing informations in the payload',
                title: 'Authentication informations incomplete',
                description: 'We are missing authentication informations. Please, verify you token and check it\'s origin. If the token doesn\'t come from us, do not use it. Otherwise, you may try again.',
                logDetails: {
                    missingProperty: 'userId'
                },
                path: req.originalUrl,
                method: req.method
            },
            null,
            {
                'www-authenticate': wwwAuthenticateValue
            }
        ));
    }

    if (!tokenPayload.role) {
        authLogger.debug('The payload doesn\'t contain the role, throwing an error');
        return next(new UnauthorizedError(
            {
                message: 'Missing informations in the payload',
                title: 'Authentication informations incomplete',
                description: 'We are missing authentication informations. Please, verify you token and check it\'s origin. If the token doesn\'t come from us, do not use it. Otherwise, you may try again.',
                logDetails: {
                    missingProperty: 'role'
                },
                path: req.originalUrl,
                method: req.method
            },
            null,
            {
                'www-authenticate': wwwAuthenticateValue
            }
        ));
    }

    authLogger.debug('Payload valid, saving the data');
    res.locals.auth = tokenPayload;

    authLogger.debug('End of authentication middleware');
    next();
}