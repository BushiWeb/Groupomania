import convict from 'convict';
import toml from '@ltd/j-toml';
import {access} from 'node:fs/promises';
import createLoggerNamespace from '../logger/logger-namespace.js';

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
    test: {
        format: String,
        default: 'test',
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