import {DataTypes} from 'sequelize';
import { createLoggerNamespace } from '../logger/logger.js';

const dbLogger = createLoggerNamespace('groupomania:api:database');

/**
 * Creates the refresh token model.
 * @param {Sequelize} sequelize - Sequelize instance to use to create the model.
 * @return Returns the model.
 */
export default function createRefreshTokenModel(sequelize) {
    dbLogger.debug('Refresh token model creation');
    return sequelize.define('RefreshToken', {
        tokenId: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            field: 'token_id'
        },
        tokenValue: {
            type: DataTypes.STRING(60),
            allowNull: false,
            field: 'token_value'
        },
        expiration: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'refresh_tokens',
        schema: 'authentication',
        timestamps: false,
        underscored: true,
        indexes: [
            {
                name: 'refresh_tokens_pkey',
                unique: true,
                fields: [
                    { name: 'token_id' },
                ]
            },
        ]
    });
}
