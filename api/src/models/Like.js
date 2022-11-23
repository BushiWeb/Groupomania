import {DataTypes} from 'sequelize';
import { createLoggerNamespace } from '../logger/logger.js';

const dbLogger = createLoggerNamespace('groupomania:api:database');

/**
 * Creates the like model.
 * @param {Sequelize} sequelize - Sequelize instance to use to create the model.
 * @return Returns the model.
 */
export default function createLikeModel(sequelize) {
    dbLogger.debug('Like model creation');
    return sequelize.define('Like', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            field: 'user_id',
            references: {
                model: 'users',
                key: 'user_id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            field: 'post_id',
            references: {
                model: 'posts',
                key: 'post_id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    }, {
        tableName: 'likes',
        schema: 'posts',
        timestamps: false,
        underscored: true,
        indexes: [
            {
                name: 'likes_pkey',
                unique: true,
                fields: [
                    { name: 'user_id' },
                    { name: 'post_id' },
                ]
            },
        ]
    });
}
