import { createLoggerNamespace } from '../logger/index.js';
import axios from 'axios';
import config from '../config/config.js';

const loaderLogger = createLoggerNamespace('groupomania:bff:loader:axios');

/**
 * Setup the axios default values.
 */
export default function axiosLoader() {
    loaderLogger.verbose('Axios setup loading');

    axios.defaults.baseURL = `${config.get('api.protocol')}://${config.get('api.baseUrl')}:${config.get('api.port')}${config.get('api.baseRoutePath')}`;
}