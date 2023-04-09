import generateIdSchema from './atoms/id.js';

/**
 * Schema for the get user.
 * Contains the user id in the path.
 */
const getUserSchema = {
    userId: generateIdSchema(),
};

export default getUserSchema;