import PropTypes from 'prop-types';
import style from './Button.module.css';
import InteractiveElement from '../../InteractiveElement/InteractiveElement.jsx';

/**
 * Basic button with no secific styling. Should be composed by another button component.
 * Its value is given as the child of the button.
 * All additionnal props are passed to the DOM element.
 */
export default function Button({
    children, disabled, autoFocus, onClick, label, classNames, hover, focus, active, stateLayerColor, ...other
}) {
    return <InteractiveElement
        rootElement="button"
        className={`${style.button} ${classNames}`}
        rippleDuration={disabled || !stateLayerColor ? null : 350}
        stateLayerColor={stateLayerColor}
        hover={hover}
        focus={focus}
        active={active}
        type="button"
        disabled={disabled}
        autoFocus={autoFocus}
        onClick={onClick}
        aria-label={label}
        {...other}
    >
        {children}
    </InteractiveElement>;
}

Button.defaultProps = {
    disabled: false,
    autoFocus: false,
    onClick: undefined,
    classNames: '',
    label: undefined,
    hover: undefined,
    focus: undefined,
    active: undefined,
    stateLayerColor: undefined,
};

Button.propTypes = {
    /** Weither the button is disabled or not. Defaults to false. */
    disabled: PropTypes.bool,

    /** Weither the button gets the focus when the component mounts. Defaults to false. */
    autoFocus: PropTypes.bool,

    /** Action that should be executed when clicking on the button */
    onClick: PropTypes.func,

    /**
     * Accessible label for the button.
     * It should be provided if the button value has no accessible text.
     */
    label: PropTypes.string,

    /** Class names to add to the button. */
    classNames: PropTypes.string,

    /** InteractiveElement's hover prop. */
    hover: PropTypes.bool,

    /** InteractiveElement's focus prop. */
    focus: PropTypes.bool,

    /** InteractiveElement's active prop. */
    active: PropTypes.bool,

    /** InteractiveElement's stateLayerColor prop */
    stateLayerColor: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};