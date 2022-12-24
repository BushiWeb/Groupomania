import generateMoreInfoSchema from './atoms/moreInfo.js';
import generatePaginationSchema from './atoms/pagination.js';
import generateRoleSchema from './atoms/role.js';


/**
 * Schema for the get all users request's parameters.
 * Contains:
 *      Optionnal roleInfo as a boolean
 *      Optionnal role, either an integer or a string
 *      Optionnal positive integer limit
 *      Optionnal positive interger page
 */
const getAllUsersSchema = {
    roleInfo: generateMoreInfoSchema(),
    role: generateRoleSchema(),
    limit: generatePaginationSchema(),
    page: generatePaginationSchema(),
};

export default getAllUsersSchema;