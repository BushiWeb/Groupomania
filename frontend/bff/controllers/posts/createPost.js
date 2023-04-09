import { createLoggerNamespace } from '../../logger/index.js';
import createPostRequest from '../../services/requests/createPost.js';

const createPostControllerLogger = createLoggerNamespace('groupomania:bff:controller:create-posts');

/**
 * Create post controller.
 * Send the request to the API.
 * Send the post information, as well as the CRSF token in a custom header (done in authorization middleware).
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export default async function createPostController(req, res, next) {
    createPostControllerLogger.verbose('Create post controller starting');
    try {
        let contentType, postData;
        if (req.body.post) {
            createPostControllerLogger.debug('Multipart request');
            contentType = 'multipart/form-data';
            postData = new FormData();
            postData.set('post', req.body.post);

            if (req.file) {
                postData.set(
                    'image',
                    new Blob(
                        [req.file.buffer.buffer.slice(req.file.buffer.byteOffset, req.file.buffer.length)],
                        { type: req.file.mimetype }
                    ),
                    req.file.originalname
                );
            }
        } else {
            createPostControllerLogger.debug('JSON request');
            contentType = 'application/json';
            postData = {
                title: req.body.title,
                message: req.body.message,
            };
        }

        const newPost = await createPostRequest(postData, contentType, req.session.user);
        res.status(201).json(newPost);
    } catch (error) {
        next(error);
    }
}