import { useRef } from 'react';

/**
 * Get the coordinates in the click relative to the state layer.
 * @param {{x: number, y: number, width: number, height: number}} elementBox
 * @param {{width: number, height: number}} stateLayer
 * @param {{x: number, y: number}} [clickCoordinates]
 * @returns {{x: number, y: number}} Returns the coordinates
 */
function getClickCoordinates(elementBox, stateLayer, clickCoordinates) {
    if (!clickCoordinates) {
        return {
            x: stateLayer.width / 2,
            y: stateLayer.height / 2,
        };
    }

    const spaceInline = (elementBox.width - stateLayer.width) / 2,
        spaceBlock = (elementBox.height - stateLayer.height) / 2;
    return {
        x: clickCoordinates.x - elementBox.x - spaceInline,
        y: clickCoordinates.y - elementBox.y - spaceBlock,
    };
}



/**
 * Get the coordinates of the furthest border-radius center.
 * @param {HTMLElement} element
 * @param {{x: number, y: number}} click
 * @param {{width: number, height: number}} stateLayer
 * @returns {{x: number, y: number, borderRadius: number}} Returns the coordinates of the furthest corner radius center,
 *  and the border radius.
 */
function getFurthestCornerRadiusCoordinates(element, click, stateLayer) {
    let borderRadius = window.getComputedStyle(element, ':before').borderTopLeftRadius;

    if (borderRadius === '50%') {
        return { x: stateLayer.width / 2, y: stateLayer.height / 2, borderRadius: stateLayer.width / 2 };
    }

    borderRadius = parseInt(borderRadius);

    if (borderRadius >= stateLayer.height && borderRadius >= stateLayer.width) {
        return { x: stateLayer.width / 2, y: stateLayer.height / 2, borderRadius: stateLayer.width / 2 };
    }

    if (borderRadius >= stateLayer.height) {
        borderRadius = stateLayer.height / 2;
    }

    if (borderRadius >= stateLayer.width) {
        borderRadius = stateLayer.width / 2;
    }

    return {
        x: click.x > stateLayer.width / 2 ? borderRadius : stateLayer.width - borderRadius,
        y: click.y > stateLayer.height / 2 ? borderRadius : stateLayer.height - borderRadius,
        borderRadius,
    };
}



/**
 * Calculates the distance to the furthest point on the shape outline.
 * @param {HTMLElement} element
 * @param {{x: number, y: number}} click
 * @param {{width: number, height: number}} stateLayer
 * @returns {number} Returns the ripple end radius
 */
function getMaxRadius(element, click, stateLayer) {
    const {
        x: cornerRadiusX,
        y: cornerRadiusY,
        borderRadius,
    } = getFurthestCornerRadiusCoordinates(element, click, stateLayer);

    const distanceToRadiusCenter = Math.sqrt(
        (cornerRadiusX - click.x) ** 2 + (cornerRadiusY - click.y) ** 2
    );
    return distanceToRadiusCenter + borderRadius;
}



/**
 * Hook allowing to add the ripple effect to an element.
 * @param {number} [duration=350] - Duration of the effect in milliseconds.
 * @returns {Function} Returns a function triggering the effect.
 */
export function useRipple(duration = 350) {
    const timeoutId = useRef(null);

    /**
     * Function triggering the ripple effect.
     * @param {HTMLElement} element - Element to use to trigger the effect.
     * @param {{x: number, y: number}} [clickCoordinates] - Coordinates of the click relative to the viewport.
     *  These can be accessed with clientX and clientY.
     */
    return function (element, clickCoordinates) {
        if (!element.classList.contains('state-layer')) {
            element.classList.add('state-layer');
        }

        // Restart the animation if the user triggers it while it is still running
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
            timeoutId.current = null;
            element.classList.remove('ripple');
        }

        // Set the animation duration
        element.style.setProperty('--animation-duration', `${duration}ms`);

        // Get the elements informations
        const elementBox = element.getBoundingClientRect(), stateLayer = {};
        stateLayer.width = parseInt(window.getComputedStyle(element, ':before').width);
        stateLayer.height = parseInt(window.getComputedStyle(element, ':before').height);

        // Get the click coordinates within the state layer
        const { x: clickX, y: clickY } = getClickCoordinates(elementBox, stateLayer, clickCoordinates);
        element.style.setProperty('--origin-x', `${clickX}px`);
        element.style.setProperty('--origin-y', `${clickY}px`);

        /*
            Calculate the end radius of the ripple.
            The ripple will stretch to the side of the state-layer, taking the curvature into account.
            We consider that all corners have the same border radius.
        */
        const endRadius = getMaxRadius(element, { x: clickX, y: clickY }, stateLayer);
        element.style.setProperty('--ripple-width', `${endRadius * 2}px`);

        // Start the animation
        element.classList.add('ripple');

        timeoutId.current = setTimeout(() => {
            timeoutId.current = null;
            element.classList.remove('ripple');
        }, duration);

    };
}