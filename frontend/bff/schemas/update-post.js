import generateBooleanSchema from './atoms/boolean.js';
import generateIdSchema from './atoms/id.js';
import generateTextSchema from './atoms/text.js';

/**
 * Schema for the create post request.
 * Contains a required email.
 * Contains a required, strong password. Password strength can be changed in the configuration.
 */
const updatePostSchema = {
    title: generateTextSchema({ sanitize: false }),
    message: generateTextSchema({ sanitize: false }),
    post: generateTextSchema({ sanitize: false }),
    deleteImage: generateBooleanSchema(),
    postId: generateIdSchema(),
};

export default updatePostSchema;