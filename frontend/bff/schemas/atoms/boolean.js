/**
 * Returns schema description for a boolean value.
 * @param {Object} [options] - Options to generate the schema.
 * @param {boolean} [options.required=false] - Weither to add the required option or not.
 * @param {boolean} [options.checkFormat=true] - Weither to check if the value has the right format or not.
 * @param {Array} [location=['body']] - Where the email is located.
 */
export default function generateBooleanSchema(
    { required = false, checkFormat = true } = {},
    location = ['body'],
) {
    return {
        in: location,

        ...(required ?
            {
                exists: {
                    errorMessage: 'The value is required.',
                    options: {
                        checkNull: true,
                    },
                    bail: true,
                },
            }
        :   {
                optional: {
                    options: { nullable: true },
                },
            }),

        ...(checkFormat && {
            isBoolean: {
                errorMessage:
                    'The value must be a boolean. Accepted values are true, yes, false, no, 0 and 1.',
                loose: true,
                bail: true,
            },
        }),

        toBoolean: true,
    };
}
