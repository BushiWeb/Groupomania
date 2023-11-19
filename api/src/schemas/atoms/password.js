import config from '../../config/config.js';

const passwordConfiguration = config.get('password');

/**
 * Returns a password schema description.
 * @param {Object} [options] - Options to generate the schema.
 * @param {boolean} [options.required=true] - Weither to add the required option or not.
 * @param {boolean} [options.checkStrength=true] - Weither to check if the password is strong enough or not.
 * @param {Array} [location=['body']] - Where the email is located.
 */
export default function generatePasswordSchema(
    { required = true, checkStrength = true } = {},
    location = ['body']
) {
    return {
        in: location,

        ...required ?
            {
                exists: {
                    errorMessage: 'The password is required.',
                    options: {
                        checkNull: true,
                    },
                    bail: true,
                },
            } :
            {
                optional: {
                    options: { nullable: true },
                },
            },

        ...checkStrength && {
            isStrongPassword: {
                errorMessage: `The password must be stronger. It has to contain at least ${passwordConfiguration.minLength} characters, including at least ${passwordConfiguration.minLowercase} lowercase letters, ${passwordConfiguration.minUppercase} uppercase letters, ${passwordConfiguration.minNumbers} numbers and ${passwordConfiguration.minSymbols} symbols.`,
                options: passwordConfiguration,
            },
        },
    };
}