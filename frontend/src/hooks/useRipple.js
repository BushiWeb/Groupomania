import { useRef } from 'react';

/**
 * Get the coordinates in the click relative to the state layer.
 * @param {{x: number, y: number, width: number, height: number}} elementBox
 * @param {{x: number, y: number}} [clickCoordinates]
 * @returns {{x: number, y: number}} Returns the coordinates
 */
function getClickCoordinates(elementBox, clickCoordinates) {
    if (!clickCoordinates) {
        return {
            x: elementBox.width / 2,
            y: elementBox.height / 2,
        };
    }

    return {
        x: clickCoordinates.x - elementBox.x,
        y: clickCoordinates.y - elementBox.y,
    };
}



/**
 * Get the coordinates of the furthest border-radius center.
 * @param {HTMLElement} element
 * @param {{x: number, y: number}} click
 * @returns {{x: number, y: number, borderRadius: number}} Returns the coordinates of the furthest corner radius center,
 *  and the border radius.
 */
function getFurthestCornerRadiusCoordinates(element, click) {
    let borderRadius = window.getComputedStyle(element).borderTopLeftRadius;
    const elementBox = element.getBoundingClientRect();

    if (borderRadius === '50%') {
        return { x: elementBox.width / 2, y: elementBox.height / 2, borderRadius: elementBox.width / 2 };
    }

    borderRadius = parseInt(borderRadius);

    if (borderRadius >= elementBox.height && borderRadius >= elementBox.width) {
        return { x: elementBox.width / 2, y: elementBox.height / 2, borderRadius: elementBox.width / 2 };
    }

    if (borderRadius >= elementBox.height) {
        borderRadius = elementBox.height / 2;
    }

    if (borderRadius >= elementBox.width) {
        borderRadius = elementBox.width / 2;
    }

    return {
        x: click.x > elementBox.width / 2 ? borderRadius : elementBox.width - borderRadius,
        y: click.y > elementBox.height / 2 ? borderRadius : elementBox.height - borderRadius,
        borderRadius,
    };
}



/**
 * Calculates the distance to the furthest point on the shape outline, and add a bit more to finish the ripple effect.
 * @param {{x: number, y: number, borderRadius: number}} furthestCorner
 * @param {{x: number, y: number}} click
 * @returns {number} Returns the ripple end radius
 */
function getMaxRadius(furthestCorner, click) {
    const distanceToRadiusCenter = Math.sqrt(
        (furthestCorner.x - click.x) ** 2 + (furthestCorner.y - click.y) ** 2
    );

    return (distanceToRadiusCenter + furthestCorner.borderRadius) * 1.25;
}



/**
 * Hook allowing to add the ripple effect to an element.
 * @param {number} duration - Duration of the effect in milliseconds.
 * @returns {Function} Returns a function triggering the effect.
 */
export function useRipple(duration) {
    const timeoutId = useRef(null);

    /**
     * Function triggering the ripple effect.
     * @param {HTMLElement} element - Element to use to trigger the effect.
     * @param {{x: number, y: number}} [clickCoordinates] - Coordinates of the click relative to the viewport.
     *  These can be accessed with clientX and clientY.
     */
    return function (element, clickCoordinates) {
        // Restart the animation if the user triggers it while it is still running
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
            timeoutId.current = null;
            element.classList.remove('ripple');
        }

        // Set the animation duration
        element.style.setProperty('--animation-duration', `${duration}ms`);

        // Get the elements informations
        const elementBox = element.getBoundingClientRect();

        // Get the click coordinates within the state layer
        const click = getClickCoordinates(elementBox, clickCoordinates);
        element.style.setProperty('--origin-x', `${click.x}px`);
        element.style.setProperty('--origin-y', `${click.y}px`);

        /*
            Calculate the end radius of the ripple.
            The ripple will stretch to the side of the state-layer, taking the curvature into account.
            We consider that all corners have the same border radius.
        */
        const furthestCorner = getFurthestCornerRadiusCoordinates(element, click);
        const endRadius = getMaxRadius(furthestCorner, click);
        element.style.setProperty('--ripple-width', `${endRadius}`);

        // Start the animation
        element.classList.add('ripple');

        timeoutId.current = setTimeout(() => {
            timeoutId.current = null;
            element.classList.remove('ripple');
        }, duration);

    };
}