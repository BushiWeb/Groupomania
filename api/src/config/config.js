import convict from 'convict';

// Define configuration schema
let config = convict({
    env: {
        doc: 'Environment in which the API is running, e.g. development, production or test.',
        format: String,
        default: 'development',
        env: 'NODE_ENV'
    },
    port: {
        doc: 'Port number on which the API is running.',
        format: 'port',
        default: 3000,
        env: 'PORT'
    },
});

// Validate configuration
config.validate({allowed: 'strict'});

export default config;