import generateIdSchema from './atoms/id.js';
import generateBooleanSchema from './atoms/boolean.js';

/**
 * Schema for the like post request.
 */
const likePostSchema = {
    postId: generateIdSchema(),
    like: generateBooleanSchema({ required: true }),
};

export default likePostSchema;
