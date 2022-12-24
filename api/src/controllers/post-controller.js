import { createLoggerNamespace } from '../logger/index.js';
import { createPost } from '../services/posts.js';
import { createImageUrl } from '../services/images.js';

const postControllerLogger = createLoggerNamespace('groupomania:api:controllers:post');

/**
 * Post creation controller.
 * Calls the right service.
 * Sends a message to the client with status 201 if the request is successful, or calls the error handler middleware if an error occurs.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function createPostController(req, res, next) {
    postControllerLogger.verbose('Create post middleware starting');
    try {
        const postInfos = {
            title: req.body.title,
            message: req.body.message,
            writerId: res.locals.auth.userId,
            ...(req.file && { imageUrl: createImageUrl(req.file.filename, req.get('host'), req.protocol) })
        };

        const newPost = await createPost(postInfos);

        res.status(201).json(newPost);
        postControllerLogger.verbose('Response sent');
    } catch (error) {
        return next(error);
    }
}