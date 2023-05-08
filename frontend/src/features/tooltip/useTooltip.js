import { useStore } from 'react-redux';
import { tooltipHide, tooltipShow } from './tooltip.slice.js';

export function useTooltip() {
    const { dispatch } = useStore();

    /**
     * Dispatch the action to update the tooltip state and display a tooltip.
     * @param {string} label - Label of the tooltip
     * @param {{x: number, y: number, width: number, height: number}} elementBox - Coordinates of the element, as well
     *  as its dimensions.
     */
    const showTooltip = (label, elementBox) => {
        dispatch(tooltipShow(label, elementBox));
    };

    /**
     * Dispatch the action to update the tooltip state and hide the tooltip.
     */
    const hideTooltip = () => {
        dispatch(tooltipHide());
    };

    return [showTooltip, hideTooltip];
}