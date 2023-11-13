import { useEffect, useRef } from 'react';

/**
 * Hook used to change the page title. Revert to the previous one when living the page.
 * @param {string} title
 */
export function useChangePageTitle(title) {
    const currentTitle = useRef(document.title);

    useEffect(() => {
        const originalTitle = currentTitle.current;
        document.title = title;

        return () => {
            document.title = originalTitle;
        };
    }, [title]);
}