export const ACTIONS = {
    setTitle: 'set_title',
    setTitleError: 'set_title_error',
    removeTitleError: 'remove_title_error',
    setMessage: 'set_message',
    setMessageError: 'set_message_error',
    removeMessageError: 'remove_message_error',
    removeErrors: 'remove_errors',
    reset: 'reset',
};

export const initialState = {
    title: '',
    titleError: undefined,
    message: '',
    messageError: undefined,
    globalError: undefined,
};

export function reducer(state, action) {
    switch (action.type) {
    case ACTIONS.setTitle:
        return {
            ...state,
            title: action.payload,
        };
    case ACTIONS.setTitleError:
        return {
            ...state,
            titleError: action.payload,
        };
    case ACTIONS.removeTitleError:
        return {
            ...state,
            titleError: undefined,
        };
    case ACTIONS.setMessage:
        return {
            ...state,
            message: action.payload,
        };
    case ACTIONS.setMessageError:
        return {
            ...state,
            messageError: action.payload,
        };
    case ACTIONS.removeMessageError:
        return {
            ...state,
            messageError: undefined,
        };
    case ACTIONS.removeErrors:
        return {
            ...state,
            globalError: undefined,
            titleError: undefined,
            messageError: undefined,
        };
    case ACTIONS.reset:
        return initialState;
    default: return state;
    }
}