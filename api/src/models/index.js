import { Sequelize } from 'sequelize';
import initModels from './init-models.js';
import initDatabaseConnection from './init-db-connection.js';

let db = {
    Sequelize: Sequelize,
    _sequelize: undefined,

    set sequelize(sequelize) {
        this._sequelize = sequelize;
    },

    get sequelize() {
        return this._sequelize;
    },

    get models() {
        return this._sequelize.models;
    }
};

export default db;
export { initModels, initDatabaseConnection, db };