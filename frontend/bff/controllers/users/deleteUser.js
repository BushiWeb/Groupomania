import { createLoggerNamespace } from '../../logger/index.js';
import checkPassword from '../../services/requests/checkPassword.js';
import deleteUserRequest from '../../services/requests/deleteUser.js';
import logoutController from '../authentication/logout.js';

const deleteUserControllerLogger = createLoggerNamespace('groupomania:bff:controller:delete-user');

/**
 * Delete user controller.
 * Check the password.
 * Log the user out if the deleted user is the current user.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export default async function deleteUserController(req, res, next) {
    deleteUserControllerLogger.verbose('Delete user controller starting');
    try {
        // Check the password
        await checkPassword(req.session.user.infos.email, req.body.currentPassword);

        // Send the update request
        await deleteUserRequest(req.params.userId, req.session.user);

        // Log the user out if needed
        if (req.params.userId === req.session.user.infos.userId) {
            return logoutController(req, res, next);
        }

        // Send the response
        res.status(204).end();
    } catch (error) {
        next(error);
    }
}