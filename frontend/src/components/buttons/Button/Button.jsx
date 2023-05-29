import PropTypes from 'prop-types';
import style from './Button.module.css';
import { useRipple } from '../../../hooks/useRipple.js';
import Icon from '../../Icon/Icon.jsx';
import { selectIsDarkTheme } from '../../../utils/selectors.js';
import { useSelector } from 'react-redux';
import { useTooltip } from '../../../features/tooltip/useTooltip.js';
import { useEffect, useRef } from 'react';
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
    const [showTooltip, hideTooltip, updateTooltip] = useTooltip();
    const canUpdateTooltip = useRef(false);

    let buttonClass;

    if (icon && isLabelHidden) {
        buttonClass = style.buttonWithoutLabel;
    } else if (icon) {
        buttonClass = style.buttonWithIcon;
    } else {
        buttonClass = style.button;
    }

    useEffect(() => {
        if (canUpdateTooltip.current) {
            updateTooltip(label);
        }
    }, [label, canUpdateTooltip, updateTooltip]);

    function handlePointerDown(e) {
        rippleTrigger(e.currentTarget, { x: e.clientX, y: e.clientY });
    }

    function handleKeyDown(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            rippleTrigger(e.target);
        }
    }

    function handlePointerOver(e) {
        const elementBoundingBox = e.target.getBoundingClientRect();
        showTooltip(label, {
            x: elementBoundingBox.x,
            y: elementBoundingBox.y,
            width: elementBoundingBox.width,
            height: elementBoundingBox.height,
        });
        canUpdateTooltip.current = true;
    }

    function handlePointerOut(e) {
        hideTooltip();
        canUpdateTooltip.current = false;
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
            { ... icon && isLabelHidden ? { onPointerOut: handlePointerOut } : undefined }
            { ... icon && isLabelHidden ? { onPointerOver: handlePointerOver } : undefined }
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