/* eslint-disable no-mixed-operators */
export const ACTIONS = {
    setRole: 'set_role',
    setRoleError: 'set_role_error',
    removeRoleError: 'remove_role_error',
    setPassword: 'set_password',
    setPasswordError: 'set_password_error',
    removePasswordError: 'remove_password_error',
    setGlobalError: 'set_error',
    removeGlobalError: 'remove_global_error',
    removeErrors: 'remove_errors',
    reset: 'reset',
};

export const initialState = {
    roleId: undefined,
    roleError: '',
    password: '',
    passwordError: '',
    globalError: undefined,
};

export function initState({ roleId }) {
    return {
        ...initialState,
        roleId,
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.setRole:
            return {
                ...state,
                roleId: action.payload,
            };
        case ACTIONS.setRoleError:
            return {
                ...state,
                roleError: action.payload,
            };
        case ACTIONS.removeRoleError:
            return {
                ...state,
                roleError: undefined,
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
                roleError: undefined,
                passwordError: undefined,
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
export function isUserRoleUpdated(currentState, initialState) {
    return (
        (!initialState && currentState.roleId) ||
        currentState.roleId !== initialState.roleId
    );
}
