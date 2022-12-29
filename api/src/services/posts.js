import { createLoggerNamespace } from '../logger/index.js';
import db from '../models/index.js';
import { NotFoundError } from '../errors/index.js';
import { UniqueConstraintError } from 'sequelize';

const postsServicesLogger = createLoggerNamespace('groupomania:api:services:posts');

/**
 * Create the option object for request.
 * @param {Object} options - Search options.
 * @param {boolean} [options.userInfo=false] - Whether to add the user informations to the posts or just the author id.
 * @param {boolean} [options.likeInfo=false] - Whether to add the like informations to the posts.
 * @param {string|number} [options.userId] - Filtering posts by userId.
 * @param {number} [option.page] - Which page to get, usefull for pagination. Requires the limit parameter.
 * @param {number} [option.limit] - Number of entry to return, usefull for pagination.
 * @returns {Object} Returns the option object.
 */
function getRequestOptionObject({
    userInfo = false,
    likeInfo = false,
    userId,
    page,
    limit,
} = {}) {
    postsServicesLogger.verbose('Get request options object');

    let searchOptions = {
        attributes: ['postId', 'title', 'message', 'imageUrl', 'creationDate', 'lastUpdateDate', 'writerId'],
    };

    // Creating user filter
    if (userId !== undefined) {
        postsServicesLogger.debug('Filtering by user id');
        searchOptions.where = {
            writerId: userId,
        };
    }

    // Adding user informations
    if (userInfo) {
        postsServicesLogger.debug('Adding user informations to the results');
        searchOptions.include = {
            association: 'writer',
            attributes: [['user_id', 'writerId'], 'email', 'roleId'],
        };
        searchOptions.attributes.pop();
    }

    /* Adding likes informations:
        Joining the post table with the user table using the like table.
        Use the count function to count the number of user_id, giving the number of likes. Cast the result to an
            integer.
        Use the array_agg to get the list of all users that liked the post. To avoid getting an array containing the
            null value if no one liked the post, use nullif to get null if the array contains only a null value, and
            use coalesce to transform this null into an empty array.
        Group by post_id, and users.user_id if we ask for the user informations.
    */
    if (likeInfo) {
        postsServicesLogger.debug('Adding like informations to the results');
        const newInclude = {
            association: 'users_liked',
            attributes: [],
            through: {
                attributes: [],
            },
        };

        if (searchOptions.include) {
            searchOptions.include = [searchOptions.include, newInclude];
        } else {
            searchOptions.include = newInclude;
        }

        searchOptions.group = ['postId'];
        if (userInfo) {
            searchOptions.group.push('writer.user_id');
        }

        const { fn, col, cast } = db.OrmClass;
        // To count the number of likes
        searchOptions.attributes.push([
            cast(
                fn('count', col('users_liked.user_id')),
                'integer'
            ),
            'likes',
        ]);
        // To aggregate the users that liked
        searchOptions.attributes.push([
            fn('coalesce', fn(
                'nullif',
                fn('array_agg', col('users_liked.user_id')),
                cast('{NULL}', 'integer[]')
            ), cast('{}', 'integer[]')),
            'usersLiked',
        ]);
    }

    // Adding pagination informations
    if (limit) {
        postsServicesLogger.debug(`Limiting the number of results to ${limit}`);
        searchOptions.limit = limit;
    }

    if (limit && page) {
        postsServicesLogger.debug(`Paginating the result, getting the page number ${page}`);
        searchOptions.offset = (page - 1) * limit;
    }

    return searchOptions;
}



/**
 * Creates post.
 * @param {Object} postInfos - Object containing the post informations.
 * @param {string} postInfos.title - Post's title.
 * @param {string} postInfos.message - Post's message.
 * @param {string} [postInfos.imageUrl] - Post's image url.
 * @returns {Post} Returns the newly created post.
 */
export async function createPost(postInfos) {
    postsServicesLogger.verbose('Create Post service starting');

    const newPost = await db.models.Post.create(postInfos);
    postsServicesLogger.debug('User created');

    return newPost;
}



