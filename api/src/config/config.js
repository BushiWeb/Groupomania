import convict from 'convict';
import toml from '@ltd/j-toml';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';


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
    }
});

// Import configuration files
config.loadFile(join(dirname(fileURLToPath(import.meta.url)), 'config.toml'));

// Validate configuration
config.validate({allowed: 'strict'});

export default config;