import { webcrypto } from 'node:crypto';
import { createLoggerNamespace } from '../logger/index.js';

const crsfControllerLogger = createLoggerNamespace(
    'groupomania:bff:services:crsf',
);

/**
 * Generates a secured CRSF token using cryptographic random functions.
 * @returns {String} Returns the token.
 */
export function generateCRSFToken() {
    crsfControllerLogger.debug('CRSF token generation');
    return webcrypto.randomUUID();
}
