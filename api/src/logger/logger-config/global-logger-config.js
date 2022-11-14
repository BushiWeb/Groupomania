import winston from 'winston';

const LOGGER_CONFIG = {
    levels: {
        fatal: 0,
        error: 1,
        warn: 2,
        info: 3,
        http: 4,
        verbose: 5,
        debug: 6
    },
    level: 'info',
    colors: {
        fatal: 'red bold',
        error: 'red',
        warn: 'yellow',
        info: 'green',
        http: 'cyan',
        verbose: 'white',
        debug: 'gray'
    },
    exitOnError: true,
    format: winston.format.simple(),
    transports: [new winston.transports.Console()]
};

export default LOGGER_CONFIG;