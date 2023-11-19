import generateIdSchema from './atoms/id.js';
import generateMoreInfoSchema from './atoms/moreInfo.js';


/**
 * Schema for the get all users request's parameters.
 * Contains:
 *      Optionnal roleInfo as a boolean
 *      Optionnal role, either an integer or a string
 *      Optionnal positive integer limit
 *      Optionnal positive interger page
 */
const getPostSchema = {
    userInfo: generateMoreInfoSchema(),
    likeInfo: generateMoreInfoSchema(),
    postId: generateIdSchema(),
};

export default getPostSchema;