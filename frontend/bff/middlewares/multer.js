import multer from 'multer';
import { createLoggerNamespace } from '../logger/index.js';
import config from '../config/config.js';

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