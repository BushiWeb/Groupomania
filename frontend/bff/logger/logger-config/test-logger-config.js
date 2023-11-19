import winston from 'winston';

const TEST_LOGGER_CONFIG = {
    level: 'fatal',
    format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.simple(),
        winston.format.colorize({ all: true }),
    ),
    transports: [new winston.transports.Console()],
};

export default TEST_LOGGER_CONFIG;
