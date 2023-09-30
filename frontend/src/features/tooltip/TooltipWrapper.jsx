import {
    useReducer, useRef,
} from 'react';
import TooltipLabel from './TooltipLabel';
import { tooltipContext } from './tooltipContext';
import { initialState, reducer } from './tooltipReducer';

/**
 * Adds tooltip to the application
 */
export default function TooltipWrapper({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const openTimeoutRef = useRef(null);
    const closeTimeoutRef = useRef(null);

    return <tooltipContext.Provider value={{
        ...state,
        dispatch,
        openTimeoutRef,
        closeTimeoutRef,
    }}>
        {children}
        <TooltipLabel/>
    </tooltipContext.Provider>;
}