import generatePaginationSchema from './atoms/pagination.js';

/**
 * Schema for the get users request.
 */
const getUsersSchema = {
    page: generatePaginationSchema({ required: true }),
};

export default getUsersSchema;