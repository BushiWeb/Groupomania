import winston from 'winston';
import 'winston-daily-rotate-file';
import parser from 'yargs-parser';
import LOGGER_CONFIG from './logger-config/global-logger-config.js';


let winstonOptions = {...LOGGER_CONFIG};

// Try to load environment specific logger configuration
let environment = parser(process.argv.slice(2)).env?.toLowerCase() ||
    process.env.NODE_ENV?.toLowerCase() ||
    'development';

try {
    let {default: environmentConfig} = await import(`./logger-config/${environment}-logger-config.js`);
    console.log('Environment specific logger configuration loaded');
    winstonOptions = {...winstonOptions, ...environmentConfig};
} catch (error) {
    console.error(error);
    console.log('No environment specific logger configuration found.');
}

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
