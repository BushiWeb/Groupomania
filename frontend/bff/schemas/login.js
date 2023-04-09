import generateCheckboxSchema from './atoms/checkbox.js';
import generateEmailSchema from './atoms/email.js';
import generatePasswordSchema from './atoms/password.js';

/**
 * Schema for the login request's body.
 */
const loginBodySchema = {
    email: generateEmailSchema({ required: false, checkFormat: false, trim: false }),
    password: generatePasswordSchema({ required: false }),
    rememberMe: generateCheckboxSchema({ required: false }),
};

export default loginBodySchema;