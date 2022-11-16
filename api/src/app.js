import express from 'express';
import createLoggerNamespace from './logger/logger-namespace.js';

const appLogger = createLoggerNamespace('groupomania:api:app');

const app = express();
appLogger.verbose('App initialized');

export default app;
