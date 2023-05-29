import { useEffect, useState } from 'react';

/**
 * Hook.
 * Allows to detect when the page is scrolled past a certain threshold.
 * @param {number} threshold
 * @param {boolean} [fromBottom = false] - Weither the threshold is from the top (false) or the bottom (true)
 * @returns Returns a boolean indicating the position of the scroll relative to the threshold.
 */
export function useScrollThreshold(threshold, fromBottom = false) {
    const [isPastThreshold, setPastThreshold] = useState(null);

    useEffect(() => {
        function handleScroll() {
            const currentThreshold = fromBottom ?
                document.documentElement.scrollHeight - document.documentElement.clientHeight - threshold :
                threshold;

            if (window.scrollY > currentThreshold) {
                setPastThreshold(true);
            } else {
                setPastThreshold(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [threshold, fromBottom]);

    return isPastThreshold;
}