/**
 * Fetch all posts, ordered by creation date.
 * @param {Object} options - Search options.
 * @param {boolean} [options.userInfo] - Whether to add the user informations to the posts or just the author id.
 * @param {boolean} [options.likeInfo] - Whether to add the like informations to the posts.
 * @param {string|number} [options.userId] - Filtering posts by userId.
 * @param {number} [option.page] - Which page to get, usefull for pagination. Requires the limit parameter.
 * @param {number} [option.limit] - Number of entry to return, usefull for pagination.
 * @returns {Post} Returns the posts.
 */
export async function getAllPosts(options = {}) {
    postsServicesLogger.verbose('Get all posts service starting');

    const searchOptions = getRequestOptionObject(options);
    searchOptions.order = [['creationDate', 'DESC'], ['postId', 'DESC']];

    const posts = await db.models.Post.findAll(searchOptions);

    postsServicesLogger.debug('Posts fetched');
    return posts;
}



/**
 * Fetch the post corresponding to the given id
 * @param {number} postId - Post id.
 * @param {Object} options - Search options.
 * @param {boolean} [options.userInfo] - Whether to add the author informations to the post or just the writer id.
 * @param {boolean} [options.likeInfo] - Whether to add the likes informations to the user or not.
 * @returns {Post} Returns the post.
 * @throws {NotFoundError} Throws an error if the post doesn't exist.
 */
export async function getPost(postId, options = {}) {
    postsServicesLogger.verbose('Get post service starting');

    const searchOptions = getRequestOptionObject(options);

    const post = await db.models.Post.findByPk(postId, searchOptions);

    if (post === null) {
        postsServicesLogger.debug('The post doesn\'t exist. Throwing an error');
        throw new NotFoundError({
            message: `No post has the id ${postId}.`,
            title: 'The post can\'t be found.',
            description: 'We can\'t find the post corresponding to the id you gave. Please, verify your input and try again.',
        });
    }

    postsServicesLogger.debug('Post fetched');
    return post;
}



/**
 * Like an existing post.
 * @param {number} postId - Id of the post to like.
 * @param {number} userId - Id of the user that likes.
 * @param {boolean} like - Value of the like: true for a like, false for a dislike.
 * @returns {boolean} Returns true if the action was successful, and false if not.
 */
export async function likePost(postId, userId, like) {
    postsServicesLogger.verbose('Like Post service starting');

    const notFoundError = new NotFoundError({
        message: `No post has the id ${postId}.`,
        title: 'The post can\'t be found.',
        description: 'We can\'t find the post with the id you gave. Please, check your input and try again.',
    });

    // Attempt to like
    try {
        if (like) {
            await db.models.Like.create({ userId, postId });
            return true;
        }
    } catch (error) {
        if (error instanceof UniqueConstraintError) {
            return false;
        }
        throw notFoundError;
    }

    // Attempt to remove the like
    const affectedRowsNumber = await db.models.Like.destroy({ where: { userId, postId }});
    if (affectedRowsNumber === 0) {
        const checkPostExists = await db.models.Post.findByPk(postId) !== null;
        if (checkPostExists) {
            return false;
        }
        throw notFoundError;
    }
    return true;
}



/**
 * Updates an existing post.
 * @param {Post} post - Instance de modèle de post.
 * @param {Object} postInfos - Object containing the new user informations.
 * @param {string} [userInfos.title] - New post's title.
 * @param {string} [userInfos.message] - New post's message.
 * @param {string} [userInfos.imageUrl] - New post's image, null to just delete the image.
 * @returns {Post} Returns the updated post.
 */
export async function updatePost(post, postInfos) {
    postsServicesLogger.verbose('Update Post service starting');

    post.set(postInfos);
    await post.save();

    return post;
}



/**
 * Deletes an existing post.
 * @param {Post} post - Post model instanc to delete.
 * @returns {boolean} Returns true if the operation succeeds.
 */
export async function deletePost(post) {
    postsServicesLogger.verbose('Delete Post service starting');
    await post.destroy();
    return true;
}