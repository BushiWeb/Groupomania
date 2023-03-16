import { createLoggerNamespace } from '../logger/index.js';
import getRoutesRegexp from '../utils/get-routes.js';
import HTMLRouter from '../routes/html-router.js';
import express from 'express';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:routes');

/**
 * Add all users related routes and middlewares.
 * @param {Express.Application} app - Express application
 */
export default function routeLoader(app) {
    loaderLogger.verbose('Loading users routes and middlewares');

    // Add the static routes
    app.use(express.static('build', {
        index: false,
    }));
    loaderLogger.debug('Build static route added');

    // Add the route to serve the HTML page
    app.use('/', HTMLRouter);
    loaderLogger.debug('HTML serving route added');

    // Finds all available routes to analyse errors
    app.set('routes-regexp', getRoutesRegexp(app));
    loaderLogger.debug(`All route's regexps found: ${app.get('routes-regexp')}`);

}