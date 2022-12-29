import generateEmailSchema from './atoms/email.js';
import generatePasswordSchema from './atoms/password.js';
import generateIdSchema from './atoms/id.js';

/**
 * Schema for the update user request.
 * Contains:
 *      Optionnal email in the body
 *      Optionnal strong password in the body
 *      Required userId integer as parameter
 */
const updateUserSchema = {
    email: generateEmailSchema({ required: false }),
    password: generatePasswordSchema({ required: false }),
    userId: generateIdSchema(),
};

export default updateUserSchema;