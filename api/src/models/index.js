import { Sequelize } from 'sequelize';
import initModels from './init-models.js';
import initDatabaseConnection from './init-db-connection.js';

/**
 * Object containing all elements to use the database.
 * @namespace
 * @property Sequelize - Sequelize constructor, to use static methods.
 * @property {Sequelize} sequelize - Sequelize instance.
 * @property {Object.<string, Model>} models - List of available models
 */
const db = {
    Sequelize: Sequelize,

    /**
     * @type {Sequelize}
     */
    sequelize: undefined,

    /**
     * @type {Object.<string, Model>}
     */
    get models() {
        return this.sequelize.models;
    }
};

export default db;
export { initModels, initDatabaseConnection, db };