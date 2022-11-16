import http from 'node:http';
import app from './app.js';
import {
    normalizePort,
    getConnectionInformations,
    errorHandler,
} from './utils/server-utils.js';
import config from './config/config.js';
import createLoggerNamespace from './logger/logger-namespace.js';

const serverLogger = createLoggerNamespace('groupomania:api:server');

// Get the port
let port;
try {
    port = normalizePort(config.get('port'));
    serverLogger.verbose(`Use port ${port}`);
} catch (error) {
    const defaultPort = 3000;
    port = normalizePort(defaultPort);
    serverLogger.error(error);
    serverLogger.warn(`The port can't be normalized, use default port ${defaultPort} instead`);
}

app.set('port', port);

// Create the server
const server = http.createServer(app);
serverLogger.verbose('HTTP server created');

// Add event listeners
server.on('error', errorHandler);
server.on('listening', () => {
    const connectionInformations = getConnectionInformations(server, port);
    serverLogger.info(`Server listening on ${connectionInformations}`);
});

// Launch the server
server.listen(port);
serverLogger.verbose('Server lauched');
