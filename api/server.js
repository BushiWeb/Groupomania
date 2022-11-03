import http from 'node:http';
import app from './app.js';

const port = 3000;
app.set('port', port);

const server = http.createServer(app);

server.on('error', () => {
    console.error('error');
});

server.on('listening', () => {
    console.log('Server listening on port ', port);
});

server.listen(port);
