import multer from 'multer';
import { createLoggerNamespace } from '../logger/index.js';
import config from '../config/config.js';
import { webcrypto } from 'node:crypto';

const multerLogger = createLoggerNamespace('groupomania:api:multer');

/**
 * Creates a quasi unique and safe file name, based on an original filename:
 *      - Trims the original filename
 *      - Replaces the remaining spaces with underscores
 *      - Only keep safe characters (alphanumerical, periods, underscores and dashes)
 *      - Remove the extension
 *      - Append the timestamp
 *      - Append a random number
 *      - Append the extension
 * @param {string} filename - Original file name.
 * @param {string} mimeType - File's MIME type
 * @returns {string} Returns the new file name.
 */
function generateFileName(filename, mimeType) {
    let name = filename.trim();
    let newFilename = '';
    let filenameSection = '';
    for (const letter of name) {
        // Ignore non-allowed characters
        if (/[^A-Za-z0-9 ._-]/.test(letter)) {
            continue;
        }

        // Starting with a '.', it may be the extensions. Append the previous maybe extension to the file name and save the '.' to be the maybe extension
        if (letter === '.') {
            newFilename += filenameSection;
            filenameSection = letter;
            continue;
        }

        // Replace the space by an underscore
        let newLetter = letter;
        if (letter === ' ') {
            newLetter = '_';
        }

        // If we are in a maybe extension, complete it, otherwise complete the filename
        if (filenameSection) {
            filenameSection += newLetter;
        } else {
            newFilename += newLetter;
        }

    }

    const array = new Uint32Array(1);
    const randomNumber = webcrypto.getRandomValues(array)[0];

    const extension = config.get('payload.files.allowedFileTypes')[mimeType];
    return `${newFilename}-${Date.now()}-${randomNumber}.${extension}`;
}



/**
 * Multer disk storage.
 * Stores the files in the folder defined in the configuration.
 * Use the generateFileName() function to choose the new filename.
 */
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const directory = config.get('payload.files.saveFolder');
        multerLogger.debug(`File destination: ${directory}`);
        cb(null, directory);
    },
    filename: function(req, file, cb) {
        const filename = generateFileName(file.filename, file.mimetype);
        multerLogger.debug(`New file name: ${filename}`);
        cb(null, filename);
    }
});



/**
 * Filter the files by MIME types.
 * If the file's MIME type is not allowed, the file is refused and an error is saved in the request.
 */
function fileFilter(req, file, cb) {
    multerLogger.debug('Filtering the file by MIME type');

    if (!req.rejectedFile || !Array.isArray(req.rejectedFile)) {
        req.rejectedFile = [];
    }

    if (config.get('payload.files.allowedFileTypes')[file.mimetype]) {
        multerLogger.debug('The file is accepted');
        return cb(null, true);
    }

    multerLogger.debug(`The file has ${file.mimetype} MIME type, it is refused`);
    req.rejectedFile.push(file);
    req.fileValidation = new UnsupportedMediaTypeError({
        message: 'The uploaded file has the wrong type.',
        title: 'We can\'t accept the uploaded file.',
        description: 'We don\'t accept this type of file. Please, refer to the details to see which file type are allowed, and try again with an other file format.',
        details: {
            mimetype: file.mimetype,
            allowedFileFormats: config.get('payload.files.allowedFileTypes')
        }
    });
    return cb(null, false);
}



/**
 * Multer middleware.
 * Accepts only one file.
 */
export default multer({
    storage,
    fileFilter,
    limits: {
        fieldSize: config.get('payload.maxSize'),
        fileSize: config.get('payload.files.maxFileSize')
    }
}).single('image');