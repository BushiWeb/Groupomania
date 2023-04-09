import { createLoggerNamespace } from '../../logger/index.js';
import checkPassword from '../../services/requests/checkPassword.js';
import updateUserRoleRequest from '../../services/requests/updateUserRole.js';

const updateUserRoleControllerLogger = createLoggerNamespace('groupomania:bff:controller:update-user-role');

/**
 * Update user role controller.
 * Check the password.
 * Update the user informations in the session if needed.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export default async function updateUserRoleController(req, res, next) {
    updateUserRoleControllerLogger.verbose('Update user role controller starting');
    try {
        // Check the password
        await checkPassword(req.session.user.infos.email, req.body.currentPassword);

        // Send the update request
        await updateUserRoleRequest(req.body.roleId, req.params.userId, req.session.user);

        // Save the new user role if needed
        if (req.params.userId === req.session.user.infos.userId) {
            req.session.user.infos.role.roleId = req.body.roleId;
        }

        // Send the response
        res.status(204).end();
    } catch (error) {
        next(error);
    }
}