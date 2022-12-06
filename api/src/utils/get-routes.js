/**
 * Get the regexp for all the routes.
 * Handles routes defined on routers and the application, but not on mounted applications.
 * @param {Express.Application | Router} layer - An object containing routes, like an express app or a router.
 * @param {RegExp} [prefix] - Prefix to add in front of every returned regexp.
 * @returns {Array} Returns all the route regexp in the layer in an Array.
 */
export default function getRoutesRegexp(layer, prefix) {
    // If the layer is a router or an Express application
    if (layer._router?.stack || layer.name === 'router' && layer.handle?.stack) {
        const stack = layer._router?.stack || layer.handle.stack;
        let layerRegexp = [];
        let newPrefix = concatPathRegexp(prefix, layer.regexp);

        for (const route of stack) {
            const routeRegexp = getRoutesRegexp(route, newPrefix);
            layerRegexp = concatUniqueRegexpArrays(layerRegexp, routeRegexp);
        }

        return layerRegexp;
    }

    // If the layer is a middleware defined with an HTTP verb or all
    if (layer.route) {
        let returnedRegexp = layer.regexp;
        if (prefix) {
            returnedRegexp = concatPathRegexp(prefix, returnedRegexp);
        }
        return [returnedRegexp];
    }

    return [];
}


/**
 * Combines two path regular expressions to make a larger path regular expression.
 * The regexp are trimed of the parts that either represents the start or end of the path, and then concatenated.
 * @param {RegExp} start - Regexp representing the start of the path.
 * @param {RegExp} end - Regex representing the end of the path.
 * @returns {RegExp} Returns the new path regexp.
 */
function concatPathRegexp(start, end) {
    if (!start && !end) {
        return undefined;
    }

    if (start && !end) {
        return start;
    }

    if (!start && end) {
        return end;
    }

    // For the start, remove the first '/', and the ending '/$/i', '/|$)/i' and '/?(?='
    const forbiddenEndingString = ['/$/i', '/|$)/i', '/?(?='];
    let startStr = start
        .toString()
        .split('\\')
        .reduceRight((accumulator, currentValue, currentIndex) => {
            // If we are at the end and we find forbidden strings
            if (accumulator === '' && forbiddenEndingString.includes(currentValue)) {
                return accumulator;
            }

            if (currentIndex === 0) {
                return currentValue.slice(1) + accumulator;
            }

            return currentValue + accumulator;
        }, '');


    // For the end, remove the last '/i', and the starting '/^'
    const forbiddenStartingString = ['/^'];
    let endStr = end
        .toString()
        .split('\\')
        .reduce((accumulator, currentValue, currentIndex, array) => {
            // If we are at the start and we find forbidden strings
            if (accumulator === '' && forbiddenStartingString.includes(currentValue)) {
                return accumulator;
            }

            if (currentIndex === array.length - 1) {
                return accumulator + currentValue.slice(0, -2);
            }

            return accumulator + currentValue;
        }, '');


    return RegExp(startStr + endStr, 'i');
}


/**
 * Fuse two arrays containing regexp, so that each regexp is unique.
 * @param {RegExp[]} array1 - First array.
 * @param {RegExp[]} array2 - Second array.
 * @returns {RegExp[]} Return the combined arrays.
 */
function concatUniqueRegexpArrays(array1, array2) {
    // Remove the regexp of array2 that are already in array 1
    const filteredArray2 = array2.filter(
        (array2Value) => !(array1.some(
            (array1Value) => array2Value.toString() === array1Value.toString()
        ))
    );

    return array1.concat(filteredArray2);
}