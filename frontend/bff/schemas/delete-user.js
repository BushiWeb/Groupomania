import generatePasswordSchema from './atoms/password.js';
import generateIdSchema from './atoms/id.js';

/**
 * Schema for the delete user.
 * Contains an email.
 * Contains a password.
 * Contains the current password.
 */
const deleteUserSchema = {
    currentPassword: generatePasswordSchema(),
    userId: generateIdSchema(),
};

export default deleteUserSchema;