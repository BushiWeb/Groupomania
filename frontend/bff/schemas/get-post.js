import generatePaginationSchema from './atoms/pagination.js';

/**
 * Schema for the get posts request.
 */
const getPosts = {
    page: generatePaginationSchema({ required: true }),
};

export default getPosts;