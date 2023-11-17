import { useContext, useEffect, useRef } from 'react';
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
    const { isOpen, openCause, anchor, dispatch } = useContext(tooltipContext);

    const currentAnchor = useRef(false);

    /** Opens the tooltip following an event on the anchor */
    function open(cause, newAnchor) {
        if (!isOpen || anchor !== newAnchor) {
            currentAnchor.current = true;
            dispatch({
                type: ACTIONS.open,
                payload: { value, anchor: newAnchor, cause },
            });
        }
    }

    /** Closes the tooltip following an event on the anchor */
    function close(cause) {
        if (isOpen && openCause === cause) {
            currentAnchor.current = false;
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

    /* Handling dynamic value changes */
    useEffect(() => {
        if (currentAnchor.current) {
            dispatch({ type: ACTIONS.setValue, payload: value });
        }
    }, [value, dispatch]);

    /* Closing the tooltip on dismount */
    useEffect(() => {
        return () => {
            if (currentAnchor.current) {
                currentAnchor.current = false;
                dispatch({ type: ACTIONS.close });
            }
        };
    }, [dispatch]);

    return {
        anchorEventHandlers: {
            onFocus: handleFocus,
            onBlur: handleBlur,
            onPointerEnter: handlePointerEnter,
            onPointerLeave: handlePointerLeave,
        },
    };
}
