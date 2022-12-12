import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import { createLoggerNamespace } from '../logger/index.js';

const dbLogger = createLoggerNamespace('groupomania:api:database');
const sequelizeLogger = createLoggerNamespace('groupomania:api:sequelize');

/**
 * Connects to the database and tests the connection.
 * Exit if the connection can't be created.
 * @returns {Sequelize} Returns the sequelize instance.
 * @async
 */
export default async function initDatabaseConnection() {
    dbLogger.debug('Database connection starting');
    const dbConfig = config.get('db');

    let sequelize = new Sequelize({
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

    // Connection testing
    try {
        await sequelize.authenticate();
        dbLogger.info('Connection to database has been establish successfully');
    } catch (error) {
        dbLogger.fatal(error);
        process.exit(1);
    }

    return sequelize;
}