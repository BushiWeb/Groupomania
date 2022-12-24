import config from '../config/config.js';
import { createLoggerNamespace } from '../logger/index.js';

const imagesServicesLogger = createLoggerNamespace('groupomania:api:services:images');

/**
 * Creates an url from a file name and other informations.
 * @param {string} filename
 * @param {string} host
 * @param {string} protocol
 * @returns {string} Returns the file URL.
 */
export function createImageUrl(filename, host, protocol) {
    imagesServicesLogger.verbose('Create image url service starting');

    return `${protocol}://${host}/${config.get('payload.files.saveFolder')}/${filename}`;
}