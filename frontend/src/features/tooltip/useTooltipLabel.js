import {
    useContext, useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import { tooltipContext } from './tooltipContext.js';
import { ACTIONS } from './tooltipReducer.js';

const TOOLTIP_MARGIN = 4;

/**
 * Handles tooltip label behavior.
 * @returns {
 *  ref,
 *  value: string,
 *  open: boolean,
 *  position: {
 *      top: number,
 *      left: number,
 *  },
 *  labelEventHandlers: {
 *      onPointerEnter: Function,
 *      onPointerLeave: Function,
 *  },
 * }
 */
export default function useTooltipLabel() {
    const ref = useRef(null);
    const {
        isOpen,
        anchor,
        value,
        dispatch,
    } = useContext(tooltipContext);
    const [{ top, left }, setPosition] = useState({ top: 0, left: 0 });

    // Controlling the final state of the tooltip and the timing
    const [labelHover, setLabelHover] = useState(false);
    const [open, setOpen] = useState(false);
    const openTimeoutRef = useRef(null);
    const closeTimeoutRef = useRef(null);
    const openTimeout = 200;
    const closeTimeout = 100;

    /* Handling Escape press on the window to close the tooltip */
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

    // Aplying timeout to opening and closing the tooltip
    useEffect(() => {
        if (isOpen || labelHover) {
            clearTimeout(closeTimeoutRef.current);
            openTimeoutRef.current = setTimeout(() => setOpen(true), openTimeout);
            return;
        }

        clearTimeout(openTimeoutRef.current);
        closeTimeoutRef.current = setTimeout(() => setOpen(false), closeTimeout);
        return;
    }, [isOpen, labelHover]);

    /* Update tooltip position when opening or changing value */
    useLayoutEffect(() => {
        if (!ref.current) {
            return;
        }

        if (!anchor) {
            setPosition({
                top: 0,
                left: 0,
            });
            return;
        }

        const tooltipBox = ref.current.getBoundingClientRect();
        const anchorBox = anchor.getBoundingClientRect();

        // Place the element underneath the anchor except if it overflows
        let top = anchorBox.y + anchorBox.height + TOOLTIP_MARGIN;
        if (top + tooltipBox.height * 2 > window.innerHeight) {
            top = anchorBox.y - tooltipBox.height - TOOLTIP_MARGIN;
        }

        // Center tooltip on the element but make sure it doesn't overflow from the viewport
        let left = Math.max(
            TOOLTIP_MARGIN,
            Math.min(
                anchorBox.x + anchorBox.width / 2 - tooltipBox.width / 2,
                window.innerWidth - TOOLTIP_MARGIN - tooltipBox.width
            )
        );

        setPosition({
            top,
            left,
        });
    }, [anchor, value, open]);

    /* Keeps the tooltip visible when hovering the tooltip */
    function handlePointerEnter() {
        setLabelHover(true);
    }

    /* Closes the tooltip when exiting the tooltip */
    function handlePointerLeave() {
        setLabelHover(false);
    }

    return {
        ref,
        value,
        open,
        position: {
            top,
            left,
        },
        labelEventHandlers: {
            onPointerEnter: handlePointerEnter,
            onPointerLeave: handlePointerLeave,
        },
    };
}