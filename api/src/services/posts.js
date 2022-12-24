import { createLoggerNamespace } from '../logger/index.js';
import db from '../models/index.js';

const postsServicesLogger = createLoggerNamespace('groupomania:api:services:posts');

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
 * @param {boolean} [options.userInfo=false] - Whether to add the user informations to the posts or just the author id.
 * @param {boolean} [options.likeInfo=false] - Whether to add the like informations to the posts.
 * @param {string|number} [options.userId] - Filtering posts by userId.
 * @param {number} [option.page] - Which page to get, usefull for pagination. Requires the limit parameter.
 * @param {number} [option.limit] - Number of entry to return, usefull for pagination.
 * @returns {User} Returns the user.
 */
export async function getAllPosts({ userInfo = false, likeInfo = false, userId, page, limit } = {}) {
    postsServicesLogger.verbose('Get all posts service starting');

    let searchOptions = {
        attributes: ['postid', 'title', 'message', 'imageUrl', 'creationDate', 'lastUpdateDate', 'writerId'],
        order: [['creationDate', 'DESC']]
    };

    // Creating user filter
    if (userId !== undefined) {
        postsServicesLogger.debug('Filtering by user id');
        searchOptions.where = {
            writerId: userId
        };
    }

    // Adding user informations
    if (userInfo) {
        postsServicesLogger.debug('Adding user informations to the results');
        searchOptions.include = {
            association: 'writer',
            attributes: [['userId', 'writerId'], 'email', 'roleId']
        };
        searchOptions.attributes.pop();
    }

    // Adding likes informations
    if (likeInfo) {
        postsServicesLogger.debug('Adding like informations to the results');
        searchOptions.include = {
            association: 'writer',
            attributes: [['userId', 'writerId'], 'email', 'roleId']
        };
        searchOptions.attributes.pop();
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

    const users = await db.models.User.findAll(searchOptions);

    postsServicesLogger.debug('Users fetched');
    return users;
}