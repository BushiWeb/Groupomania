import { createLoggerNamespace } from '../logger/index.js';
import { Liquid } from 'liquidjs';
import { join } from 'node:path';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:render-engine');

/**
 * Setup the render engine.
 * @param {Express.Application} app - Express application
 */
export default function renderEngineLoader(app) {
    loaderLogger.verbose('Loading render engine');

    const engine = new Liquid();
    app.engine('html', engine.express());
    app.set('views', join(process.cwd(), 'build'));
    app.set('view engine', 'liquid');
    loaderLogger.debug('Render engine setup');

}