/**
 * Returns schema description for query parameters asking for more informations.
 * @param {Object} [options] - Options to generate the schema.
 * @param {boolean} [options.required=false] - Weither to add the required option or not.
 * @param {boolean} [options.checkFormat=true] - Weither to check if the parameter has the right format or not.
 * @param {Array} [location=['query']] - Where the email is located.
 */
export default function generateMoreInfoSchema(
    { required = false, checkFormat = true } = {},
    location = ['query']
) {
    return {
        in: location,

        ...required ?
            {
                exists: {
                    errorMessage: 'The parameter is required.',
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

        ...checkFormat && {
            isBoolean: {
                errorMessage: 'The parameter must be a boolean. Accepted values are true, yes, false, no, 0 and 1.',
                loose: true,
                bail: true,
            },
        },

        toBoolean: true,
    };
}