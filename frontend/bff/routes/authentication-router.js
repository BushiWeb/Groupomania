import express from 'express';
import { createLoggerNamespace } from '../logger/index.js';
import loadBFFRouter from '../loaders/bff-router/index.js';

const routeLogger = createLoggerNamespace('groupomania:bff:route:bff-page');

const router = express.Router();
routeLogger.verbose('BFF router initialized');

loadBFFRouter(router);

export default router;