import PropTypes from 'prop-types';
import style from './Checkbox.module.css';
import { useRef } from 'react';

/**
 * checkbox with label. It handles its checked state on its own, based on the initial state.
 */
export default function Checkbox({
    isChecked, onChange, isDisabled, hasInitialFocus,
}) {
    const timeoutId = useRef(null);
    const animationDuration = 500;

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
        const stateLayerWidth = parseInt(window.getComputedStyle(e.target, ':before').width);
        const stateLayerMargin = (box.width - stateLayerWidth) / 2;

        // Get the click coordinates
        const clickX = e.clientX - box.x - stateLayerMargin,
            clickY = e.clientY - box.y - stateLayerMargin;
        e.target.style.setProperty('--origin-x', `${clickX}px`);
        e.target.style.setProperty('--origin-y', `${clickY}px`);

        // Calculates the size of the background
        const radius = stateLayerWidth / 2 + Math.sqrt(
            (stateLayerWidth / 2 - clickX) ** 2 + (stateLayerWidth / 2 - clickY) ** 2
        );
        e.target.style.setProperty('--width', `${radius * 2}px`);

        // Start the animation
        e.target.classList.add('ripple');
        timeoutId.current = setTimeout(() => {
            timeoutId.current = null;
            e.target.classList.remove('ripple');
        }, animationDuration);

    }

    return (
        <input
            type="checkbox"
            className={`${style.checkbox}`}
            defaultChecked={isChecked}
            disabled={isDisabled}
            autoFocus={!isDisabled && hasInitialFocus}
            onChange={onChange}
            onPointerDown={handlePointerDown}
        />
    );
}

Checkbox.defaultProps = {
    isChecked: false,
    isDisabled: false,
    hasInitialFocus: false,
};

Checkbox.propTypes = {
    /** Weither the checkbox is checked or not */
    isChecked: PropTypes.bool,

    /** Action to execute on click */
    onChange: PropTypes.func,

    /** Weither the checkbox is disabled or not */
    isDisabled: PropTypes.bool,

    /** Weither the checkbox has focus or not */
    hasInitialFocus: PropTypes.bool,
};