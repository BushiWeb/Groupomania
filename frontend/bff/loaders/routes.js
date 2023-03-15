import { createLoggerNamespace } from '../logger/index.js';
import getRoutesRegexp from '../utils/get-routes.js';
import express from 'express';
import config from '../config/config.js';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:routes');

/**
 * Add all users related routes and middlewares.
 * @param {Express.Application} app - Express application
 */
export default function routeLoader(app) {
    loaderLogger.verbose('Loading users routes and middlewares');

    // Finds all available routes to analyse errors
    app.set('routes-regexp', getRoutesRegexp(app));
    loaderLogger.debug(`All route's regexps found: ${app.get('routes-regexp')}`);

}