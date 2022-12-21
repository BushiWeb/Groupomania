import parseAccessControlRules from './authorisation-parser.js';
import { createLoggerNamespace } from '../logger/index.js';
import { CompoundCondition } from '@ucast/core';
import rawRules from './authorizations.js';
import db from '../models/index.js';
import NotFoundError from '../errors/NotFoundError.js';
import InternalServerError from '../errors/InternalServerError.js';

const accessControlLogger = createLoggerNamespace('groupomania:api:authorization');

/**
 * Object containing all access control rules and the PEP (Policy Execution Point), that serves the rules that applies to a request..
 * @namespace
 * @property {Array|undefined} parsedRules - Array containing all parsed access control rules.
 */
const accessControlRules = {
    parsedRules: undefined,

    /**
     * Returns the condition to fulfill in order to validate the request.
     * The condition is a combinaison off all possible conditions, united with an or operation.
     * @param {string} subject - The subject the client is targeting.
     * @param {string} action - The action the client wishes to execute with the subject.
     * @param {string|string[]|undefined} [fields] - the specific subject's fields the client is targeting.
     * @returns {Condition|boolean} Returns an AST condition regrouping all conditions to meet, or true if no conditions are found, false if no rules are matching.
     */
    PEP: function (subject, action, fields) {
        accessControlLogger.debug(`Starting PEP: searching conditions for subject ${subject}, action ${action} ${fields ? `and fields ${fields}` : ''}`);
        const conditions = [];
        let ruleFound = false;

        for (const rule of this.parsedRules) {
            if (
                rule.subject !== subject ||
                !rule.actions.includes(action) ||
                rule.fields.length !== 0 &&
                (
                    !Array.isArray(fields) && !rule.fields.includes(fields) ||
                    fields.length === 0 ||
                    Array.isArray(fields) && fields.some(value => !rule.fields.includes(value))
                )
            ) continue;

            ruleFound = true;

            if (rule.conditions) {
                conditions.push(rule.conditions);
            }

        }

        return conditions.length === 0 ? ruleFound : new CompoundCondition('or', conditions);
    },



    /**
     * Creates a Proxy to access all entity informations even if it means retrieving them from the database.
     * @param {string} modelName - Name of the model to use to interact with the database.
     * @param {Object} base - Base object, contains informations about the entity. These informations will be used to fetch the entry from the database if needed. Thus, they need to have only properties defined in the model, and to avoid unpredicable results, they need to be able to identify a single entry. Providing the primary key is a safe way to go about it.
     * @returns {Proxy} Returns a proxy of the base object, intercepting all property access to make sure they are present. If event after fetching the entity informations the property can't be found, the proxy throws a InternalServerError. If no entity matches the base, the proxy throws a NotFoundError.
     */
    PIP: function(modelName, base) {
        const Model = db.models[modelName];

        const handler = {
            get: async function(target, prop) {
                if (target[prop]) {
                    return target[prop];
                }

                // The property is not in the base object
                accessControlLogger.debug(`The ${prop} property is not in the base object. Asking for the entry in the database.`);

                // Checking if the property is defined in the model
                const attributes = Object.keys(Model.getAttributes());
                if (!attributes.includes(prop)) {
                    accessControlLogger.debug(`The propery ${prop} is not defined in the model ${modelName}, throwing an error`);
                    throw new InternalServerError({
                        message: `The model ${modelName} doesn't have a ${prop} property`
                    });
                }

                const targetEntry = await Model.findOne({
                    where: base
                });

                // Throw if the entity doesn't exist
                if (targetEntry === null) {
                    accessControlLogger.debug('The entity can\'t be found in the database, throwing an error');
                    throw new NotFoundError({
                        message: 'The database entry corresponding to the proxy base object can\'t be found.',
                        title: 'The ressource can\'t be found.',
                        description: 'We can\'t find the requested ressource. Please, make sure the informations you gave us are correct and try again. If the problem persist, you may contact us.',
                        logDetails: {
                            base,
                            prop
                        }
                    });
                }

                Object.assign(base, targetEntry);
                return base[prop];
            }
        };

        return new Proxy(base, handler);
    }
};

export default accessControlRules;
export { accessControlRules, parseAccessControlRules, rawRules };