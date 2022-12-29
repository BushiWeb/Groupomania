import { DataTypes } from 'sequelize';
import { createLoggerNamespace } from '../logger/index.js';

const dbLogger = createLoggerNamespace('groupomania:api:database');

/**
 * Creates the post model.
 * @param {Sequelize} sequelize - Sequelize instance to use to create the model.
 * @return {Model} Returns the model.
 */
export default function createPostModel(sequelize) {
    dbLogger.debug('Post model creation');
    return sequelize.define(
        'Post',
        {
            postId: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                primaryKey: true,
                field: 'post_id',
            },
            title: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            message: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            imageUrl: {
                type: DataTypes.TEXT,
                allowNull: true,
                field: 'image_url',
            },
            creationDate: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
                field: 'creation_date',
            },
            lastUpdateDate: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'last_update_date',
            },
            writerId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'writer_id',
                references: {
                    model: 'users',
                    key: 'user_id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
        },
        {
            tableName: 'posts',
            schema: 'posts',
            hasTrigger: true,
            timestamps: false,
            underscored: true,
        }
    );
}
