import generateIdSchema from './atoms/id.js';

/**
 * Schema for the login request's body.
 * Contains a required email.
 * Contains a required password.
 */
const getUserSchema = {
    userId: generateIdSchema(),
};

export default getUserSchema;