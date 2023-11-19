import { DataTypes } from 'sequelize';
import { createLoggerNamespace } from '../logger/index.js';

const dbLogger = createLoggerNamespace('groupomania:api:database');

/**
 * Creates the role model.
 * @param {Sequelize} sequelize - Sequelize instance to use to create the model.
 * @return {Model} Returns the model.
 */
export default function createRoleModel(sequelize) {
    dbLogger.debug('Role model creation');
    return sequelize.define(
        'Role',
        {
            roleId: {
                type: DataTypes.SMALLINT,
                primaryKey: true,
                field: 'role_id',
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: 'roles_name_key',
            },
        },
        {
            tableName: 'roles',
            schema: 'admin',
            timestamps: false,
            underscored: true,
        }
    );
}
