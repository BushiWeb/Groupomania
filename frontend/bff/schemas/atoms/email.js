/**
 * Returns an email schema description.
 * @param {Object} [options] - Options to generate the schema.
 * @param {boolean} [options.required=true] - Weither to add the required option or not.
 * @param {boolean} [options.checkFormat=true] - Weither to check if the email has the right format or not.
 * @param {boolean} [options.trim=true] - Weither to trim the email or not.
 * @param {Array} [location=['body']] - Where the email is located.
 */
export default function generateEmailSchema(
    { required = true, checkFormat = true, trim = true } = {},
    location = ['body'],
) {
    return {
        in: location,

        ...(required ?
            {
                exists: {
                    errorMessage: 'The email is required.',
                    options: {
                        checkFalsy: true,
                    },
                    bail: true,
                },
            }
        :   {
                optional: {
                    options: { nullable: true },
                },
            }),

        ...(trim && { trim: true }),

        ...(checkFormat && {
            isEmail: {
                errorMessage:
                    'The email must have the right format. It must contain your email username, followed by an @, followed by a domain name.',
                bail: true,
            },
        }),
    };
}
