import { createLoggerNamespace } from '../logger/index.js';
import { MongoQueryParser, allParsingInstructions } from '@ucast/mongo';

const ruleParserLogger = createLoggerNamespace('groupomania:api:authorization');

/**
 * Validates a property.
 * @param {Object} obj - Object to check.
 * @param {string} propName - Name of the property to search.
 * @param {Object} [options] - Options for validation.
 * @param {boolean} [options.required=false] - Weither the property is required.
 * @param {string} [options.type="string"] - Type of the property to check.
 * @param {boolean} [options.multiple=false] - Weither the property can contain an array of values with the right type.
 * @returns {boolean} Returns true if the property is in the object.
 * @throws Throws an error if the property is not valid.
 */
function validateProperty(
    obj,
    propName,
    { required = false, type = 'string', multiple = false } = {}
) {
    if (required && !obj[propName]) {
        throw `The ${propName} property is required`;
    }

    if (obj[propName] && !multiple && typeof obj[propName] !== type) {
        throw `The ${propName} property must be a ${type}`;
    }

    if (
        obj[propName] &&
        multiple &&
        (
            !Array.isArray(obj[propName]) &&
            typeof obj[propName] !== type ||
            Array.isArray(obj[propName]) &&
            obj[propName].some(value => typeof value !== type)
        )
    ) {
        throw `The ${propName} property must either be a ${type} or an array of ${type}`;
    }

    return true;
}

/**
 * Parses the given authorization's conditions to make them faster to execute.
 * @param {Array} rules - Array containing all access control rules.
 * @returns {Array} Returns an array containing the same rules but with parsed conditions.
 */
export default function parseAccessControlRules(rules) {
    ruleParserLogger.debug('Rule parser starting');
    const parsedRules = [];
    const parser = new MongoQueryParser(allParsingInstructions);

    try {

        for (const rule of rules) {
            const parsedRule = {};

            validateProperty(rule, 'actions', { required: true, multiple: true });
            validateProperty(rule, 'subject', { required: true });
            validateProperty(rule, 'fields', { multiple: true });

            parsedRule.actions = Array.isArray(rule.actions) ? rule.actions : [rule.actions];
            parsedRule.subject = rule.subject;
            parsedRule.fields = [];
            if (rule.fields) {
                parsedRule.fields = Array.isArray(rule.fields) ? rule.fields : [rule.fields];
            }

            // Parsing the conditions
            if (rule.conditions) {
                parsedRule.conditions = parser.parse(rule.conditions);
            }

            parsedRules.push(parsedRule);
        }
    } catch (error) {
        ruleParserLogger.fatal(error);
        process.exit(1);
    }

    ruleParserLogger.debug('Rules parsed');
    return parsedRules;
}