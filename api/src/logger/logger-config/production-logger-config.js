import winston from 'winston';
import 'winston-daily-rotate-file';

function jsonReplacer(key, value) {
    if (key === 'splat') {
        return undefined;
    }

    return value;
}

const PRODUCTION_LOGGER_CONFIG = {
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss.SSS'}),
        winston.format.errors({stack: true}),
        winston.format.splat(),
        winston.format.json({replacer: jsonReplacer})
    ),
    transports: [
        new winston.transports.DailyRotateFile({
            filename: 'log-%DATE%',
            extension: '.log',
            datePattern: 'YYYY-MM-DD',
            maxSize: '20m',
            dirname: './logs',
            zippedArchive: true
        })]
};

export default PRODUCTION_LOGGER_CONFIG;