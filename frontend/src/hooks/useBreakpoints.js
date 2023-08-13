import { useEffect, useState } from 'react';

const BREAKPOINTS = {
    compact: 0,
    medium: 601,
    expanded: 841,
    extraLarge: 1024,
};

function getBreakpoint() {
    if (window.innerWidth >= BREAKPOINTS.extraLarge) {
        return 3;
    } else if (window.innerWidth >= BREAKPOINTS.expanded) {
        return 2;
    } else if (window.innerWidth >= BREAKPOINTS.medium) {
        return 1;
    } else {
        return 0;
    }
}

/**
 * Returns an integer corresponding to the current breakpoint.
 * 0 is the compact format.
 * 1 is the medium format.
 * 2 is the expanded format.
 * 3 is the extra large format.
 */
export function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState(getBreakpoint());

    useEffect(() => {
        const eventListener = () => {
            setBreakpoint(getBreakpoint());
        };

        window.addEventListener('resize', eventListener);

        return () => {
            window.removeEventListener('resize', eventListener);
        };
    });

    return breakpoint;
}