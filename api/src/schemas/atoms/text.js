import config from '../../config/config.js';

/**
 * Returns an text schema description.
 * @param {Object} [options] - Options to generate the schema.
 * @param {boolean} [options.required=false] - Weither to add the required option or not.
 * @param {boolean} [option.sanitize=true] - Weither to sanitize the text or not.
 * @param {Array} [location=['body']] - Where the email is located.
 */
export default function generateTextSchema(
    { required=false, sanitize=true } = {},
    location = ['body']
) {
    return {
        in: location,

        ...(required ? {
            exists: {
                errorMessage: 'The text is required.',
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

        ...(sanitize && {
            customSanitizer: {
                options: (value) => {
                    let newValue = value;
                    for (const blackListed of config.get('payload.sanitization')) {
                        newValue = newValue.replace(new RegExp(blackListed), '');
                    }
                    return newValue;
                }
            }
        })
    };
}