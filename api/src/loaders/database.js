import { createLoggerNamespace } from '../logger/index.js';
import { db, initDatabaseConnection, initModels } from '../models/index.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:database');

/**
 * Initialize connection to the database.
 */
export default async function databaseLoader() {
    loaderLogger.verbose('Database loading');

    // Connecting to the database
    db.ormInstance = await initDatabaseConnection();
    loaderLogger.verbose('Database connection initialized');

    // Initializing models
    initModels(db.ormInstance);
    loaderLogger.verbose('Database models initialized');
}