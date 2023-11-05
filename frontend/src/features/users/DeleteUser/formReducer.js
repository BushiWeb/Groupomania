/* eslint-disable no-mixed-operators */
export const ACTIONS = {
    setPassword: 'set_password',
    setPasswordError: 'set_password_error',
    removePasswordError: 'remove_password_error',
    setGlobalError: 'set_error',
    removeGlobalError: 'remove_global_error',
    removeErrors: 'remove_errors',
    reset: 'reset',
};

export const initialState = {
    password: '',
    passwordError: '',
    globalError: undefined,
};

export function reducer(state, action) {
    switch (action.type) {
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
        };
    case ACTIONS.reset:
        return initialState;
    default: return state;
    }
}