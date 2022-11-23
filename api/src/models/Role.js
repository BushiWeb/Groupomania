import {DataTypes} from 'sequelize';
import { createLoggerNamespace } from '../logger/logger.js';

const dbLogger = createLoggerNamespace('groupomania:api:database');

/**
 * Creates the role model.
 * @param {Sequelize} sequelize - Sequelize instance to use to create the model.
 * @return Returns the model.
 */
export default function createRoleModel(sequelize) {
    dbLogger.debug('Role model creation');
    return sequelize.define('Role', {
        roleId: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            primaryKey: true,
            field: 'role_id'
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: 'roles_name_key'
        }
    }, {
        tableName: 'roles',
        schema: 'admin',
        timestamps: false,
        underscored: true,
        indexes: [
            {
                name: 'roles_name_key',
                unique: true,
                fields: [
                    { name: 'name' },
                ]
            },
            {
                name: 'roles_pkey',
                unique: true,
                fields: [
                    { name: 'role_id' },
                ]
            },
        ]
    });
}
