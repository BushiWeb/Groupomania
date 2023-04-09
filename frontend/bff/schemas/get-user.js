import generateIdSchema from './atoms/id.js';

/**
 * Schema for the get user request.
 */
const getUserSchema = {
    userId: generateIdSchema(),
};

export default getUserSchema;