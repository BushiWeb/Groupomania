/* eslint-disable no-mixed-operators */
export const ACTIONS = {
    setEmail: 'set_email',
    setEmailError: 'set_email_error',
    removeEmailError: 'remove_email_error',
    setOldPassword: 'set_old_password',
    setOldPasswordError: 'set_old_password_error',
    removeOldPasswordError: 'remove_old_password_error',
    setNewPassword: 'set_new_password',
    setNewPasswordError: 'set_new_password_error',
    removeNewPasswordError: 'remove_new_password_error',
    setGlobalError: 'set_error',
    removeGlobalError: 'remove_global_error',
    removeErrors: 'remove_errors',
    reset: 'reset',
};

export const initialState = {
    email: '',
    emailError: undefined,
    oldPassword: '',
    oldPasswordError: undefined,
    newPassword: '',
    newPasswordError: undefined,
    globalError: undefined,
};

export function initState({ email }) {
    return {
        ...initialState,
        email,
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.setEmail:
            return {
                ...state,
                email: action.payload,
            };
        case ACTIONS.setEmailError:
            return {
                ...state,
                emailError: action.payload,
            };
        case ACTIONS.removeEmailError:
            return {
                ...state,
                emailError: undefined,
            };
        case ACTIONS.setOldPassword:
            return {
                ...state,
                oldPassword: action.payload,
            };
        case ACTIONS.setOldPasswordError:
            return {
                ...state,
                oldPasswordError: action.payload,
            };
        case ACTIONS.removeOldPasswordError:
            return {
                ...state,
                oldPasswordError: undefined,
            };
        case ACTIONS.setNewPassword:
            return {
                ...state,
                newPassword: action.payload,
            };
        case ACTIONS.setNewPasswordError:
            return {
                ...state,
                newPasswordError: action.payload,
            };
        case ACTIONS.removeNewPasswordError:
            return {
                ...state,
                newPasswordError: undefined,
            };
        case ACTIONS.setGlobalError:
            return {
                ...state,
                globalError: action.payload,
            };
        case ACTIONS.removeGlobalError:
            return {
                ...state,
                globalError: undefined,
            };
        case ACTIONS.removeErrors:
            return {
                ...state,
                globalError: undefined,
                emailError: undefined,
                newPasswordError: undefined,
                oldPasswordError: undefined,
            };
        case ACTIONS.reset:
            return initialState;
        default:
            return state;
    }
}

/**
 * Checks weither the user form has been updated or not.
 * Since the old password is only here to confirm the identity and don't imply changes, it won't count towards
 *  form completion.
 * @param {Object} currentState - The current state, after updating
 * @param {Object} initialState - The state of the post when the dialog was opened
 * @returns {boolean} Returns true if the post has been updated
 */
export function isUserUpdated(currentState, initialState) {
    return (
        (!initialState && currentState.email !== '') ||
        currentState.email !== initialState.email ||
        currentState.newPassword !== ''
    );
}
