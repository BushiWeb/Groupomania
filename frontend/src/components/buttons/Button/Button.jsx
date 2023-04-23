import PropTypes from 'prop-types';
import style from './Button.module.css';
import { useRef } from 'react';

/**
 * Basic button with no secific styling. Should be composed by another button component.
 */
export default function Button({
    isDisabled, hasInitialFocus, action, label, classNames, children,
}) {
    const timeoutId = useRef(null);
    const animationDuration = 350;

    // Handles the ripple animation
    function handlePointerDown(e) {
        // Restart the animation if the user presses again while it is not finished
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
            timeoutId.current = null;
            e.target.classList.remove('ripple');
        }

        // Set animation duration
        e.target.style.setProperty('--animation-duration', `${animationDuration}ms`);

        // Find the elements informations
        const box = e.target.getBoundingClientRect();

        // Get the click coordinates
        const clickX = e.clientX - box.x,
            clickY = e.clientY - box.y;
        e.target.style.setProperty('--origin-x', `${clickX}px`);
        e.target.style.setProperty('--origin-y', `${clickY}px`);

        // Calculates the size of the background
        const furthestCornerX = clickX > box.width / 2 ? 0 : box.width,
            furthestCornerY = clickY > box.height / 2 ? 0 : box.height;
        const radius = Math.sqrt((furthestCornerX - clickX) ** 2 + (furthestCornerY - clickY) ** 2);
        e.target.style.setProperty('--ripple-width', `${radius * 2}px`);

        // Start the animation
        e.target.classList.add('ripple');
        timeoutId.current = setTimeout(() => {
            timeoutId.current = null;
            e.target.classList.remove('ripple');
        }, animationDuration);

    }

    return (
        <button
            type="button"
            className={`state-layer ${style.button} ${classNames}`}
            disabled={isDisabled}
            autoFocus={!isDisabled && hasInitialFocus}
            onClick={action}
            onPointerDown={handlePointerDown}
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