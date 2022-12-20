import { createLoggerNamespace } from '../logger/index.js';
import db from '../models/index.js';
import { createUser } from '../services/users.js';
import config from '../config/config.js';
import { generatePassword } from '../utils/password-generator.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:adminUser');

/**
 * Checks if an admin user is in the database and create one if not.
 * Logs the email and password. Those credentials should be modified right away.
 */
export default async function adminUserLoader () {
    loaderLogger.verbose('Checking for admin user');

    try {
        // Count the number of admin users
        const adminUserCount = await db.models.User.count({
            where: {
                roleId: config.get('adminUser.roleId')
            }
        });

        if (adminUserCount > 0) {
            loaderLogger.info('Admin user already created');
            return;
        }

        // Create a new admin user
        loaderLogger.debug('No admin user, creating one');
        const adminUserInfos = {
            email: config.get('adminUser.email'),
            password: generatePassword({ length: 12 }),
            roleId: config.get('adminUser.roleId')
        };
        await createUser(adminUserInfos);
        loaderLogger.info(
            'Admin user created. Make sure to update the authentication credentials as soon as possible.',
            {
                email: adminUserInfos.email,
                password: adminUserInfos.password
            }
        );

    } catch (error) {
        loaderLogger.fatal(error);
        process.exit(1);
    }
}