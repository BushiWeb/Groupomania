import CONFIG_SCHEMA from './config-schema.js';

const TEST_CONFIG_SCHEMA = { ...CONFIG_SCHEMA };

delete TEST_CONFIG_SCHEMA.env.arg;
TEST_CONFIG_SCHEMA.env.default = 'test';
delete TEST_CONFIG_SCHEMA.port.arg;
TEST_CONFIG_SCHEMA.session.secret.default = 'blackCat';

export default TEST_CONFIG_SCHEMA;
