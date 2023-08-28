import { useEffect } from 'react';

/**
 * Detects when the user clicks outside of a given element
 * @param elementRef
 * @param {Function} action - Action to execute when the user clicks outside
 * @param [observerElementRef=window] - Reference containing the element on which to apply the event listener.
 */
export function useClickOutsideModal(elementRef, action, observerElementRef) {
    function handleClickOutside(e) {
        if (!elementRef.current || elementRef.current.contains(e.target)) {
            return;
        }
        action(e);
    }

    useEffect(() => {
        const observerNode = observerElementRef.current;
        observerNode.addEventListener('click', handleClickOutside);

        return () => {
            observerNode.removeEventListener('click', handleClickOutside);
        };
    });
}