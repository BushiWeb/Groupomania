import isEmail from 'validator/lib/isEmail.js';
import isStrongPassword from 'validator/lib/isStrongPassword.js';

export const ERROR_MESSAGES = {
    requiredEmail: 'L\'email est obligatoire',
    requiredPassword: 'Le mot de passe est obligatoire',
    wrongEmail: 'L\'email doit avoir du type "exemple@email.com"',
    wrongPassword: 'Le mot de passe doit contenir 8 caractères dont au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 symbole',
    existingAccount: 'Un compte avec cet email existe déjà, veuillez vous connecter',
};

/**
 * Validate form data for the signup actions.
 * Email is required and should have good form.
 * Password is required and should be strong.
 * @param {{email, password}} - Data to validate
 * @throws Throws if there is an error
 */
export function validateSignupData({ email, password }) {
    const errors = {};

    if (!email) {
        errors.email = ERROR_MESSAGES.requiredEmail;
    } else if (!isEmail(email)) {
        errors.email = ERROR_MESSAGES.wrongEmail;
    }

    if (!password) {
        errors.password = ERROR_MESSAGES.requiredPassword;
    } else if (!isStrongPassword(password)) {
        errors.password = ERROR_MESSAGES.wrongPassword;
    }

    if (Object.keys(errors).length !== 0) {
        throw errors;
    }
}

/**
 * Handles frontend validation errors
 * @param {Object} error - Response returned containing the error.
 * @returns {{email: string, password: string}} Returns an object container the error message for each field
 */
export function handleSignupValidationError(error) {
    return {
        email: error.email,
        password: error.password,
    };
}