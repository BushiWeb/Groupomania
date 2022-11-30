import config from '../config/config.js';

const passwordConfiguration = config.get('password');

/**
 * Schema for the create user request's body.
 * Contains an required email.
 * Contains a required, strong password. Password strength can be changed in the configuration.
 */
const createUserBodySchema = {
    email: {
        in: ['body'],
        exists: {
            errorMessage: 'The email is required.',
            options: {
                checkFalsy: true
            },
            bail: true
        },
        trim: true,
        isEmail: {
            errorMessage: 'The email must have the right format. It must contain your email username, followed by an @, followed by a domain name.',
            bail: true
        }
    },

    password: {
        in: ['body'],
        exists: {
            errorMessage: 'The password is required.',
            options: {
                checkFalsy: true
            },
            bail: true
        },
        isStrongPassword: {
            errorMessage: `The password must be stronger. It has to contain at least ${passwordConfiguration.minLength} characters, including at least ${passwordConfiguration.minLowercase} lowercase letters, ${passwordConfiguration.minUppercase} uppercase letters, ${passwordConfiguration.minNumbers} numbers and ${passwordConfiguration.minSymbols} symbols.`,
            options: passwordConfiguration
        }
    }
};

export default createUserBodySchema;