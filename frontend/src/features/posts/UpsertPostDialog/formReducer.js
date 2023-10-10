/* eslint-disable no-mixed-operators */
export const ACTIONS = {
    setTitle: 'set_title',
    setTitleError: 'set_title_error',
    removeTitleError: 'remove_title_error',
    setMessage: 'set_message',
    setMessageError: 'set_message_error',
    removeMessageError: 'remove_message_error',
    setImage: 'set_image',
    setImageError: 'set_image_error',
    removeImageError: 'remove_image_error',
    setGlobalError: 'set_error',
    removeGlobalError: 'remove_global_error',
    removeErrors: 'remove_errors',
    reset: 'reset',
};

export const initialState = {
    title: '',
    titleError: undefined,
    message: '',
    messageError: undefined,
    image: null,
    imageError: undefined,
    globalError: undefined,
};

export function initState(initialArg) {
    return {
        title: initialArg?.title || '',
        titleError: undefined,
        message: initialArg?.message || '',
        messageError: undefined,
        image: initialArg?.imageUrl || null,
        imageError: undefined,
        globalError: undefined,
    };
}

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
    case ACTIONS.setImage:
        return {
            ...state,
            image: action.payload,
        };
    case ACTIONS.setImageError:
        return {
            ...state,
            imageError: action.payload,
        };
    case ACTIONS.removeImageError:
        return {
            ...state,
            imageError: undefined,
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
            titleError: undefined,
            messageError: undefined,
            imageError: undefined,
        };
    case ACTIONS.reset:
        return initialState;
    default: return state;
    }
}

/**
 * Checks weither the post has been updated or not
 * @param {Object} currentState - The current state, after updating
 * @param {Object} initialState - The state of the post when the dialog was opened
 * @returns {boolean} Returns true if the post has been updated
 */
export function isPostUpdated(currentState, initialState) {
    if (!initialState) {
        return currentState.message !== '' || currentState.title !== '' || currentState.image !== null;
    }
    return (
        currentState.title !== initialState.title ||
        currentState.message !== initialState.message ||
        currentState.image instanceof File ||
        !currentState.image && initialState.imageUrl
    );
}