import { createLoggerNamespace } from '../../logger/index.js';
import signupRequest from '../../services/requests/signup.js';
import loginController from './login.js';

const signupControllerLogger = createLoggerNamespace('groupomania:bff:controller:signup');

/**
 * Signup controller.
 * Sends a signup request to the API.
 * Calls the Login Controller to log the user in directly.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export default async function signupController(req, res, next) {
    signupControllerLogger.verbose('Signup controller starting');
    try {
        await signupRequest({ email: req.body.email, password: req.body.password });
        loginController(req, res, next);
    } catch (error) {
        next(error);
    }
}