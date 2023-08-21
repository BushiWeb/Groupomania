import { useEffect, useState } from 'react';

/**
 * Hook.
 * Allows to detect when the page is scrolled past a certain threshold.
 * @param {number} threshold
 * @param {HTMLElement} [element=window]
 * @param {boolean} [fromBottom = false] - Weither the threshold is from the top (false) or the bottom (true)
 * @returns Returns a boolean indicating the position of the scroll relative to the threshold.
 */
export function useScrollThreshold(threshold, element = window, fromBottom = false) {
    const [isPastThreshold, setPastThreshold] = useState(null);

    useEffect(() => {
        function handleScroll() {
            const currentThreshold = fromBottom ?
                element.scrollHeight - element.clientHeight - threshold :
                threshold;

            if (element.scrollTop > currentThreshold) {
                setPastThreshold(true);
            } else {
                setPastThreshold(false);
            }
        }

        if (!element) {
            return;
        }

        element.addEventListener('scroll', handleScroll);

        return () => {
            element.removeEventListener('scroll', handleScroll);
        };
    }, [threshold, fromBottom, element]);

    return isPastThreshold;
}