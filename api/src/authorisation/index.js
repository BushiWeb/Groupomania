import parseAccessControlRules from './authorisation-parser.js';
import { createLoggerNamespace } from '../logger/index.js';
import { CompoundCondition } from '@ucast/core';
import rawRules from './authorizations.js';

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
    }
};

export default accessControlRules;
export { accessControlRules, parseAccessControlRules, rawRules };