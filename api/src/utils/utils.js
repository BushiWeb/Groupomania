import parser from 'yargs-parser';

/**
 * Returns the current environment.
 * The environment is either in the env command line argument, in the NODE_ENV environment variable or development by
 *  default.
 * @returns Returns the name of the current environment in lowercase.
 */
export function getEnvironment() {
    return (
        parser(process.argv.slice(2)).env?.toLowerCase() ||
        process.env.NODE_ENV?.toLowerCase() ||
        'development'
    );
}



/**
 * Set the value of the targeted property of an object, given the property as a string representing the path throught
 *  the object.
 * @param {Object} object - Object to look into.
 * @param value - Value of the targeted property
 * @param {string} [path] - Dot notation path to the property. If absent, the object is going to be overriden.
 * @returns Returns the updated data.
 */
export function setValueFromPath(object, value, path) {
    if (!path) {
        object = value;
        return object;
    }

    const properties = path.split('.');
    let currentProperty = object;

    for (let i = 0; i < properties.length; i++) {
        if (i === properties.length - 1) {
            currentProperty[properties[i]] = value;
            break;
        }

        if (currentProperty[properties[i]] === undefined) {
            currentProperty[properties[i]] = {};
        }
        currentProperty = currentProperty[properties[i]];
    }

    return object;
}



/**
 * Delete the targeted property of an object, given the property as a string representing the path throught the object.
 * @param {Object} object - Object to look into.
 * @param {string} [path] - Dot notation path to the property.
 * @returns Returns the updated data.
 */
export function deleteValueFromPath(object, path) {
    if (!path) {
        return object;
    }

    const properties = path.split('.');
    let currentProperty = object;

    for (let i = 0; i < properties.length; i++) {
        if (i === properties.length - 1) {
            delete currentProperty[properties[i]];
            break;
        }

        currentProperty = currentProperty[properties[i]];
        if (currentProperty === undefined) {
            return object;
        }
    }

    return object;
}



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
        if (currentValue === undefined) {
            return currentValue;
        }
    }

    return currentValue;
}