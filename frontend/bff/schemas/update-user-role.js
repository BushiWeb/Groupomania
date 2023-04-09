import generateIdSchema from './atoms/id.js';
import generatePasswordSchema from './atoms/password.js';
import generateRoleSchema from './atoms/role.js';

/**
 * Schema for the update user role request.
 * Contains:
 *      Required integer role id in the body
 *      Required integer user id in the parameters
 */
const updateUserRoleSchema = {
    roleId: generateRoleSchema({ required: true, allowString: false }, ['body']),
    userId: generateIdSchema(),
    currentPassword: generatePasswordSchema(),
};

export default updateUserRoleSchema;