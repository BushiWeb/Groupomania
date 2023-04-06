import { createLoggerNamespace } from '../../logger/index.js';
import getUsersRequest from '../../services/requests/getUsers.js';

const getUsersControllerLogger = createLoggerNamespace('groupomania:bff:controller:get-users');

/**
 * Get user controller.
 * Send the update request to the API.
 * Send the user information, as well as the CRSF token in a custom header (done in authorization middleware).
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export default async function getUsersController(req, res, next) {
    getUsersControllerLogger.verbose('Get users controller starting');
    try {
        const usersData = await getUsersRequest(req.query.page, req.session.user);
        res.status(200).json(usersData);
    } catch (error) {
        next(error);
    }
}