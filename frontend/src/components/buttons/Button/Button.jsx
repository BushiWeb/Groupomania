import PropTypes from 'prop-types';
import style from './Button.module.css';
import { useRipple } from '../../../hooks/useRipple.js';
import Icon from '../../Icon/Icon.jsx';
import { selectIsDarkTheme } from '../../../utils/selectors.js';
import { useSelector } from 'react-redux';
import { useTargetLayer } from '../../../hooks/useTargetLayer.js';
import { useStateLayer } from '../../../hooks/useStateLayer';

/**
 * Basic button with no secific styling. Should be composed by another button component.
 */
export default function Button({
    isDisabled, hasInitialFocus, action, label, classNames, icon, isLabelHidden, ...other
}) {
    const rippleTrigger = useRipple();
    const targetLayerProps = useTargetLayer();
    const stateLayerProps = useStateLayer({
        hover: true, focus: true, active: true, dragged: false,
    });
    const isDarkTheme = useSelector(selectIsDarkTheme);

    let buttonClass;

    if (icon && isLabelHidden) {
        buttonClass = style.buttonWithoutLabel;
    } else if (icon) {
        buttonClass = style.buttonWithIcon;
    } else {
        buttonClass = style.button;
    }

    function handlePointerDown(e) {
        rippleTrigger(e.currentTarget, { x: e.clientX, y: e.clientY });
    }

    function handleKeyDown(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            rippleTrigger(e.target);
        }
    }

    return (
        <button
            type="button"
            className={`${buttonClass} ${classNames}`}
            disabled={isDisabled}
            autoFocus={!isDisabled && hasInitialFocus}
            onClick={action}
            onPointerDown={handlePointerDown}
            onKeyDown={handleKeyDown}
            aria-label={icon && isLabelHidden ? label : undefined}
            {...targetLayerProps}
            {...stateLayerProps}
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