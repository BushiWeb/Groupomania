import CONFIG_SCHEMA from './config-schema.js';

const TEST_CONFIG_SCHEMA = {...CONFIG_SCHEMA};

delete TEST_CONFIG_SCHEMA.env.arg;
TEST_CONFIG_SCHEMA.env.default = 'test';
delete TEST_CONFIG_SCHEMA.port.arg;
TEST_CONFIG_SCHEMA.db.name.nullable = true;
TEST_CONFIG_SCHEMA.db.username.nullable = true;
TEST_CONFIG_SCHEMA.db.password.nullable = true;
TEST_CONFIG_SCHEMA.jwt.key.default = 'test';

export default TEST_CONFIG_SCHEMA;