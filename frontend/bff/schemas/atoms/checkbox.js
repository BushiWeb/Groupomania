/**
 * Returns schema description a checkbox.
 * @param {Object} [options] - Options to generate the schema.
 * @param {boolean} [options.required=true] - Weither to add the required option or not.
 * @param {boolean} [options.checkFormat=true] - Weither to check if the parameter has the right format or not.
 * @param {Array} [location=['body']] - Where the email is located.
 */
export default function generateCheckboxSchema(
    { required = true, checkFormat = true } = {},
    location = ['body']
) {
    return {
        in: location,

        ...required ?
            {
                exists: {
                    errorMessage: 'The value is required.',
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
                errorMessage: 'The parameter must be a boolean..',
                loose: true,
                bail: true,
            },
        },

        toBoolean: true,
    };
}