import generateMoreInfoSchema from './atoms/moreInfo.js';
import generatePaginationSchema from './atoms/pagination.js';
import generateRoleSchema from './atoms/role.js';


/**
 * Schema for the get user request's parameters.
 * Contains a required integer id path parameter.
 * Contains an optional boolean roleInfo query parameter.
 */
const getAllUsersSchema = {
    roleInfo: generateMoreInfoSchema(),
    role: generateRoleSchema(),
    limit: generatePaginationSchema(),
    page: generatePaginationSchema(),
};

export default getAllUsersSchema;