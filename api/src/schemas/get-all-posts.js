import generateIdSchema from './atoms/id.js';
import generateMoreInfoSchema from './atoms/moreInfo.js';
import generatePaginationSchema from './atoms/pagination.js';


/**
 * Schema for the get all users request's parameters.
 * Contains:
 *      Optionnal roleInfo as a boolean
 *      Optionnal role, either an integer or a string
 *      Optionnal positive integer limit
 *      Optionnal positive interger page
 */
const getAllPostsSchema = {
    userInfo: generateMoreInfoSchema(),
    likeInfo: generateMoreInfoSchema(),
    userId: generateIdSchema({ required: false }, ['query']),
    limit: generatePaginationSchema(),
    page: generatePaginationSchema(),
};

export default getAllPostsSchema;