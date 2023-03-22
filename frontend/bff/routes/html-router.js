import express from 'express';
import { createLoggerNamespace } from '../logger/index.js';
import loadHTMLRouter from '../loaders/html-router/index.js';


const routeLogger = createLoggerNamespace('groupomania:bff:route:html-page');

const router = express.Router();
routeLogger.verbose('HTML router initialized');

loadHTMLRouter(router);

export default router;