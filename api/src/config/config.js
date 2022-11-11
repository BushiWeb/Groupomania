import convict from 'convict';
import toml from '@ltd/j-toml';
import {access} from 'node:fs/promises';


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
        default: 'test'
    }
});

// Import global configuration files
config.loadFile('./config/config.toml');

// Import environment specific configuration files
const envConfigFileName = `./config/${config.get('env')}-config.toml`;
try {
    await access(envConfigFileName);
    config.loadFile(envConfigFileName);
} catch (error) {
    console.log(`${envConfigFileName} doesn't exist, no environment specific configuration is loaded.`);
}

// Validate configuration
config.validate({allowed: 'strict'});

export default config;