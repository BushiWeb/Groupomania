import style from './Tooltip.module.css';
import {
    useCallback, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { selectIsTooltipvisible, selectTooltipCoordinates, selectTooltipLabel } from '../../utils/selectors';

/**
 * Tooltip. Should be used to displaythe meaning of interactive elements with no visible label.
 * Useful only for sighted users, as all interactive elements must have an accessible label.
 * As such, it is hidden from the accessible content to avoid duplication for user using screen readers.
 */
export default function Tooltip() {
    const {
        targetX, targetY, targetWidth, targetHeight,
    } = useSelector(selectTooltipCoordinates);
    const label = useSelector(selectTooltipLabel);
    const show = useSelector(selectIsTooltipvisible);

    const [tooltipCoordinates, setTooltipCoordinates] = useState(null);

    /**
     * Function executed when the DOM component is rendered. It calculates the position of the tooltip to make sure
     *      it is within the bounds of the screen.
     */
    const tooltipRef = useCallback((node) => {
        if (!node) {
            return;
        }

        const tooltipMargin = 8;

        const newCoordinates = {
            x: targetX + targetWidth / 2 - node.offsetWidth / 2,
            y: targetY - node.offsetHeight - tooltipMargin,
        };

        if (newCoordinates.x < 0) {
            newCoordinates.x = 0;
        } else if (newCoordinates.x + node.offsetWidth > window.innerWidth) {
            newCoordinates.x = newCoordinates.x - (newCoordinates.x + node.offsetWidth - window.innerWidth);
        }

        if (newCoordinates.y - window.scrollY < 0) {
            newCoordinates.y = targetY + targetHeight + tooltipMargin;
        }

        setTooltipCoordinates(newCoordinates);
    }, [targetX, targetY, targetWidth, targetHeight]);

    if (!show) {
        return null;
    }

    return <span
        className={tooltipCoordinates ? style.tooltipVisible : style.tooltip}
        style={tooltipCoordinates && {
            '--tooltip-x': `${tooltipCoordinates.x}px`,
            '--tooltip-y': `${tooltipCoordinates.y}px`,
        }}
        ref={tooltipRef}
        aria-hidden={true}
    >{label}</span>;
}