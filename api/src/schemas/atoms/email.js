import config from '../../config/config.js';
import ForbiddenError from '../../errors/ForbiddenError.js';

/**
 * Returns an email schema description.
 * @param {Object} [options] - Options to generate the schema.
 * @param {boolean} [options.required=true] - Weither to add the required option or not.
 * @param {boolean} [options.checkFormat=true] - Weither to check if the email has the right format or not.
 * @param {boolean} [options.trim=true] - Weither to trim the email or not.
 * @param {Array} [location=['body']] - Where the email is located.
 */
export default function generateEmailSchema(
    { required=true, checkFormat=true, trim=true } = { required: true, checkFormat: true, trim: true },
    location = ['body']
) {
    return {
        in: location,

        ...(required ? {
            exists: {
                errorMessage: 'The email is required.',
                options: {
                    checkNull: true
                },
                bail: true
            }
        } : {
            optional: {
                options: { nullable: true }
            }
        }),

        ...(trim && { trim: true }),

        ...(checkFormat && {
            isEmail: {
                errorMessage: 'The email must have the right format. It must contain your email username, followed by an @, followed by a domain name.',
                bail: true
            },

            equals: {
                errorMessage: new ForbiddenError({
                    message: `The clients tried to use the ${config.get('adminUser.email')} email address.`,
                    title: 'You don\'t have the right to use this email address to sign up.',
                    description: `The email ${config.get('adminUser.email')} is reserved and can not be used. Please, change your sign up email address to another one.`
                }),
                negated: true,
                options: config.get('adminUser.email')
            }
        })
    };
}