import {
    useCallback, useContext, useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import { tooltipContext } from './tooltipContext.js';

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
    } = useContext(tooltipContext);
    const [{ width, height }, setDimensions] = useState({ width: 0, height: 0 });

    // Controlling the final state of the tooltip and the timing
    const [labelHover, setLabelHover] = useState(false);
    const [open, setOpen] = useState(false);
    const openTimeoutRef = useRef(null);
    const closeTimeoutRef = useRef(null);
    const openTimeout = 200;
    const closeTimeout = 100;

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
        setLabelHover(true);
    }, [setLabelHover]);

    /* Closes the tooltip when exiting the tooltip */
    const handlePointerLeave = useCallback(() => {
        setLabelHover(false);
    }, [setLabelHover]);

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

    if (!anchor) {
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
        open,
        top,
        left,
    };
}