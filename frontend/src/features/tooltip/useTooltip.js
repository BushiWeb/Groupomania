import {
    useContext, useEffect,
} from 'react';
import { tooltipContext } from './tooltipContext.js';
import { ACTIONS, OPEN_CAUSE } from './tooltipReducer.js';

/**
 * Adds event handler to the anchor element in order to toggle and place the tooltip.
 * @param {string} value - Value of the tooltip.
 * @returns {
 *  anchorEventHandlers: {
 *    onFocus,
 *    onBlur,
 *    onPointerEnter,
 *    onPointerLeave,
 *  }
 * } Returns an object containing the event handlers to give to the anchor
 */
export default function useTooltip(value) {
    const {
        isOpen,
        openCause,
        anchor,
        dispatch,
    } = useContext(tooltipContext);

    /** Opens the tooltip following an event on the anchor */
    function open(cause, newAnchor) {
        if (!isOpen || anchor !== newAnchor) {
            dispatch({
                type: ACTIONS.open,
                payload: { value, anchor: newAnchor, cause },
            });
        }
    }

    /** Closes the tooltip following an event on the anchor */
    function close(cause) {
        if (isOpen && openCause === cause) {
            dispatch({ type: ACTIONS.close });
        }
    }

    /* Event handlers for the anchor. Opens on Focus and PointerEnter, closes respectively on Blur and PointerLeaver */
    function handleFocus(e) {
        open(OPEN_CAUSE.focus, e.currentTarget);
    }

    function handleBlur(e) {
        close(OPEN_CAUSE.focus);
    }

    function handlePointerEnter(e) {
        open(OPEN_CAUSE.hover, e.currentTarget);
    }

    function handlePointerLeave(e) {
        close(OPEN_CAUSE.hover);
    }

    /* Handling Escape press on the window to close the tooltip as well */
    useEffect(() => {
        function handleEscape(e) {
            if (e.key === 'Escape' && isOpen) {
                dispatch({ type: ACTIONS.close });
            }
        }

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [dispatch, isOpen]);

    /* Handling dynamic value changes */
    useEffect(() => {
        dispatch({ type: ACTIONS.setValue, payload: value });
    }, [value, dispatch]);

    return {
        anchorEventHandlers: {
            onFocus: handleFocus,
            onBlur: handleBlur,
            onPointerEnter: handlePointerEnter,
            onPointerLeave: handlePointerLeave,
        },
    };
}