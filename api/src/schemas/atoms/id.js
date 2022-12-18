/**
 * Returns an id schema description.
 * @param {Object} [options] - Options to generate the schema.
 * @param {boolean} [options.checkFormat=true] - Weither to check if the email has the right format or not.
 * @param {Array} [location=['params']] - Where the email is located.
 */
export default function generateIdSchema(
    { checkFormat=true } = { checkFormat: true },
    location = ['params']
) {
    return {
        in: location,

        ...(checkFormat && {
            isInt: {
                errorMessage: 'The user id must be an integer.',
                bail: true
            }
        }),

        toInt: true,
    };
}