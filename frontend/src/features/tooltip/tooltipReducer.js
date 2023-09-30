export const ACTIONS = {
    open: 'open',
    close: 'close',
    setValue: 'set_value',
};

export const OPEN_CAUSE = {
    focus: 'focus',
    hover: 'hover',
    hoverTooltip: 'hover_tooltip',
};

export const initialState = {
    isOpen: false,
    value: '',
    openCause: null,
    anchor: null,
};

export function reducer(state, action) {
    switch (action.type) {
    case ACTIONS.setValue:
        return {
            ...state,
            value: action.payload,
        };
    case ACTIONS.open:
        return {
            isOpen: true,
            value: action.payload.value,
            openCause: action.payload.cause,
            anchor: action.payload.anchor,
        };
    case ACTIONS.close:
        return initialState;
    default: return state;
    }
}