import { createLoggerNamespace } from '../logger/index.js';
import db from '../models/index.js';

const rolesServicesLogger = createLoggerNamespace('groupomania:api:services:roles');

/**
 * Fetch all roles, ordered by id.
 * @returns {Role} Returns the user.
 */
export async function getAllRoles() {
    rolesServicesLogger.verbose('Get all roles service starting');

    let searchOptions = {
        order: [['roleId', 'ASC']]
    };

    const roles = await db.models.Role.findAll(searchOptions);

    rolesServicesLogger.debug('Roles fetched');
    return roles;
}