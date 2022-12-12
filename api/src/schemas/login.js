/**
 * Schema for the login request's body.
 * Contains a required email.
 * Contains a required password.
 */
const loginBodySchema = {
    email: {
        in: ['body'],
        exists: {
            errorMessage: 'The email is required.',
            options: {
                checkFalsy: true
            },
            bail: true
        },
        trim: true,
        isEmail: {
            errorMessage: 'The email must have the right format. It must contain your email username, followed by an @, followed by a domain name.',
            bail: true
        }
    },

    password: {
        in: ['body'],
        exists: {
            errorMessage: 'The password is required.',
            options: {
                checkFalsy: true
            }
        }
    }
};

export default loginBodySchema;