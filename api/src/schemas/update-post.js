import generateTextSchema from './atoms/text.js';
import generateIdSchema from './atoms/id.js';
import generateBooleanSchema from './atoms/boolean.js';

/**
 * Schema for the create post request.
 * Contains a required email.
 * Contains a required, strong password. Password strength can be changed in the configuration.
 */
const updatePostSchema = {
    postId: generateIdSchema(),
    title: generateTextSchema(),
    message: generateTextSchema(),
    deleteImage: generateBooleanSchema(),
};

export default updatePostSchema;