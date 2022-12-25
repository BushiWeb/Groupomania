import config from '../config/config.js';
import { createLoggerNamespace } from '../logger/index.js';
import { unlink } from 'node:fs';
import { join } from 'node:path';

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



/**
 * Deletes an image.
 * @param {string|string[]} imageUrls
 */
export function deleteImage(imageUrls) {
    if (!Array.isArray(imageUrls)) {
        imageUrls = [imageUrls];
    }

    for (const url of imageUrls) {
        imagesServicesLogger.verbose('Delete image service starting');
        const imageName = url.split('/images/')[1];
        const imagePath = join('./images', imageName);
        unlink(imagePath, (error) => {
            if (error) {
                imagesServicesLogger.warn(error);
            } else {
                imagesServicesLogger.debug(`The file ${imageName} has been deleted`);
            }
        });
    }
}