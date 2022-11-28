import winston from 'winston';

function printfFormat({ level, message, timestamp, label, stack, ...metadata }) {
    let formatedMessage = `${level}\t${timestamp}\t\t`;

    if (!stack) {
        formatedMessage += label ? `[${label}] ` : '';
        formatedMessage += message;
    } else {
        formatedMessage += label ? `[${label}] ` : '[Error]';
        formatedMessage += ' ' + stack;
    }

    delete metadata.splat;
    if (metadata && Object.keys(metadata).length > 0) {
        formatedMessage += '\n' + JSON.stringify(metadata, null, 2);
    }

    return formatedMessage;
}

const DEVELOPMENT_LOGGER_CONFIG = {
    level: 'debug',
    format: winston.format.combine(
        winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss.SSS'}),
        winston.format.errors({stack: true}),
        winston.format.splat(),
        winston.format.printf(printfFormat),
        winston.format.colorize({all: true})
    ),
    transports: [new winston.transports.Console()]
};

export default DEVELOPMENT_LOGGER_CONFIG;