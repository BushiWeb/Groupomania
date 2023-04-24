import PropTypes from 'prop-types';
import style from './Button.module.css';
import { useRipple } from '../../../hooks/useRipple.js';

/**
 * Basic button with no secific styling. Should be composed by another button component.
 */
export default function Button({
    isDisabled, hasInitialFocus, action, label, classNames, children,
}) {
    const rippleTrigger = useRipple();

    function handlePointerDown(e) {
        rippleTrigger(e.target, { x: e.clientX, y: e.clientY });
    }

    function handleKeyDown(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            rippleTrigger(e.target);
        }
    }

    return (
        <button
            type="button"
            className={`state-layer target-layer ${style.button} ${classNames}`}
            disabled={isDisabled}
            autoFocus={!isDisabled && hasInitialFocus}
            onClick={action}
            onPointerDown={handlePointerDown}
            onKeyDown={handleKeyDown}
            aria-label={children && label}
            data-states="hovered focused pressed"
        >
            {children || label}
        </button>
    );
}

Button.defaultProps = {
    isDisabled: false,
    hasInitialFocus: false,
    action: undefined,
    label: undefined,
    classNames: '',
};

Button.propTypes = {
    /** Weither the button is disabled or not */
    isDisabled: PropTypes.bool,

    /** Weither the button gets the focus when the component mounts */
    hasInitialFocus: PropTypes.bool,

    /** Action that should be executed when clicking on the button */
    action: PropTypes.func,

    /**
     * Label of the button. The label will be the content of the button if no content is provided.
     * Otherwise it will just act as an aria-label. Despite a label beeing strongly recommended, it is optionnal
     * since the children can contain the label. It is the responsability of the components composing the button
     * to provide a label.
     */
    label: PropTypes.string,

    /** Class names to add to the button */
    classNames: PropTypes.string,
};