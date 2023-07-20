/**
 * Returns a password schema description.
 * @param {Object} [options] - Options to generate the schema.
 * @param {boolean} [options.required=true] - Weither to add the required option or not.
 * @param {Array} [location=['body']] - Where the email is located.
 */
export default function generatePasswordSchema(
    { required = true } = {},
    location = ['body']
) {
    return {
        in: location,

        ...required ?
            {
                exists: {
                    errorMessage: 'The password is required.',
                    options: {
                        checkFalsy: true,
                    },
                    bail: true,
                },
            } :
            {
                optional: {
                    options: { nullable: true },
                },
            },
    };
}