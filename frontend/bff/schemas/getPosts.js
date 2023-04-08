import generatePaginationSchema from './atoms/pagination.js';

/**
 * Schema for the get users request.
 * Contains the page in the query parameters.
 */
const getPosts = {
    page: generatePaginationSchema({ required: true }),
};

export default getPosts;