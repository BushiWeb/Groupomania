import generateEmailSchema from './atoms/email.js';
import generatePasswordSchema from './atoms/password.js';

/**
 * Schema for the login request's body.
 * Contains a required email.
 * Contains a required password.
 */
const loginBodySchema = {
    email: generateEmailSchema({ required: false, checkFormat: false, trim: false }),
    password: generatePasswordSchema({ required: false }),
};

export default loginBodySchema;