import express from 'express';
import {createLoggerNamespace} from './logger/logger.js';
import loadApp from './loaders/index.js';

const appLogger = createLoggerNamespace('groupomania:api:app');

const app = express();
appLogger.verbose('App initialized');

loadApp(app);

export default app;
