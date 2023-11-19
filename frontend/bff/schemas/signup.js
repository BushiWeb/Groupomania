import generateCheckboxSchema from './atoms/checkbox.js';
import generateEmailSchema from './atoms/email.js';
import generatePasswordSchema from './atoms/password.js';

/**
 * Schema for the sign up request's body.
 */
const signupBodySchema = {
    email: generateEmailSchema({ checkFormat: false, trim: false }),
    password: generatePasswordSchema(),
    rememberMe: generateCheckboxSchema({ required: false }),
};

export default signupBodySchema;
