import generateIdSchema from './atoms/id.js';
import generatePaginationSchema from './atoms/pagination.js';

/**
 * Schema for the get posts request.
 */
const getPosts = {
    page: generatePaginationSchema({ required: true }),
    userId: generateIdSchema({ required: false }, ['query']),
};

export default getPosts;