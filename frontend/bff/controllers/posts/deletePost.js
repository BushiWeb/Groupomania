import { createLoggerNamespace } from '../../logger/index.js';
import deletePostRequest from '../../services/requests/deletePost.js';

const DeletePostControllerLogger = createLoggerNamespace(
    'groupomania:bff:controller:delete-posts',
);

/**
 * Delete post controller.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export default async function deletePostController(req, res, next) {
    DeletePostControllerLogger.verbose('Delete post controller starting');
    try {
        await deletePostRequest(
            req.body.like,
            req.params.postId,
            req.session.user,
        );
        res.status(204).end();
    } catch (error) {
        next(error);
    }
}
