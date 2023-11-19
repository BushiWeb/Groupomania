import { createLoggerNamespace } from '../../logger/index.js';
import likePostRequest from '../../services/requests/likePost.js';

const likePostControllerLogger = createLoggerNamespace(
    'groupomania:bff:controller:like-posts',
);

/**
 * Like post controller.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export default async function likePostController(req, res, next) {
    likePostControllerLogger.verbose('Like post controller starting');
    try {
        const likeResult = await likePostRequest(
            req.body.like,
            req.params.postId,
            req.session.user,
        );
        res.status(200).json(likeResult);
    } catch (error) {
        next(error);
    }
}
