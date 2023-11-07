import { useContext } from 'react';
import { breakpointContext } from '../context/BreakpointContext.js';

/**
 * Returns an integer corresponding to the current breakpoint.
 * 0 is the compact format.
 * 1 is the medium format.
 * 2 is the expanded format.
 * 3 is the extra large format.
 * 4 is beyond extra large.
 */
export function useBreakpoint() {
    const breakpoint = useContext(breakpointContext);

    return breakpoint;
}