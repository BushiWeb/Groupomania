import express from 'express';
import {createLoggerNamespace} from './logger/logger.js';
import loadApp from './loaders/index.js';

const appLogger = createLoggerNamespace('groupomania:api:app');

const app = express();
appLogger.verbose('App initialized');

await loadApp(app);

console.log(app._router.stack[7].handle.stack[0]);

export default app;
