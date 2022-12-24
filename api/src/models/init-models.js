import createRoleModel from './Role.js';
import createRefreshTokenModel from './RefreshToken.js';
import createUserModel from './User.js';
import createPostModel from './Post.js';
import createLikeModel from './Like.js';
import { createLoggerNamespace } from '../logger/index.js';

const dbLogger = createLoggerNamespace('groupomania:api:database');

/**
 * Initialise models and models' associations.
 * @param {Sequelize} sequelize - Sequelize instance to use to create the models.
 */
export default function initModels(sequelize) {
    dbLogger.debug('Models initialization starting');

    // Create models
    var refreshToken = createRefreshTokenModel(sequelize);
    dbLogger.debug('Refresh token model created');
    var role = createRoleModel(sequelize);
    dbLogger.debug('Role model created');
    var user = createUserModel(sequelize);
    dbLogger.debug('User model created');
    var post = createPostModel(sequelize);
    dbLogger.debug('Post model created');
    var like = createLikeModel(sequelize);
    dbLogger.debug('Like model created');

    // Create models associations
    // role 1->N user
    user.belongsTo(role, { as: 'role', foreignKey: 'role_id'});
    role.hasMany(user, { as: 'users', foreignKey: 'role_id'});
    dbLogger.debug('One to many relation created between role and user');

    // user 1->N refresh token
    refreshToken.belongsTo(user, { as: 'user', foreignKey: 'user_id'});
    user.hasMany(refreshToken, { as: 'refreshTokens', foreignKey: 'user_id'});
    dbLogger.debug('One to many relation created between user and refresh token');

    // user 1->N post
    post.belongsTo(user, { as: 'writer', foreignKey: 'writer_id'});
    user.hasMany(post, { as: 'posts', foreignKey: 'writer_id'});
    dbLogger.debug('One to many relation created between user and post');

    // user N->N post (for likes)
    post.belongsToMany(user, { as: 'users_liked', through: like, foreignKey: 'post_id', otherKey: 'user_id' });
    user.belongsToMany(post, { as: 'posts_liked', through: like, foreignKey: 'user_id', otherKey: 'post_id' });
    like.belongsTo(post, { as: 'post', foreignKey: 'post_id'});
    post.hasMany(like, { as: 'likes', foreignKey: 'post_id'});
    like.belongsTo(user, { as: 'user', foreignKey: 'user_id'});
    user.hasMany(like, { as: 'likes', foreignKey: 'user_id'});
    dbLogger.debug('Many to many relation created between user and post, throught the model like');
}
