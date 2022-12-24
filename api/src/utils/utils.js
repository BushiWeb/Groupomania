import parser from 'yargs-parser';

/**
 * Returns the current environment.
 * The environment is either in the env command line argument, in the NODE_ENV environment variable or development by default.
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
        if(currentValue === undefined) {
            return currentValue;
        }
    }

    return currentValue;
}