import { getEnvironment } from '../utils/utils.js';
import LOGGER_CONFIG from './logger-config/global-logger-config.js';


let winstonOptions = {...LOGGER_CONFIG};

// Try to load environment specific logger configuration.
let environment = getEnvironment();

try {
    let {default: environmentConfig} = await import(`./logger-config/${environment}-logger-config.js`);
    console.log(`${environment} environment specific logger configuration loaded`);
    winstonOptions = {...winstonOptions, ...environmentConfig};
} catch (error) {
    console.error(error);
    console.log('No environment specific logger configuration found.');
}

export default winstonOptions;