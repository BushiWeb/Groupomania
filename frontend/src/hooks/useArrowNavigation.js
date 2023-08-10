import { useState } from 'react';

/**
 * Allows to use the arrow key navigation within a list of elements.
 * @param {number} elementNumber - Number of elements in the list
 * @returns {{handleBlur, handleFocus, handleKeyDown, focusId}} Returns an object containing :
 *  the currently focused element to give him the focus,
 *  the function to update the focused element, to give to each element with their id,
 *  the function to move the focus on each arrow key stroke, to give to the container,
 *  the function to remove the focus, to give to the container.
 */
export function useArrowNavigation(elementNumber) {
    const [focusId, setFocusId] = useState(null);

    function handleBlur() {
        setFocusId(null);
    }

    function handleFocus(id) {
        return () => {
            setFocusId(id);
        };
    }

    function handleKeyDown(e) {
        switch (e.key) {
        case 'ArrowDown':
            e.preventDefault();
            setFocusId((id) => Math.min(elementNumber - 1, ++id));
            break;
        case 'ArrowUp':
            e.preventDefault();
            setFocusId((id) => Math.max(0, --id));
            break;
        default:
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