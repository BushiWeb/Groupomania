import { createContext, useEffect, useState } from 'react';

export const BREAKPOINTS = {
    compact: 0,
    medium: 601,
    expanded: 841,
    extraLarge: 1024,
    xxl: 1200,
};

export const BP_ID = {
    compact: 0,
    medium: 1,
    expanded: 2,
    extraLarge: 3,
    xxl: 4,
};

function getBreakpoint() {
    if (window.innerWidth >= BREAKPOINTS.xxl) {
        return BP_ID.xxl;
    } else if (window.innerWidth >= BREAKPOINTS.extraLarge) {
        return BP_ID.extraLarge;
    } else if (window.innerWidth >= BREAKPOINTS.expanded) {
        return BP_ID.expanded;
    } else if (window.innerWidth >= BREAKPOINTS.medium) {
        return BP_ID.medium;
    } else {
        return BP_ID.compact;
    }
}

export const breakpointContext = createContext(0);

/**
 * Adds the breakpoint context, containing a number corresponding to screen size ranges.
 * 0 is the compact format.
 * 1 is the medium format.
 * 2 is the expanded format.
 * 3 is the extra large format.
 * 4 is beyond extra large.
 */
export default function BreakpointContext({ children }) {
    const [breakpoint, setBreakpoint] = useState(getBreakpoint());

    useEffect(() => {
        const eventListener = () => {
            setBreakpoint(getBreakpoint());
        };

        window.addEventListener('resize', eventListener);

        return () => {
            window.removeEventListener('resize', eventListener);
        };
    }, []);

    return (
        <breakpointContext.Provider value={breakpoint}>
            {children}
        </breakpointContext.Provider>
    );
}
