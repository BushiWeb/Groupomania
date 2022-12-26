import { createLoggerNamespace } from '../logger/index.js';
import { createPost, getAllPosts, getPost, likePost, updatePost } from '../services/posts.js';
import { createImageUrl, deleteImage } from '../services/images.js';

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



/**
 * Post update controller.
 * Generates the new image Url
 * Calls the right service.
 * Sends a response with status 200 and the new post data to the client if the request is successful, or calls the error handler middleware if an error occurs.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function updatePostController(req, res, next) {
    postControllerLogger.verbose('Update post middleware starting');
    let previousImageUrl;
    try {
        // Building the data
        const newData = {
            ...(req.body.title && { title: req.body.title }),
            ...(req.body.message && { message: req.body.message }),
            ...(
                req.file ?
                    { imageUrl: createImageUrl(req.file.filename, req.get('host'), req.protocol) } :
                    req.body.deleteImage && { imageUrl: null}
            )
        };

        // Getting the current data to get the image URL. Mark the image as to be deleted if the image url is updated
        let post = await getPost(req.params.postId);
        if (newData.imageUrl !== undefined) {
            previousImageUrl = post.imageUrl;
        }

        // Update the post
        post = await updatePost(post, newData);

        res.status(200).json(post);
        postControllerLogger.verbose('Response sent');
    } catch (error) {
        return next(error);
    }

    // Delete the image
    if (previousImageUrl) {
        deleteImage(previousImageUrl);
    }
}



/**
 * Post like controller.
 * Calls the like service.
 * Sends a 200 response with a message or calls the next error middleware.
 * The message's content depends on the action and the result.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export async function likePostController(req, res, next) {
    postControllerLogger.verbose('Like post middleware starting');
    try {
        const likeResult = await likePost(req.params.postId, res.locals.auth.userId, req.body.like);

        // Message generation
        let message = '';
        if (likeResult && req.body.like) {
            message = 'Your like has been applied.';
        } else if (likeResult) {
            message = 'Your previous like has been removed.';
        } else if (req.body.like) {
            message = 'Your like couldn\'t be applied, you already liked this post';
        } else {
            message = 'We couldn\'t remove your like, you didn\'t like this post before.';
        }

        res.status(200).json({ message });
        postControllerLogger.verbose('Response sent');
    } catch (error) {
        return next(error);
    }
}