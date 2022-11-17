import headersLoader from './headers.js';
import createLoggerNamespace from '../logger/logger-namespace.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader');

export default function loadApp (app) {
    headersLoader(app);
    loaderLogger.verbose('Header middleware initialized');
}