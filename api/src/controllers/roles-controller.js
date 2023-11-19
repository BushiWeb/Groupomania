import { createLoggerNamespace } from '../logger/index.js';
import { getAllRoles } from '../services/roles.js';

const rolesControllerLogger = createLoggerNamespace('groupomania:api:controllers:role');

/**
 * All roles fetching.
 * Calls the right service.
 * Sends a message to the client with status 200 containing the roles informations, or calls the error handler
 *  middleware if an error occurs.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function getAllRolesController(req, res, next) {
    rolesControllerLogger.verbose('Get all roles middleware starting');
    try {
        const roles = await getAllRoles();

        res.status(200).json(roles);
        rolesControllerLogger.verbose('Response sent');
    } catch (error) {
        return next(error);
    }
}