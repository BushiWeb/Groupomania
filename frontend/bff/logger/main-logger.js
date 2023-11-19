import winston from 'winston';
import winstonOptions from './logger-config.js';

// Add colors
winston.addColors(winstonOptions.colors);
delete winstonOptions.colors;

// Create the logger
const Logger = winston.createLogger(winstonOptions);
export default Logger;

// Catch uncaught errors and unhandled rejected promises to log the error / rejection.
process.on('uncaughtException', (error) => {
    Logger.fatal(error);
    process.exit(1);
});
