import generateEmailSchema from './atoms/email.js';
import generatePasswordSchema from './atoms/password.js';

/**
 * Schema for the create user request's body.
 * Contains a required email.
 * Contains a required, strong password. Password strength can be changed in the configuration.
 */
const createUserBodySchema = {
    email: generateEmailSchema(),
    password: generatePasswordSchema(),
};

export default createUserBodySchema;