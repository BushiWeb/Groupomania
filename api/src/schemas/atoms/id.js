/**
 * Returns an id schema description.
 * @param {Object} [options] - Options to generate the schema.
 * @param {boolean} [options.required=false] - Weither the id is required or not.
 * @param {boolean} [options.checkFormat=true] - Weither to check if the id has the right format or not.
 * @param {Array} [location=['params']] - Where the id is located.
 */
export default function generateIdSchema(
    { required = true, checkFormat = true } = {},
    location = ['params']
) {
    return {
        in: location,

        ...required ?
            {
                exists: {
                    errorMessage: 'The id is required.',
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
            isInt: {
                errorMessage: 'The id must be an integer.',
                bail: true,
            },
        },

        toInt: true,
    };
}