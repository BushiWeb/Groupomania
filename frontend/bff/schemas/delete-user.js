import generatePasswordSchema from './atoms/password.js';
import generateIdSchema from './atoms/id.js';

/**
 * Schema for the delete user request.
 */
const deleteUserSchema = {
    currentPassword: generatePasswordSchema(),
    userId: generateIdSchema(),
};

export default deleteUserSchema;