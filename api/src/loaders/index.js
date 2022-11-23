import headersLoader from './headers.js';
import createLoggerNamespace from '../logger/logger-namespace.js';
import databaseLoader from './database.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader');

export default async function loadApp (app) {
    headersLoader(app);
    loaderLogger.verbose('Header middleware initialized');

    await databaseLoader(app);
    loaderLogger.verbose('Database connection initialized');
}