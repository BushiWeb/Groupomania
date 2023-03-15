import Logger from './main-logger.js';
import winstonOptions from './logger-config.js';

/**
 * Create a logging function that automatically adds a label to each message.
 * @param {string} namespace - Label to add to each message.
 * @returns {Function} Returns the logging function.
 */
export default function createLoggerNamespace(namespace) {
    /**
     * Logging function that automatically adds a label to each message.
     * @param {string} level - Level of the message.
     * @param {*} info - Message to log
     * @param  {...any} splat - String interpolation parameters.
     */
    function namespaceLogger(level, info, ...splat) {
        let labelledInfo = {};

        /*
         * If info is an object and possesses a message, even if falsy, then add the label to it.
         * Otherwise, create an object with the info as a message and the label.
         * If the object is an error, it behaves as if it as no message
         */
        if (typeof info === 'object' && !(info instanceof Error) && info.message !== undefined) {
            // If the info already possesses a label, then the namespace is going to be overriden
            labelledInfo = { label: namespace, ...info };
        } else {
            labelledInfo = { message: info, label: namespace };
        }

        /*
         * Add the string interpolation values to the object.
         * If there already is string interpolation values in the info, ignore the splat parameters.
         */
        if (splat.length > 0 && !labelledInfo.splat) {
            labelledInfo.splat = splat;
        }

        Logger.log(level, labelledInfo);
    }

    // Add level specific methods to the functions to emulate more the winston logger.
    for (const level in winstonOptions.levels) {
        namespaceLogger[level] = function (info, ...splat) {
            this(level, info, ...splat);
        };
    }

    return namespaceLogger;
}