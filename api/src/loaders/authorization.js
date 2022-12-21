import { createLoggerNamespace } from '../logger/index.js';
import { accessControlRules, parseAccessControlRules, rawRules } from '../authorisation/index.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:authorization');

/**
 * Initialize connection to the database.
 */
export default function accessControlLoader () {
    loaderLogger.verbose('Access control rules loading');

    // Parsing access control rules
    accessControlRules.parsedRules = parseAccessControlRules(rawRules);
    loaderLogger.verbose('Access control rules parsed');
}