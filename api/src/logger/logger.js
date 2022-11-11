import winston from 'winston';
import 'winston-daily-rotate-file';
import config from '../config/config.js';

let winstonOptions = {};

// Add login levels
winstonOptions.levels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    http: 4,
    verbose: 5,
    debug: 6
};


// Add colors
const winstonLogColors = {
    fatal: 'red bold',
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'cyan',
    verbose: 'white',
    debug: 'gray'
};
winston.addColors(winstonLogColors);


// Choose the format depending on the environment. In development, a human readable format is used. In production, JSON is used.
/**
    Formats the message to print.
    Displays the level and the date.
    If the stack property is defined, then it is used as a message, otherwise user the message property.
*/
function printfFormat({ level, message, timestamp, label, stack, ...metadata }) {
    let formatedMessage = `${level}\t${timestamp}\t\t`;

    if (!stack) {
        formatedMessage += label ? `[${label}] ` : '';
        formatedMessage += message;
    } else {
        formatedMessage += label ? `[${label}] ` : '[Error]';
        formatedMessage += ' ' + stack;
    }

    if (metadata && Object.keys(metadata).length > 0) {
        formatedMessage += ' ' + JSON.stringify(metadata);
    }
    return formatedMessage;
}

if (config.get('env') === 'production') {
    winstonOptions.format = winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
    );
} else if (config.get('env') === 'development') {
    winstonOptions.format = winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        winston.format.errors({ stack: true }),
        winston.format.printf(printfFormat),
        winston.format.splat()
    );
}


// Add transports. In production, logs will be written in files. In development, logs will be written in the console.
winstonOptions.transports = [];
if (config.get('env') === 'production') {
    winstonOptions.transports.push(new winston.transports.DailyRotateFile({
        filename: 'log-%DATE%',
        extension: '.log',
        datePattern: 'YYYY-MM-DD',
        maxSize: '20m',
        dirname: './logs',
        zippedArchive: true
    }));
} else if (config.get('env') === 'development') {
    winstonOptions.transports.push(new winston.transports.Console({
        format: winston.format.combine(winstonOptions.format, winston.format.colorize({all: true}))
    }));
}


// Choose minimum level to print, info in production and debug in development.
if (config.get('env') === 'production') {
    winstonOptions.level = 'info';
} else if (config.get('env') === 'development') {
    winstonOptions.level = 'debug';
}


// Error handling
winstonOptions.exitOnError = true;

const Logger = winston.createLogger(winstonOptions);

export default Logger;

process.on('uncaughtException', (error) => {
    Logger.fatal(error);
    process.exit(1);
});