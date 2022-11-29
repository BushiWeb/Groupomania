import convict from 'convict';
import toml from '@ltd/j-toml';
import {access} from 'node:fs/promises';
import {createLoggerNamespace} from '../logger/logger.js';

const confLogger = createLoggerNamespace('groupomania:api:config');


// Add TOML parser to Convict
convict.addParser({extension: 'toml', parse: (source) => toml.parse(source, {joiner: '\n', bigint: false})});

// Define configuration schema
let config = convict({
    env: {
        doc: 'Environment in which the API is running, e.g. development, production or test.',
        format: String,
        default: 'development',
        env: 'NODE_ENV',
        arg: 'env'
    },
    port: {
        doc: 'Port number on which the API is running.',
        format: 'port',
        default: 3000,
        env: 'PORT',
        arg: 'port'
    },
    passwordHash: {
        saltRound: {
            doc: 'Number of rounds for the bcrypt algorithm',
            format: 'int',
            default: 10,
            env: 'SALT_ROUND'
        }
    },
    cors: {
        origin: {
            doc: 'Access-Control-Allow-Origin header value. Can be a string with one origin, an array with multiple origins, true to accept all origins and false to disable CORS.',
            format: '*',
            default: true,
            nullable: false
        },
        methods: {
            doc: 'Access-Control-Allow-Methods header value.',
            format: Array,
            default: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTION'],
            nullable: false
        },
        allowedHeaders: {
            doc: 'Access-Control-Allow-Headers header value. If null, reflects the value of Access-Control-Request-Headers.',
            format: Array,
            default: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization'],
            nullable: true
        },
        exposedHeaders: {
            doc: 'Access-Control-Expose-Headers header value. If null, no custom headers are exposed.',
            format: Array,
            default: null,
            nullable: true
        },
        credentials: {
            doc: 'Access-Control-Allow-Credentials header value. If set to true, the header os passed with the response. If null, the header is not sent.',
            format: Boolean,
            default: null,
            nullable: true
        },
        maxAge: {
            doc: 'Access-Control-Max-Age header value. If null, the parameter is omitted.',
            format: 'int',
            default: null,
            nullable: true
        }
    },
    db: {
        sgbd: {
            doc: 'SGBD used to store the data, must be a valid sequelize dialect value',
            format: String,
            default: 'postgres',
            env: 'DB_SGBD'
        },
        name: {
            doc: 'Database name',
            format: String,
            default: null,
            nullable: false,
            env: 'DB_NAME'
        },
        username: {
            doc: 'Username to use to connect to the database',
            format: String,
            default: null,
            nullable: false,
            env: 'DB_USER'
        },
        password: {
            doc: 'Password associated to the username',
            format: String,
            default: null,
            nullable: false,
            env: 'DB_PASSWORD'
        },
        host: {
            doc: 'Database host',
            format: String,
            default: 'localhost',
            env: 'DB_HOST'
        },
        port: {
            doc: 'Database port',
            format: 'int',
            default: 5432,
            env: 'DB_PORT'
        },
        protocol: {
            doc: 'Database connection protocol',
            format: String,
            default: 'tcp',
            env: 'DB_PROTOCOL'
        },
        useSSL: {
            doc: 'Weither to use SSL or not',
            format: Boolean,
            default: false,
            env: 'DB_SSL'
        }
    }
});
confLogger.debug('Configuration schema created');

// Import global configuration files
config.loadFile('./config/config.toml');
confLogger.debug('Global configuration loaded');

// Import environment specific configuration files
const envConfigFileName = `./config/${config.get('env')}-config.toml`;
try {
    confLogger.debug(`Trying to access ${envConfigFileName}`);
    await access(envConfigFileName);
    config.loadFile(envConfigFileName);
} catch (error) {
    confLogger.error(error);
    confLogger.warn(`${envConfigFileName} doesn't exist, no environment specific configuration is loaded.`);
}
confLogger.verbose('Configuration files loaded');

// Validate configuration
config.validate({allowed: 'strict', output: confLogger.warn});
confLogger.verbose('Configuration validated');

export default config;