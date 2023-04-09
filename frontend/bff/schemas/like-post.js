import generateIdSchema from './atoms/id.js';
import generateBooleanSchema from './atoms/boolean.js';

/**
 * Schema for the create post request.
 * Contains a required email.
 * Contains a required, strong password. Password strength can be changed in the configuration.
 */
const likePostSchema = {
    postId: generateIdSchema(),
    like: generateBooleanSchema({ required: true }),
};

export default likePostSchema;