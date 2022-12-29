import generateIdSchema from './atoms/id.js';


/**
 * Schema for the delete user request's parameters.
 * Contains a required integer id path parameter.
 */
const deletePostSchema = {
    postId: generateIdSchema(),
};

export default deletePostSchema;