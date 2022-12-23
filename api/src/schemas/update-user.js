import generateEmailSchema from './atoms/email.js';
import generatePasswordSchema from './atoms/password.js';
import generateIdSchema from './atoms/id.js';

/**
 * Schema for the create user request's body.
 * Contains a required email.
 * Contains a required, strong password. Password strength can be changed in the configuration.
 */
const updateUserSchema = {
    email: generateEmailSchema({ required: false }),
    password: generatePasswordSchema({ required: false }),
    userId: generateIdSchema()
};

export default updateUserSchema;