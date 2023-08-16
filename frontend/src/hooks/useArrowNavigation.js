/* eslint-disable no-mixed-operators */
import { useRef, useState } from 'react';

/**
 * Allows to use the arrow key navigation within a list of elements.
 * @param {number} elementNumber - Number of elements in the list
 * @param {Object} [options]
 * @param {boolean} [usePageKeys=false] - Weither to use page up (down) keys to navigate to the previous (next) element.
 * @param {boolean} [useHomeEnd=false] - Weither to use CTRL+Home (End) to go to the start (end) of the list.
 * @returns {{handleBlur, handleFocus, handleKeyDown, focusId}} Returns an object containing :
 *  the currently focused element to give him the focus,
 *  the function to update the focused element, to give to each element with their id,
 *  the function to move the focus on each arrow key stroke, to give to the container,
 *  the function to remove the focus, to give to the container.
 */
export function useArrowNavigation(elementNumber, {
    usePageKeys = false,
    useHomeEnd = false,
} = {}) {
    const [focusId, setFocusId] = useState(null);
    const savedFocusId = useRef(null);

    function handleBlur() {
        savedFocusId.current = null;
        setFocusId(null);
    }

    function handleFocus(id) {
        return (e) => {
            savedFocusId.current = id;

            if (e.target === e.currentTarget) {
                setFocusId(id);
            } else {
                setFocusId(null);
            }
        };
    }

    function handleKeyDown(e) {
        if (
            e.key === 'ArrowDown' ||
            usePageKeys && e.key === 'PageDown'
        ) {
            e.preventDefault();
            savedFocusId.current = Math.min(elementNumber - 1, ++savedFocusId.current);
            setFocusId(savedFocusId.current);
            return;
        }

        if (
            e.key === 'ArrowUp' ||
            usePageKeys && e.key === 'PageUp'
        ) {
            e.preventDefault();
            savedFocusId.current = Math.max(0, --savedFocusId.current);
            setFocusId(savedFocusId.current);
            return;
        }

        if (useHomeEnd && e.key === 'Home' && e.ctrlKey) {
            e.preventDefault();
            savedFocusId.current = 0;
            setFocusId(savedFocusId.current);
            return;
        }

        if (useHomeEnd && e.key === 'End' && e.ctrlKey) {
            e.preventDefault();
            savedFocusId.current = elementNumber - 1;
            setFocusId(savedFocusId.current);
            return;
        }
    }

    return {
        handleBlur,
        handleFocus,
        handleKeyDown,
        focusId,
    };
}