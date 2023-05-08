import PropTypes from 'prop-types';
import style from './Button.module.css';
import { useRipple } from '../../../hooks/useRipple.js';
import Icon from '../../Icon/Icon.jsx';
import { selectIsDarkTheme } from '../../../utils/selectors.js';
import { useSelector } from 'react-redux';
import { useTooltip } from '../../../features/tooltip/useTooltip.js';

/**
 * Basic button with no secific styling. Should be composed by another button component.
 */
export default function Button({
    isDisabled, hasInitialFocus, action, label, classNames, icon, isLabelHidden, ...other
}) {
    const rippleTrigger = useRipple();
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const [showTooltip, hideTooltip] = useTooltip();

    let buttonClass;

    if (icon && isLabelHidden) {
        buttonClass = style.buttonWithoutLabel;
    } else if (icon) {
        buttonClass = style.buttonWithIcon;
    } else {
        buttonClass = style.button;
    }

    function handlePointerDown(e) {
        rippleTrigger(e.target, { x: e.clientX, y: e.clientY });
    }

    function handleKeyDown(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            rippleTrigger(e.target);
        }
    }

    function handlePointerOver(e) {
        showTooltip(label, {
            x: e.target.offsetLeft,
            y: e.target.offsetTop,
            width: e.target.offsetWidth,
            height: e.target.offsetHeight,
        });
    }

    function handlePointerOut(e) {
        hideTooltip();
    }

    return (
        <button
            type="button"
            className={`state-layer target-layer ${buttonClass} ${classNames}`}
            disabled={isDisabled}
            autoFocus={!isDisabled && hasInitialFocus}
            onClick={action}
            onPointerDown={handlePointerDown}
            onKeyDown={handleKeyDown}
            onPointerOut={handlePointerOut}
            aria-label={icon && isLabelHidden ? label : undefined}
            data-states="hovered focused pressed"
            { ... icon && isLabelHidden ? { onPointerOver: handlePointerOver } : undefined }
            {...other}
        >
            {icon && <Icon
                name={icon}
                isWithText={!isLabelHidden}
                isOnDark={isDarkTheme} />
            }
            {(!isLabelHidden || !icon) && label}
        </button>
    );
}

Button.defaultProps = {
    isDisabled: false,
    hasInitialFocus: false,
    action: undefined,
    classNames: '',
    icon: undefined,
    isLabelHidden: false,
};

Button.propTypes = {
    /** Weither the button is disabled or not */
    isDisabled: PropTypes.bool,

    /** Weither the button gets the focus when the component mounts */
    hasInitialFocus: PropTypes.bool,

    /** Action that should be executed when clicking on the button */
    action: PropTypes.func,

    /**
     * Label of the button. If the label is visible, it will be displayed in the button. Otherwise, it will only serve
     * as the button label.
     */
    label: PropTypes.string.isRequired,

    /** Class names to add to the button */
    classNames: PropTypes.string,

    /** Icon name to add before the label */
    icon: PropTypes.string,

    /** Weither to show or hide the label. Only works if an icon is present */
    isLabelHidden: PropTypes.bool,
};