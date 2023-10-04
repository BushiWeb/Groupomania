import { useCallback, useEffect } from 'react';

/**
 * Detects when the user clicks outside of a given element
 * @param elementRef
 * @param {Function} action - Action to execute when the user clicks outside
 * @param [observerElementRef] - Reference containing the element on which to apply the event listener,
 *  contains window by default
 */
export function useClickOutsideModal(elementRef, action, observerElementRef = { current: window }) {
    const handleClickOutside = useCallback((e) => {
        if (!elementRef.current || elementRef.current.contains(e.target)) {
            return;
        }
        action(e);
    }, [action, elementRef]);

    useEffect(() => {
        const observerNode = observerElementRef.current;
        observerNode.addEventListener('click', handleClickOutside, true);

        return () => {
            observerNode.removeEventListener('click', handleClickOutside, true);
        };
    });
}