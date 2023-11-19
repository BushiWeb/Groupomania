import generateIdSchema from './atoms/id.js';
import generateMoreInfoSchema from './atoms/moreInfo.js';


/**
 * Schema for the get user request's parameters.
 * Contains a required integer id path parameter.
 * Contains an optional boolean roleInfo query parameter.
 */
const getUserSchema = {
    userId: generateIdSchema(),
    roleInfo: generateMoreInfoSchema(),
};

export default getUserSchema;