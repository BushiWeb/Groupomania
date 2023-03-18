import express from 'express';
import { createLoggerNamespace } from './logger/index.js';
import loadApp from './loaders/index.js';

const appLogger = createLoggerNamespace('groupomania:bff:app');

const app = express();
appLogger.verbose('App initialized');

await loadApp(app);

export default app;
