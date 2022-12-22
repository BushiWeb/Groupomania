import { createLoggerNamespace } from '../logger/index';
import accessControlRules from '../authorization/index.js';
import interpret from '../authorization/condition-operators.js';
import ForbiddenError from '../errors/ForbiddenError.js';

const accessControlLogger = createLoggerNamespace('groupomania:api:authorization');

/**
 * Get the property value of an object, given the property as a string representing the path throught the object.
 * @param {Object} object - Object to look into.
 * @param {string} [path=''] - Dot notation path to the property.
 * @returns Returns the value of the property or undefined if the property doesn't exist.
 */
export function getValueFromPath(object, path = '') {
    if (!path) {
        return object;
    }

    const properties = path.split('.');
    let currentValue = object;

    for (const property of properties) {
        currentValue = currentValue[property];
    }

    return currentValue;
}



/**
 * Parses the dataOrigin object to find the base data.
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Object} [dataOrigin={}] - How to find the base data.
 * @param {string} [dataOrigin.origin]
 * @param {string} [dataOrigin.field]
 * @returns {Object} Returns the data object. If no data are found, or if the data object is empty, return an empty object.
 */
function getDataFromOrigin(req, res, { origin, field } = {}) {
    if (!origin) {
        return {};
    }

    if (origin === 'res') {
        return getValueFromPath(res.locals, field);
    }

    if (req[origin]) {
        return getValueFromPath(req[origin], field);
    }

    return {};
}



/**
 * Finds the base data for the user and the subject, calls the PIP and returns the proxies.
 * @param {Express.Request} req
 * @param {Express.Response} res
 *
 * @param {Object} [dataOrigin = {User: {}, Subject: {}}] - How to find the base data to create the proxies.
 *
 * @param {Object} [dataOrigin.User = {}] - How to find the base data for the user.
 * @param {string} [dataOrigin.User.origin]
 * @param {string} [dataOrigin.User.field]
 *
 * @param {Object} [dataOrigin.Subject = {}] - How to find the base data for the subject.
 * @param {string} [dataOrigin.Subject.origin]
 * @param {string} [dataOrigin.Subject.field]
 *
 * @returns {{User: Proxy, Subject: Proxy}} Returns the object containing the User and Subject proxies, created with the found base data.
 */
function getDataProxies(req, res, {User = {}, Subject = {}} = {User: {}, Subject: {}}) {
    const userData = getDataFromOrigin(req, res, User);
    const subjectData = getDataFromOrigin(req,res, Subject);

    return {
        User: accessControlRules.PIP('User', userData),
        Subject: accessControlRules.PIP('Subject', subjectData)
    };
}



/**
 * Function generating the authorization middleware.
 * Gets all the conditions related to the request and returns the PDP middleware.
 * @param {string} action - Action the user wishes to execute.
 * @param {string} subject - Target of the action.
 * @param {{User: {origin: string, field: string}, Subject: {origin: string, field: string}}} [dataOrigin] - How to find the base data for the User and the Subject. The origin can be 'res' (to look into res.locals), 'body' (to look into the body), 'params' (to look into the path parameters) and 'query' (to look into the query parameters). The field is the path to the data. It supports dot notation. For example, {origin: 'res', field: 'auth.user'} will get the data from res.locals.auth.user.
 * @param {string|string[]} [fields] - Fields of the subject targeted by the action.
 * @return Returns the configured authentication middleware.
 */
export default function authorize(action, subject, dataOrigin, fields) {
    accessControlLogger.verbose('PDP (authorization middleware) creation');

    const conditions = accessControlRules.PEP(subject, action, fields);

    /**
     * Middleware checking if the user has the right to execute the request.
     * Get the data for the user and the subject and verifies the conditions. If the conditions are met, calls the next middleware, otherwise calls the next error middlware with a ForbiddenError.
     * @param {Express.Request} req - Express request object.
     * @param {Express.Response} res - Express response object.
     * @param next - Next middleware to execute.
     */
    return async function (req, res, next) {
        accessControlLogger.verbose('PDP middleware starting');

        const forbiddenError = new ForbiddenError({
            message: 'The user doesn\'t have the right to perform the action.',
            title: 'You don\'t have the right to perform this action.',
            description: 'Sorry, but we can\'t let you execute this action. You don\'t have the rights to do so. If you are not authenticated, you may try again after loging in but this may not be the cause of the issue.',
            details: {
                action,
                subject,
                fields
            }
        });

        // Handling edge cases: no rules or no conditions
        if (conditions === true) {
            accessControlLogger.debug('No conditions to fulfill, the user has the right to perform the action');
            return next();
        }
        if (conditions === false) {
            accessControlLogger.debug('No rules to check, by default, no authorization is given');
            forbiddenError.message = 'No rules were defined for this request, thus we won\'t grant any permission.';
            return next(forbiddenError);
        }

        // Getting the data
        const data = getDataProxies(req, res, dataOrigin);
        accessControlLogger.debug('Data access object created');

        // Testing the conditions
        try {
            if (await interpret(conditions, data)) {
                accessControlLogger.debug('The user has the right to perform the action');
                return next();
            }

            accessControlLogger.debug('The user doesn\'t have the right to perform the action');
            return next(forbiddenError);

        } catch (error) {
            accessControlLogger.debug('Error while interpreting the conditions');
            return next(error);
        }
    };
}