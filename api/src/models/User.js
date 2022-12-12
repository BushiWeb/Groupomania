import {DataTypes} from 'sequelize';
import { createLoggerNamespace } from '../logger/index.js';

const dbLogger = createLoggerNamespace('groupomania:api:database');

/**
 * Creates the user model.
 * @param {Sequelize} sequelize - Sequelize instance to use to create the model.
 * @return {Model} Returns the model.
 */
export default function createUserModel(sequelize) {
    dbLogger.debug('User model creation');
    return sequelize.define('User', {
        userId: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'user_id'
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: 'users_email_key'
        },
        normalizedEmail: {
            type: DataTypes.STRING(255),
            field: 'normalized_email',
            unique: 'users_normalized_email_key'
        },
        password: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        failedLoginAttemptCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'failed_login_attempt_count'
        },
        lockedUntil: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'locked_until'
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 2,
            field: 'role_id',
            references: {
                model: 'roles',
                key: 'role_id'
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        }
    }, {
        tableName: 'users',
        schema: 'users',
        hasTrigger: true,
        timestamps: false,
        underscored: true
    });
}
