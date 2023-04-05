import generateEmailSchema from './atoms/email.js';
import generatePasswordSchema from './atoms/password.js';
import generateIdSchema from './atoms/id.js';

/**
 * Schema for the login request's body.
 * Contains a required email.
 * Contains a required password.
 */
const updateUserSchema = {
    email: generateEmailSchema({ checkFormat: false, trim: false, required: false }),
    password: generatePasswordSchema({ required: false }),
    currentPassword: generatePasswordSchema(),
    userId: generateIdSchema(),
};

export default updateUserSchema;