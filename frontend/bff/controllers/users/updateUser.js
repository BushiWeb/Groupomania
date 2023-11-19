import { createLoggerNamespace } from '../../logger/index.js';
import checkPassword from '../../services/requests/checkPassword.js';
import updateUserRequest from '../../services/requests/updateUser.js';

const updateUserControllerLogger = createLoggerNamespace(
    'groupomania:bff:controller:update-user',
);

/**
 * Update user controller.
 * Check the password.
 * Update the user informations in the session if needed.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export default async function updateUserController(req, res, next) {
    updateUserControllerLogger.verbose('Update user controller starting');
    try {
        // Check the password
        await checkPassword(
            req.session.user.infos.email,
            req.body.currentPassword,
        );

        // Send the update request
        const newUserData = {
            ...(req.body.password && { password: req.body.password }),
            ...(req.body.email && { email: req.body.email }),
        };
        await updateUserRequest(
            newUserData,
            req.params.userId,
            req.session.user,
        );

        // Save the new user email if needed
        if (req.body.email) {
            req.session.user.infos.email = req.body.email;
        }

        // Send the response
        res.status(200).json(req.session.user.infos);
    } catch (error) {
        next(error);
    }
}
