//import { createJsInterpreter, eq, ne, lt, lte, gt, gte, all, regex, or, nor, not, and, exists, size, mod, where, elemMatch, nin, within } as operators from '@ucast/js';
import { createJsInterpreter } from '@ucast/js';

/**
 * Async equivalent of the Array.prototype.some method.
 * @param {Array} array
 * @param {Function} fct - This function MUST be asynchronous.
 * @returns {Boolean}
 */
async function asyncSome(array, fct) {
    for(const index in array) {
        if (await fct(array[index], index, array)) {
            return true;
        }
    }

    return false;
}



/**
 * Get the property value of an object, given the property as a string representing the path throught the object.
 * @param {Proxy|Object} object - Objet ou proxy.
 * @param path
 * @returns {Promise} Returns a promise resolved with the value of the property or rejected with an error.
 */
export async function get(object, path) {
    const properties = path.split('.');
    let currentValue = object;

    for (const property of properties) {
        currentValue = currentValue[property];
        if (currentValue instanceof Promise) {
            currentValue = await currentValue;
        }
    }

    return currentValue;
}

/**
 * Parses the condition value and return the true value.
 * If the value is a string representing properties of User or Subject, return the represented properties.
 * If the value is a string representing properties of User or Subject preceded by a \, return the string without the \.
 * Otherwise return the value.
 * @param condition
 * @param object
 * @param context
 * @returns {Promise} Returns a promise resolved with the value, or rejected with an error.
 */
export async function getValue(condition, object) {
    // If the string represents the property of either the user or the subject, parse it and return the value of the property
    const objectPath = /^\{\{((?:User|Subject)\..+?)\}\}$/.exec(condition.value);
    if (objectPath !== null && objectPath[0] !== null) {
        return get(object, objectPath[1]);
    }

    // If the first bracket is escaped, to keep the string instead of parsing it, remove the escape character
    const stringValue = /^\\(\{\{(?:User|Subject)\..+?\}\})$/.exec(condition.value);
    if (stringValue !== null && stringValue[0] !== null) {
        return stringValue[1];
    }

    return condition.value;
}



/**
 * Checks if a value is inside an array.
 * This function is a copy of the include utils function from @ucast/js.
 * @param {Array} item
 * @param value
 * @param compare
 * @returns {Boolean} Returns true if value is in array, false otherwise.
 */
export function includes(items, value, compare) {
    for (let i = 0, length = items.length; i < length; i++) {
        if (compare(items[i], value) === 0) {
            return true;
        }
    }

    return false;
}



/**
 * This function tests equality.
 * To values are equal if they have the same value or if the object property is an array containing the condition value.
 * @param {{field: string, value: *}} condition
 * @param {Object} object
 * @param {{compare: Function}} context
 * @returns {Boolean} Returns true if the values are considered equal, false otherwise.
 */
export async function eq(condition, object, { compare }) {
    const conditionValue = await getValue(condition, object);
    const objectValue = await get(object, condition.field);

    if(Array.isArray(objectValue) && !Array.isArray(conditionValue)) {
        return includes(objectValue, conditionValue, compare);
    }

    return compare(objectValue, conditionValue) === 0;
}



/**
 * This function returns true if one of the conditions it contains returns true.
 * @param {{field: string, value: Array}} condition
 * @param {Object} object
 * @param {{interpret: Function}} context
 * @returns {Boolean}
 */
export async function or(condition, object, { interpret }) {
    return asyncSome(condition.value, async (condition) => interpret(condition, object));
}


export default createJsInterpreter({ eq, or });