import generateTextSchema from './atoms/text.js';

/**
 * Schema for the create post request.
 * Contains a required email.
 * Contains a required, strong password. Password strength can be changed in the configuration.
 */
const createPostSchema = {
    title: generateTextSchema({ sanitize: false }),
    message: generateTextSchema({ sanitize: false }),
    post: generateTextSchema({ sanitize: false }),
};

export default createPostSchema;