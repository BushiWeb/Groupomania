import generateIdSchema from './atoms/id.js';


/**
 * Schema for the delete user request's parameters.
 * Contains a required integer id path parameter.
 */
const deleteUserSchema = {
    userId: generateIdSchema()
};

export default deleteUserSchema;