import {DataTypes} from 'sequelize';
import { createLoggerNamespace } from '../logger/index.js';

const dbLogger = createLoggerNamespace('groupomania:api:database');

/**
 * Creates the refresh token model.
 * @param {Sequelize} sequelize - Sequelize instance to use to create the model.
 * @return {Model} Returns the model.
 */
export default function createRefreshTokenModel(sequelize) {
    dbLogger.debug('Refresh token model creation');
    return sequelize.define('RefreshToken', {
        tokenId: {
            type: DataTypes.UUID,
            primaryKey: true,
            field: 'token_id'
        },
        tokenValue: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'token_value'
        },
        expiration: {
            type: DataTypes.DATE,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id',
            references: {
                model: 'users',
                key: 'user_id'
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        }
    }, {
        tableName: 'refresh_tokens',
        schema: 'authentication',
        timestamps: false,
        underscored: true
    });
}
