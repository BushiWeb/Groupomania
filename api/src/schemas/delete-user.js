import generateIdSchema from './atoms/id.js';


/**
 * Schema for the get user request's parameters.
 * Contains a required integer id path parameter.
 * Contains an optional boolean roleInfo query parameter.
 */
const deleteUserSchema = {
    userId: generateIdSchema()
};

export default deleteUserSchema;