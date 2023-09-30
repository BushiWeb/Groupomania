import {
    useCallback, useContext, useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import { tooltipContext } from './tooltipContext.js';
import { ACTIONS, OPEN_CAUSE } from './tooltipReducer.js';

const TOOLTIP_MARGIN = 4;

/**
 * Handles tooltip label behavior.
 * @returns Returns an object containing:
 *  the value of the tooltip
 *  its state isOpen and its ref
 *  and the value for the top and left css properties.
 */
export default function useTooltipLabel() {
    const ref = useRef(null);
    const {
        isOpen,
        anchor,
        value,
        openCause,
        dispatch,
    } = useContext(tooltipContext);
    const [{ width, height }, setDimensions] = useState({ width: 0, height: 0 });

    /* Update tooltip size when changing value */
    useLayoutEffect(() => {
        const tooltipCoordinates = ref.current?.getBoundingClientRect();
        if (!tooltipCoordinates) {
            return;
        }

        setDimensions({
            width: tooltipCoordinates.width,
            height: tooltipCoordinates.height,
        });
    }, [value]);

    /* Keeps the tooltip visible when hovering the tooltip */
    const handlePointerEnter = useCallback(() => {
        if (openCause === OPEN_CAUSE.hover) {
            dispatch({
                type: ACTIONS.open,
                payload: { value, anchor, cause: OPEN_CAUSE.hoverTooltip },
            });
        }
    }, [anchor, dispatch, openCause, value]);

    /* Closes the tooltip when exiting the tooltip */
    const handlePointerLeave = useCallback(() => {
        if (openCause === OPEN_CAUSE.hoverTooltip) {
            dispatch({ type: ACTIONS.close });
        }
    }, [dispatch, openCause]);

    /* Creates the ref and adds the event handlers */
    const labelRef = useCallback((node) => {
        if (ref.current) {
            ref.current.removeEventListener('pointerenter', handlePointerEnter);
            ref.current.removeEventListener('pointerleave', handlePointerLeave);
        }

        if (node) {
            const tooltipCoordinates = node.getBoundingClientRect();
            setDimensions({
                width: tooltipCoordinates.width,
                height: tooltipCoordinates.height,
            });

            node.addEventListener('pointerenter', handlePointerEnter);
            node.addEventListener('pointerleave', handlePointerLeave);
        }

        ref.current = node;
    }, [handlePointerEnter, handlePointerLeave]);

    if (!isOpen || !anchor) {
        return {
            ref: labelRef,
            value,
            isOpen,
        };
    }

    // Get the tooltip position
    let top, left;
    const {
        x: ax, y: ay, width: aw, height: ah,
    } = anchor.getBoundingClientRect();

    top = ay + ah + TOOLTIP_MARGIN;
    left = ax + aw / 2 - width / 2;

    if (top + height * 2 > window.innerHeight) {
        top = ay - height - TOOLTIP_MARGIN;
    }

    if (left < 0) {
        left = TOOLTIP_MARGIN;
    } else if (left + width + TOOLTIP_MARGIN > window.innerWidth) {
        left = window.innerWidth - TOOLTIP_MARGIN - width;
    }

    return {
        ref: labelRef,
        value,
        isOpen,
        top,
        left,
    };
}