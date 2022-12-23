import generateIdSchema from './atoms/id.js';
import generateRoleSchema from './atoms/role.js';

/**
 * Schema for the create user request's body.
 * Contains a required email.
 * Contains a required, strong password. Password strength can be changed in the configuration.
 */
const updateUserRoleSchema = {
    roleId: generateRoleSchema({ required: true, allowString: false }, ['body']),
    userId: generateIdSchema()
};

export default updateUserRoleSchema;