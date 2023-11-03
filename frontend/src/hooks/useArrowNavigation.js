/* eslint-disable no-mixed-operators */
import { useRef, useState } from 'react';

export const NO_CONTROL = 'no-control';
const NAVIGATION_KEYS = [
    'ArrowDown',
    'ArrowUp',
    'ArrowLeft',
    'ArrowRight',
    'PageDown',
    'PageUp',
    'Home',
    'End',
];

/**
 * Allows to use the arrow key navigation within a list of elements.
 * @param {number|string[]} elements - Number of elements in the list,
 *  or ordered array of the elements label, required to navigate by first letter
 * @param {Object} [options]
 * @param {boolean} [usePageKeys=false] - Weither to use page up (down) keys to navigate to the previous (next) element.
 * @param {boolean} [useLeftRight=false] - Weither to use the left (right) arrow keys to navigate to the previous
 *  (next) element.
 * @param {boolean|string} [useHomeEnd=false] - Weither to use CTRL+Home (End) to go to the start (end) of the list,
 *  if the value is 'no-control' (constant NO_CONTROL), then no need to use the Ctrl key
 * @param {number} [initialFocus=null] - Index of the focused element when the container first renders
 * @param {number} [useFirstLetter=false] - Weither to use the first letter of the elements to navigate
 * @param {number} [useFocusTrap=false] - Weither to trap the focus in the list, avoiding leaving the element using tab
 * @param {Function} [callback] - Callback to execute when changing the focus. Receives the new index as an argument.
 * @returns {{handleBlur, handleFocus, handleKeyDown, focusId, setFocusId}} Returns an object containing :
 *  focusId, the id of the focused element,
 *  handleFocus(id), the function to update the focused element, to give to each listItem,
 *  handleKeyDown, the function to move the focus on each arrow key stroke, to give to the container,
 *  handleBlur, the function to remove the focus, to give to the container.
 *  setFocus, manually sets the focus id
 */
export function useArrowNavigation(elements, {
    usePageKeys = false,
    useHomeEnd = false,
    useLeftRight = false,
    initialFocus = null,
    useFirstLetter = false,
    useFocusTrap = false,
} = {}, callback) {
    const [focusId, setFocusId] = useState(initialFocus);
    const savedFocusId = useRef(initialFocus);

    const elementNumber = Array.isArray(elements) ? elements.length : elements;

    /**
     * Changes the focus and calls the callback
     */
    function changeFocus(index) {
        setFocusId(index);
        callback?.(index);
    }

    /**
     * Handles blur event on the container.
     * Resets the focused element.
     * Do not use if the focused element should be saved.
     */
    function handleBlur() {
        savedFocusId.current = null;
        changeFocus(null);
    }

    /**
     * Handles focus event on the items.
     * Sets the focused item, and handles focusing elements within the item.
     */
    function handleFocus(id) {
        return (e) => {
            savedFocusId.current = id;

            if (e.target === e.currentTarget) {
                changeFocus(id);
            } else {
                changeFocus(null);
            }
        };
    }

    /**
     * Utility function to react to the key pressed
     * @param {number} index
     * @param {Event} e
     */
    function executeShortcut(index, e) {
        e.preventDefault();
        e.stopPropagation();
        savedFocusId.current = index;
        changeFocus(savedFocusId.current);
    }

    /**
     * Handles keydown event on the focused element.
     */
    function handleKeyDown(e) {
        // Next element
        if (
            e.key === 'ArrowDown' ||
            usePageKeys && e.key === 'PageDown' ||
            useLeftRight && e.key === 'ArrowRight'
        ) {
            executeShortcut(Math.min(elementNumber - 1, ++savedFocusId.current), e);
            return;
        }

        // Previous element
        if (
            e.key === 'ArrowUp' ||
            usePageKeys && e.key === 'PageUp' ||
            useLeftRight && e.key === 'ArrowLeft'
        ) {
            executeShortcut(Math.max(0, --savedFocusId.current), e);
            return;
        }

        // First element
        if (e.key === 'Home' && (useHomeEnd && e.ctrlKey || useHomeEnd === NO_CONTROL)) {
            executeShortcut(0, e);
            return;
        }

        // Last element
        if (e.key === 'End' && (useHomeEnd && e.ctrlKey || useHomeEnd === NO_CONTROL)) {
            executeShortcut(elementNumber - 1, e);
            return;
        }

        // Letter matching
        if (useFirstLetter && Array.isArray(elements) && /^\w$/.test(e.key)) {
            const testRegexp = new RegExp(`^${e.key}`, 'i');
            executeShortcut(elements.findIndex((value) => testRegexp.test(value)), e);
            return;
        }

        // Preventing other actions to be executed when the focus is trapped
        if (useFocusTrap && (NAVIGATION_KEYS.includes(e.key) || /^\w$/.test(e.key))) {
            e.stopPropagation();
        }

        // Preventing leaving the list with tabulations
        if (useFocusTrap && e.key === 'Tab') {
            if (savedFocusId.current === 0 && e.shiftKey || savedFocusId.current === elementNumber - 1 && !e.shiftKey) {
                e.preventDefault();
                return;
            }
        }
    }

    return {
        handleBlur,
        handleFocus,
        handleKeyDown,
        focusId,
        setFocusId,
    };
}