import PropTypes from 'prop-types';
import style from './TooltipLabel.module.css';
import { useCallback } from 'react';

/**
 * Tooltip box, containing the text
 */
export default function TooltipLabel({ label, shown }) {
    /**
    * Function executed when the DOM component is rendered. It calculates the position of the tooltip to make sure
    *      it is within the bounds of the screen.
    */
    const tooltipRef = useCallback((node) => {
        if (!node) {
            return;
        }

        const {
            x, y, width, height,
        } = node.getBoundingClientRect();

        if (y + height * 2 > window.innerHeight) {
            node.classList.remove(style.bottom);
            node.classList.add(style.top);
        }

        if (x < 0) {
            node.classList.remove(style.center);
            node.classList.add(style.left);
        } else if (x + width > window.innerWidth) {
            node.classList.remove(style.center);
            node.classList.add(style.right);
        }

        node.classList.remove(style.hidden);
    }, []);

    if (shown) {
        return <div
            className={`${style.tooltip} ${style.hidden} ${style.bottom} ${style.center}`}
            role="tooltip"
            aria-hidden={true}
            ref={tooltipRef}
        >{label}</div>;
    }

    return;
}

TooltipLabel.propTypes = {
    /** Label of the tooltip, required */
    label: PropTypes.string.isRequired,

    /** Weither the tooltip is displayed or not, required */
    shown: PropTypes.bool.isRequired,
};