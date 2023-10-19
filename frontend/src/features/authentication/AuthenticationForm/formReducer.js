export const ACTIONS = {
    setEmail: 'set_email',
    setEmailError: 'set_email_error',
    removeEmailError: 'remove_email_error',
    setPassword: 'set_password',
    setPasswordError: 'set_password_error',
    removePasswordError: 'remove_password_error',
    setRememberMe: 'set_remember_me',
    setGlobalError: 'set_error',
    removeGlobalError: 'remove_global_error',
    removeErrors: 'remove_errors',
    reset: 'reset',
};

export const initialState = {
    email: '',
    emailError: undefined,
    password: '',
    passwordError: undefined,
    rememberMe: false,
    globalError: undefined,
};

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
    case ACTIONS.setPassword:
        return {
            ...state,
            password: action.payload,
        };
    case ACTIONS.setPasswordError:
        return {
            ...state,
            passwordError: action.payload,
        };
    case ACTIONS.removePasswordError:
        return {
            ...state,
            passwordError: undefined,
        };
    case ACTIONS.setRememberMe:
        return {
            ...state,
            rememberMe: action.payload,
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
            passwordError: undefined,
            emailError: undefined,
        };
    case ACTIONS.reset:
        return initialState;
    default: return state;
    }
}