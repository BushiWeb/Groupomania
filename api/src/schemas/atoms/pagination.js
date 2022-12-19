/**
 * Returns an role schema description.
 * @param {Object} [options] - Options to generate the schema.
 * @param {boolean} [options.required=false] - Weither to add the required option or not.
 * @param {boolean} [options.checkFormat=true] - Weither to check if the email has the right format or not.
 * @param {Array} [location=['query']] - Where the email is located.
 */
export default function generatePaginationSchema(
    { required=false, checkFormat=true } = { required: false, checkFormat: true },
    location = ['query']
) {
    return {
        in: location,

        ...(required ? {
            exists: {
                errorMessage: 'The parameter is required.',
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

        ...(checkFormat && {
            isInt: {
                errorMessage: 'The parameter must be an integer greater or equal than 1.',
                options: {
                    min: 1
                }
            }
        }),

        toInt: true
    };
}