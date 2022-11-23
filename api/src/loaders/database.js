import createLoggerNamespace from '../logger/logger-namespace.js';
import { db, initDatabaseConnection, initModels} from '../models/index.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:database');

/**
 * Initialize connection to the database.
 */
export default async function databaseLoader () {
    loaderLogger.verbose('Database loading');

    // Connecting to the database
    db.sequelize = await initDatabaseConnection();
    loaderLogger.verbose('Database connection initialized');

    // Initializing models
    initModels(db.sequelize);
    loaderLogger.verbose('Database models initialized');
}