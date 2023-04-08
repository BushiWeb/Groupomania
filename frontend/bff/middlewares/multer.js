import multer from 'multer';
import { createLoggerNamespace } from '../logger/index.js';
import config from '../config/config.js';
import { deleteValueFromPath, getValueFromPath, setValueFromPath } from '../utils/utils.js';
import { UserInputValidationError } from '../errors/index.js';

const multerLogger = createLoggerNamespace('groupomania:bff:multer');

const storage = multer.memoryStorage();

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
        fileSize: config.get('payload.files.maxFileSize'),
    },
}).single('image');



/**
 * Data formatter function.
 * This function returns a function to format the body content. It allows to extract some properties content and to
 *  parse them.
 * @param {string} origin - Name of the property containing the data to extract, can be a dotted notation path if the
 *  property is several layers deep in the body.
 * @param {Object} [options]
 * @param {boolean} [options.parse=true] - Wether the data are a JSON string or not. If true, the data will be parsed
 *  to JavaScript object before extraction.
 * @param {boolean} [options.required = true] - Wether the data is required or not. If required, it will throw an error
 *  if the data is undefined.
 * @param {string} [options.destination] - Where to put the extracted data. By default, the deta will be stored at the
 *  root of the request's body.
 * @returns {Function} Returns a data formatting function. Takes the request body as a parameter and returns it once it
 *  is modified.
 * @throws Throws if the body is required but absent.
 */
export function dataFormatter(origin, { parse = true, required = true, destination } = {}) {
    return (body) => {
        let data = getValueFromPath(body, origin);

        // Check if the data exists
        if (data === undefined) {
            if (!required) {
                return body;
            }

            throw new UserInputValidationError({
                message: 'Missing required data.',
                title: 'The request\'s body is invalid.',
                description: `We can't proceed with the request because we are missing some required data. If you want to try again, make sure to give us the data we need in the ${origin} property.`,
            });
        }

        // Parses the data
        if (parse) {
            try {
                data = JSON.parse(data);
            } catch (error) {
                throw new UserInputValidationError({
                    message: 'JSON data malformed.',
                    title: 'The request\'s body is invalid',
                    description: `We can't proceed with the request because the ${origin} can't be read. If you want to try again, check that the data's syntax is correct.`,
                }, error);
            }
        }

        // Move the data
        body = deleteValueFromPath(body, origin);
        body = setValueFromPath(body, data, destination);

        return body;
    };
}