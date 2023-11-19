import { createLoggerNamespace } from '../logger/index.js';
import Bree from 'bree';
import Graceful from '@ladjs/graceful';
import config from '../config/config.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:jobs');
const breeLogger = createLoggerNamespace('groupomania:api:bree');

/**
 * Create and lauch all jobs.
 */
export default async function jobsLoader() {
    loaderLogger.verbose('Loading jobs');

    const bree = new Bree({
        logger: breeLogger,
        root: './src/jobs',
        silenceRootCheckError: true,
        outputWorkerMetadata: true,
        errorHandler: (error, workerMetadata) => {
            breeLogger.error({ message: error, workerMetadata });
        },
        workerMessageHandler: (message) => {
            const logMessage = `Worker "${message.name}" sent the following message: "${message.message}"`;
            breeLogger.verbose({ message: logMessage, workerInformations: message.worker });
        },
        worker: {
            argv: ['--env', config.get('env')],
        },
    });

    // Handling graceful shutdowns
    const graceful = new Graceful({
        brees: [bree],
    });
    graceful.listen();
    loaderLogger.debug('Handling graceful shutdowns for Bree');

    await bree.start();
    loaderLogger.debug('Jobs started');
}