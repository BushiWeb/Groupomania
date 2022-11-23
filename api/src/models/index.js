import { Sequelize } from 'sequelize';
import { createLoggerNamespace } from '../logger/logger.js';
import initModels from './init-models.js';
import initDatabaseConnection from './init-db-connection.js';

const dbLogger = createLoggerNamespace('groupomania:api:database');

let db = {};
db.Sequelize = Sequelize;

// Database connection
db.sequelize = await initDatabaseConnection();
dbLogger.verbose('Database connection initialized');

// Module initialisation
initModels(db.sequelize);
dbLogger.verbose('Database models initialized');


export default db;