import { initDatabaseConnection } from '../models/index.js';
import { parentPort } from 'worker_threads';
import { createLoggerNamespace } from '../logger/index.js';
import { Op, Sequelize } from 'sequelize';
import createRefreshTokenModel from '../models/RefreshToken.js';

const jobsLogger = createLoggerNamespace('groupomania:job:deleteExpiredRefreshTokens');

// Delete all refresh tokens whose expiration date are already passed.
/* const numberOfDeletedTokens = await db.models.RefreshToken.destroy({
    where: {

    }
}); */
jobsLogger.info('Starting deleteExpiredRefreshTokens job');
try {
    const sequelize = await initDatabaseConnection();
    jobsLogger.debug('Database connection established');
    const RefreshToken = createRefreshTokenModel(sequelize);
    jobsLogger.debug('Refresh token model created');

    const deletedTokensNumber = await RefreshToken.destroy({
        where: {
            expiration: {
                [Op.lt]: Sequelize.fn('current_timestamp', 0)
            }
        }
    });
    const message = `Refresh tokens deleted: ${deletedTokensNumber}`;
    jobsLogger.debug(message);
    parentPort.postMessage(message);
} catch (error) {
    jobsLogger.error(error);
    process.exit(1);
}

process.exit(0);