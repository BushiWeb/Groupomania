import { createLoggerNamespace } from '../../logger/index.js';
import getUserRequest from '../../services/requests/getUser.js';

const getUserControllerLogger = createLoggerNamespace('groupomania:bff:controller:get-user');

/**
 * Get user controller.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export default async function getUserController(req, res, next) {
    getUserControllerLogger.verbose('Get user controller starting');
    try {
        const userData = await getUserRequest(req.params.userId, req.session.user);
        res.status(200).json(userData);
    } catch (error) {
        next(error);
    }
}