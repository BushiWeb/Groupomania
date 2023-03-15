import { createLoggerNamespace } from '../logger/index.js';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:html-page');

/**
 * Add middlewares to serve the html page.
 * @param {Express.Application} app - Express application
 */
export default function htmlPageLoader(app) {
    loaderLogger.verbose('Loading the middleware to serve the HTML page');

    const __dirname = dirname(fileURLToPath(import.meta.url));
    const root = join(__dirname, '../..');
    loaderLogger.debug(`Root folder found: ${root}`);

    app.use((req, res) => {
        res.sendFile('./build/index.html', {
            root,
        });
    });
    loaderLogger.debug('Middleware to serve the HTML page addeed');
}