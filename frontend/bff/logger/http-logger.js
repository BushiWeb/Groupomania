import morgan from 'morgan';
import createLoggerNamespace from './logger-namespace.js';

// Log Morgan messages using a custom logger
const httpLogger = createLoggerNamespace('groupomania:bff:http');

const stream = {
    write: (message) => httpLogger.http(message),
};

const logFormat = ':remote-addr - :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms';

const morganMiddleware = morgan(logFormat, { stream });

export default morganMiddleware;
