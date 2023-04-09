import { createLoggerNamespace } from '../../logger/index.js';
import updatePostRequest from '../../services/requests/updatePost.js';

const updatePostControllerLogger = createLoggerNamespace('groupomania:bff:controller:update-posts');

/**
 * Update post controller.
 * Either send a JSON request or a multipart request depending on the received data.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export default async function updatePostController(req, res, next) {
    updatePostControllerLogger.verbose('Update post controller starting');
    try {
        let contentType, postData;
        if (req.body.post) {
            updatePostControllerLogger.debug('Multipart request with post data');
            contentType = 'multipart/form-data';
            postData = new FormData();
            postData.set('post', req.body.post);
        }

        if (req.file) {
            updatePostControllerLogger.debug('Multipart request with file');
            if (!(postData instanceof FormData)) {
                postData = new FormData();
                contentType = 'multipart/form-data';
            }

            postData.set(
                'image',
                new Blob(
                    [req.file.buffer.buffer.slice(req.file.buffer.byteOffset, req.file.buffer.length)],
                    { type: req.file.mimetype }
                ),
                req.file.originalname
            );
        }

        if (!(postData instanceof FormData)) {
            updatePostControllerLogger.debug('JSON request');
            contentType = 'application/json';
            postData = {
                title: req.body.title,
                message: req.body.message,
                deleteImage: req.body.deleteImage,
            };
        }

        const newPost = await updatePostRequest(postData, contentType, req.params.postId, req.session.user);
        res.status(200).json(newPost);
    } catch (error) {
        next(error);
    }
}