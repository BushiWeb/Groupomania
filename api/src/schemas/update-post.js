import generateTextSchema from './atoms/text.js';
import generateIdSchema from './atoms/id.js';

/**
 * Schema for the create post request.
 * Contains a required email.
 * Contains a required, strong password. Password strength can be changed in the configuration.
 */
const updatePostSchema = {
    postId: generateIdSchema(),
    title: generateTextSchema(),
    message: generateTextSchema(),
    deleteImage: {
        optional: {
            options: { nullable: true }
        },

        isBoolean: {
            errorMessage: 'deleteImage must be a boolean. Accepted values are true, yes, false, no, 0 and 1.',
            loose: true,
            bail: true
        },

        toBoolean: true
    }
};

export default updatePostSchema;