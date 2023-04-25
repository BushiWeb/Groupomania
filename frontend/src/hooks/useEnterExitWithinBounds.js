import { useRef } from 'react';

/**
 * Hook allowing to add the enter and exit within bounds animation to an element.
 * @param {Object} [options]
 * @param {number} [options.enterDuration=300] - Duration of the enter animation in milliseconds.
 * @param {number} [options.exitDuration=150] - Duration of the exit animation in milliseconds.
 * @param {string} [options.origin='top'] - Origin of the effect, either top, bottom, left of right.
 * @param {string} [options.className='hide'] - Classname used to hide the element.
 * @returns {{enter: Function, exit: Function}} Returns an object containing a function to display the element (enter)
 *  and to remove it (exit).
 */
export function useEnterExitWithinBounds({
    enterDuration = 300,
    exitDuration = 150,
    origin = 'top',
    className = 'hide',
} = {}) {
    const timeoutId = useRef(null);

    /**
     * Function triggering the enter within bounds animation.
     * @param {HTMLElement} element - Element to use to trigger the effect.
     */
    function enter(element) {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
            timeoutId.current = null;
        }

        element.style.setProperty('--animation-duration', `${enterDuration}ms`);

        element.classList.remove('exit-within-bounds');
        element.classList.add('enter-within-bounds', `origin-${origin}`);
        element.classList.remove(className);
    }

    /**
     * Function triggering the exit within bounds animation.
     * @param {HTMLElement} element - Element to use to trigger the effect.
     */
    function exit(element) {
        element.style.setProperty('--animation-duration', `${exitDuration}ms`);

        element.classList.remove('enter-within-bounds');
        element.classList.add('exit-within-bounds', `origin-${origin}`);

        timeoutId.current = setTimeout(() => {
            element.classList.add(className);
            timeoutId.current = null;
        }, exitDuration);
    }

    return { enter, exit };
}