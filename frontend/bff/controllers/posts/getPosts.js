import { createLoggerNamespace } from '../../logger/index.js';
import getPostsRequest from '../../services/requests/getPosts.js';

const getPostsControllerLogger = createLoggerNamespace('groupomania:bff:controller:get-posts');

/**
 * Get posts controller.
 * Send the request to the API.
 * Send the post information, as well as the CRSF token in a custom header (done in authorization middleware).
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export default async function getPostsController(req, res, next) {
    getPostsControllerLogger.verbose('Get posts controller starting');
    try {
        const postsData = await getPostsRequest(req.query.page, true, req.session.user);
        res.status(200).json(postsData);
    } catch (error) {
        next(error);
    }
}