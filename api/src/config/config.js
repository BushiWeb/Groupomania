import convict from 'convict';
import toml from '@ltd/j-toml';
import { access } from 'node:fs/promises';
import { createLoggerNamespace } from '../logger/index.js';
import { getEnvironment } from '../utils/utils.js';

const confLogger = createLoggerNamespace('groupomania:api:config');


// Add TOML parser to Convict
convict.addParser({ extension: 'toml', parse: (source) => toml.parse(source, { joiner: '\n', bigint: false }) });

// Define configuration schema
const environment = getEnvironment();
const { default: CONFIG_SCHEMA } = await (environment === 'test' ? import('./test-config-schema.js') : import('./config-schema.js'));
let config = convict(CONFIG_SCHEMA);
confLogger.debug(`Configuration schema created for environment ${environment}`);

// Import global configuration files
config.loadFile('./config/config.toml');
confLogger.debug('Global configuration loaded');

// Import environment specific configuration files
const envConfigFileName = `./config/${environment}-config.toml`;
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
config.validate({ allowed: 'strict', output: confLogger.warn });
confLogger.verbose('Configuration validated');

export default config;