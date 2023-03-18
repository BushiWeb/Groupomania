import { webcrypto } from 'node:crypto';

/**
 * Generates a secured CRSF token using cryptographic random functions.
 * @returns {String} Returns the token.
 */
export function generateCRSFToken() {
    return webcrypto.randomUUID();
}