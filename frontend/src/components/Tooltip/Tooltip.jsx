import PropTypes from 'prop-types';
import style from './Tooltip.module.css';
import { useCallback, useState } from 'react';

/**
 * Tooltip. Should be used to displaythe meaning of interactive elements with no visible label.
 * Useful only for sighted users, as all interactive elements must have an accessible label.
 */
export default function Tooltip({
    text, show, coordinates,
}) {
    const [tooltipCoordinates, setTooltipCoordinates] = useState(null);

    const tooltipRef = useCallback((node) => {
        if (!node) {
            return;
        }

        const tooltipMargin = 4;

        const newCoordinates = {
            x: coordinates.x + coordinates.width / 2 - node.offsetWidth / 2,
            y: coordinates.y + coordinates.height + tooltipMargin,
        };

        if (newCoordinates.x < 0) {
            newCoordinates.x = 0;
        } else if (newCoordinates.x + node.offsetWidth > window.innerWidth) {
            newCoordinates.x = newCoordinates.x - (newCoordinates.x + node.offsetWidth - window.innerWidth);
        }

        if (newCoordinates.y + node.offsetHeight - window.scrollY > window.innerHeight) {
            newCoordinates.y = coordinates.y - node.offsetHeight - tooltipMargin;
        }

        setTooltipCoordinates(newCoordinates);
    }, [coordinates]);

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
    >{text}</span>;
}

Tooltip.defaultProps = {
    show: false,
};

Tooltip.propTypes = {
    /** Text within the tooltip */
    text: PropTypes.string.isRequired,

    /** Weither the tooltip is displayed or not */
    show: PropTypes.bool,

    /** Coordinates of the related element. */
    coordinates: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
    }).isRequired,
};