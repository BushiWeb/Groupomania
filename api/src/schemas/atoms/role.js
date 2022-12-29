/**
 * Returns an role schema description.
 * @param {Object} [options] - Options to generate the schema.
 * @param {boolean} [options.required=false] - Weither to add the required option or not.
 * @param {boolean} [options.checkFormat=true] - Weither to check if the email has the right format or not.
 * @param {boolean} [options.allowString=true] - Weither the role can also be a role name or just a role id.
 * @param {Array} [location=['query']] - Where the email is located.
 */
export default function generateRoleSchema(
    { required = false, checkFormat = true, allowString = true } = {},
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

        ...checkFormat && allowString && {
            isString: {
                errorMessage: 'The parameter must either be a string or an integer.',
                bail: true,
            },
            customSanitizer: {
                options: value => {
                    const intRegexp = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
                    if (intRegexp.test(value)) {
                        return parseInt(value);
                    }

                    return value;
                },
            },
        },

        ...checkFormat && !allowString && {
            isInt: {
                errorMessage: 'The role id must be an integer.',
                bail: true,
            },

            toInt: true,
        },
    };
}