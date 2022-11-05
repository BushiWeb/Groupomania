import http from 'node:http';
import app from './app.js';
import {
    normalizePort,
    getConnectionInformations,
    errorHandler,
} from './utils/server-utils.js';

// Get the port
let port;
try {
    port = normalizePort(process.env.PORT);
} catch (error) {
    port = normalizePort('3000');
    console.warn(
        'No port value in environment variable, use default port 3000 instead.'
    );
}

app.set('port', port);

// Create the server
const server = http.createServer(app);

// Add event listeners
server.on('error', errorHandler);
server.on('listening', () => {
    const connectionInformations = getConnectionInformations(server, port);
    console.log(`Server listening on ${connectionInformations}`);
});

// Launch the server
server.listen(port);
