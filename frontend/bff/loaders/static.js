import { createLoggerNamespace } from '../logger/index.js';
import express from 'express';

const loaderLogger = createLoggerNamespace('groupomania:api:loader:static');

/**
 * Add all static routes.
 * @param {Express.Application} app - Express application
 */
export default function saticLoader(app) {
    loaderLogger.verbose('Loading the static routes');

    app.use(express.static('build', {
        index: false,
    }));
    loaderLogger.debug('Build static route added');
}