//import { createJsInterpreter, eq, ne, lt, lte, gt, gte, all, regex, or, nor, not, and, exists, size, mod, where, elemMatch, nin, within } as operators from '@ucast/js';
import { createJsInterpreter } from '@ucast/js';

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



export async function eq(condition, object, context) {

}


export default createJsInterpreter({ eq });