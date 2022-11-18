import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import { createLoggerNamespace } from '../logger/logger.js';

const dbLogger = createLoggerNamespace('groupomania:api:database');
const sequelizeLogger = createLoggerNamespace('groupomania:api:sequelize');

let db = {};
const dbConfig = config.get('db');

db.sequelize = new Sequelize({
    dialect: dbConfig.sgbd,
    host: dbConfig.host,
    port: dbConfig.port,
    database: dbConfig.name,
    username: dbConfig.username,
    password: dbConfig.password,
    protocol: dbConfig.protocol,
    logging: msg => sequelizeLogger.debug(msg),
    ssl: dbConfig.useSSL
});

try {
    await db.sequelize.authenticate();
    dbLogger.info('Connection to database has been establish successfully');
} catch (error) {
    dbLogger.error(error);
    process.exit(1);
}


export default db;