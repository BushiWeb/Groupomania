import PropTypes from 'prop-types';
import style from './Tooltip.module.css';
import {
    useState, useRef,
} from 'react';
import TooltipLabel from './TooltipLabel';

/**
 * Adds a tooltip to an element. The tooltip will not be accessible and should only be used to provide a visual
 * label to elements that don't have one. That label should already be accessible by other users.
 */
export default function Tooltip({ children, label, className }) {
    const timeoutId = useRef(null);
    const [showTooltip, setShowTooltip] = useState(false);

    /**
     * Displays or hide the tooltip. Manages an optionnal timeout.
     */
    const displayTooltip = (isVisible = true, timeout = 0) => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
            timeoutId.current = null;
        }

        if (timeout) {
            return timeoutId.current = setTimeout(() => setShowTooltip(isVisible), 1500);
        }

        setShowTooltip(isVisible);
    };


    function handlePointerOver() {
        displayTooltip();
    }

    function handlePointerOut() {
        displayTooltip(false, 1500);
    }

    function handleFocus() {
        displayTooltip();
    }

    function handleBlur() {
        displayTooltip(false);
    }

    function handleKeyDown(e) {
        if (e.key === 'Escape') {
            displayTooltip(false);
        }
    }

    return <div
        className={`${style.tooltipContainer} ${className}`}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
    >
        {children}
        <TooltipLabel label={label} shown={showTooltip}/>
    </div>;
}

Tooltip.defaultProps = {
    className: '',
};

Tooltip.propTypes = {
    /** Label of the tooltip */
    label: PropTypes.string.isRequired,

    /** Classnames */
    className: PropTypes.string,
};