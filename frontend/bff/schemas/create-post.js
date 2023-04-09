import generateTextSchema from './atoms/text.js';

/**
 * Schema for the create post request.
 */
const createPostSchema = {
    title: generateTextSchema({ sanitize: false }),
    message: generateTextSchema({ sanitize: false }),
    post: generateTextSchema({ sanitize: false }),
};

export default createPostSchema;