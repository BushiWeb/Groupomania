import { createLoggerNamespace } from '../logger/index.js';
import { createPost, getAllPosts, getPost } from '../services/posts.js';
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



/**
 * All posts fetching.
 * Calls the right service.
 * Sends a message to the client with status 200 containing the users informations, or calls the error handler middleware if an error occurs.
 * If the client required more informations about the user or the likes, provide those informations.
 * If the client wanted to filter or paginate the results, provide the informations to do so.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function getAllPostsController(req, res, next) {
    postControllerLogger.verbose('Get all posts middleware starting');
    try {
        const options = {
            ...(req.query.userInfo && { userInfo: req.query.userInfo }),
            ...(req.query.likeInfo && { likeInfo: req.query.likeInfo }),
            ...(req.query.userId && { userId: req.query.userId }),
            ...(req.query.limit && { limit: req.query.limit }),
            ...(req.query.page && { page: req.query.page })
        };
        const posts = await getAllPosts(options);

        res.status(200).json(posts);
        postControllerLogger.verbose('Response sent');
    } catch (error) {
        return next(error);
    }
}



/**
 * Post fetching.
 * Calls the right service.
 * Sends a message to the client with status 200 containing the post informations, or calls the error handler middleware if an error occurs.
 * If the client required more informations about the author or the likes, provide those informations.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function getPostController(req, res, next) {
    postControllerLogger.verbose('Get post middleware starting');
    try {
        const options = {
            ...(req.query.userInfo && { userInfo: req.query.userInfo }),
            ...(req.query.likeInfo && { likeInfo: req.query.likeInfo })
        };
        const post = await getPost(req.params.postId, options);

        res.status(200).json(post);
        postControllerLogger.verbose('Response sent');
    } catch (error) {
        return next(error);
    }
}