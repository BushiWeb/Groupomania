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