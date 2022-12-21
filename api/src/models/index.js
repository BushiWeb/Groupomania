import { Sequelize } from 'sequelize';
import initModels from './init-models.js';
import initDatabaseConnection from './init-db-connection.js';

/**
 * Object containing all elements to use the database.
 * @namespace
 * @property OrmClass - Sequelize constructor, to use static methods.
 * @property {Sequelize} ormInstance - Sequelize instance.
 * @property {Object.<string, Model>} models - List of available models
 */
const db = {
    OrmClass: Sequelize,

    /**
     * @type {Sequelize}
     */
    ormInstance: undefined,

    /**
     * @returns {Object.<string, Model>}
     */
    get models() {
        return this.ormInstance.models;
    }
};

export default db;
export { initModels, initDatabaseConnection, db };