import generateIdSchema from './atoms/id.js';

/**
 * Schema for the delete post request.
 */
const deletePostSchema = {
    postId: generateIdSchema(),
};

export default deletePostSchema;
