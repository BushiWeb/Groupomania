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

    function changeFocus(index) {
        setFocusId(index);
        callback?.(index);
    }

    function handleBlur() {
        savedFocusId.current = null;
        changeFocus(null);
    }

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

    function handleKeyDown(e) {
        if (
            e.key === 'ArrowDown' ||
            usePageKeys && e.key === 'PageDown' ||
            useLeftRight && e.key === 'ArrowRight'
        ) {
            e.preventDefault();
            e.stopPropagation();
            savedFocusId.current = Math.min(elementNumber - 1, ++savedFocusId.current);
            changeFocus(savedFocusId.current);
            return;
        }

        if (
            e.key === 'ArrowUp' ||
            usePageKeys && e.key === 'PageUp' ||
            useLeftRight && e.key === 'ArrowLeft'
        ) {
            e.preventDefault();
            e.stopPropagation();
            savedFocusId.current = Math.max(0, --savedFocusId.current);
            changeFocus(savedFocusId.current);
            return;
        }

        if (e.key === 'Home' && (useHomeEnd && e.ctrlKey || useHomeEnd === NO_CONTROL)) {
            e.preventDefault();
            e.stopPropagation();
            savedFocusId.current = 0;
            changeFocus(savedFocusId.current);
            return;
        }

        if (e.key === 'End' && (useHomeEnd && e.ctrlKey || useHomeEnd === NO_CONTROL)) {
            e.preventDefault();
            e.stopPropagation();
            savedFocusId.current = elementNumber - 1;
            changeFocus(savedFocusId.current);
            return;
        }

        if (useFirstLetter && Array.isArray(elements) && /^\w$/.test(e.key)) {
            e.preventDefault();
            e.stopPropagation();
            const testRegexp = new RegExp(`^${e.key}`, 'i');
            savedFocusId.current = elements.findIndex((value) => testRegexp.test(value));
            changeFocus(savedFocusId.current);
            return;
        }

        if (useFocusTrap && (NAVIGATION_KEYS.includes(e.key) || /^\w$/.test(e.key))) {
            e.stopPropagation();
        }

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