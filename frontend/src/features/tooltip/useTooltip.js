import {
    useCallback, useContext, useEffect, useRef,
} from 'react';
import { tooltipContext } from './tooltipContext.js';
import { ACTIONS, OPEN_CAUSE } from './tooltipReducer.js';

/**
 * Adds event handler to the anchor element in order to toggle and place the tooltip.
 * @param {string} value - Value of the tooltip.
 * @returns Returns a ref function to give to the anchor element.
 */
export default function useTooltip(value) {
    const ref = useRef(null);
    const {
        isOpen,
        openCause,
        anchor,
        dispatch,
    } = useContext(tooltipContext);

    /** Opens the tooltip following an event on the anchor */
    const open = useCallback((cause, newAnchor) => {
        if (openCause === null || anchor !== newAnchor) {
            dispatch({
                type: ACTIONS.open,
                payload: { value, anchor: newAnchor, cause },
            });
        }
    }, [openCause, dispatch, anchor, value]);

    /** Closes the tooltip following an event on the anchor */
    const close = useCallback((cause) => {
        if (openCause === cause) {
            dispatch({ type: ACTIONS.close });
        }
    }, [openCause, dispatch]);

    /* Event handlers for the anchor. Opens on Focus and PointerEnter, closes respectively on Blur and PointerLeaver */
    const handleFocus = useCallback((e) => {
        open(OPEN_CAUSE.focus, e.target);
    }, [open]);

    const handleBlur = useCallback((e) => {
        close(OPEN_CAUSE.focus);
    }, [close]);

    const handlePointerEnter = useCallback((e) => {
        open(OPEN_CAUSE.hover, e.target);
    }, [open]);

    const handlePointerLeave = useCallback((e) => {
        close(OPEN_CAUSE.hover);
    }, [close]);

    /* Handling Escape press on the window to close the tooltip as well */
    const handleEscape = useCallback((e) => {
        if (e.key === 'Escape' && isOpen) {
            dispatch({ type: ACTIONS.close });
        }
    }, [dispatch, isOpen]);

    useEffect(() => {
        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [handleEscape]);

    /* Handling dynamic value changes */
    useEffect(() => {
        dispatch({ type: ACTIONS.setValue, payload: value });
    }, [value, dispatch]);

    /* Creates the ref and adds the event handlers */
    const anchorRef = useCallback((node) => {
        if (ref.current) {
            ref.current.removeEventListener('focus', handleFocus);
            ref.current.removeEventListener('blur', handleBlur);
            ref.current.removeEventListener('pointerenter', handlePointerEnter);
            ref.current.removeEventListener('pointerleave', handlePointerLeave);
        }

        if (node) {
            node.addEventListener('focus', handleFocus);
            node.addEventListener('blur', handleBlur);
            node.addEventListener('pointerenter', handlePointerEnter);
            node.addEventListener('pointerleave', handlePointerLeave);
        }

        ref.current = node;
    }, [handleBlur, handleFocus, handlePointerEnter, handlePointerLeave]);

    return anchorRef;
}