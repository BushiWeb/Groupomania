import PropTypes from 'prop-types';
import style from './Checkbox.module.css';
import { useRipple } from '../../../hooks/useRipple.js';
import { useTargetLayer } from '../../../hooks/useTargetLayer';
import { useStateLayer } from '../../../hooks/useStateLayer';

/**
 * checkbox with label. It handles its checked state on its own, based on the initial state.
 */
export default function Checkbox({
    isChecked, onChange, isDisabled, hasInitialFocus,
}) {
    const rippleTrigger = useRipple();
    const targetLayerProps = useTargetLayer();
    const stateLayerProps = useStateLayer(
        { hover: true, focus: true, active: true },
        {
            width: '2.5rem', height: '2.5rem', color: 'on-surface', borderRadius: '50%',
        }
    );

    function handlePointerDown(e) {
        rippleTrigger(e.target, { x: e.clientX, y: e.clientY });
    }

    function handleKeyDown(e) {
        if (e.key === ' ') {
            rippleTrigger(e.target);
        }
    }

    return (
        <input
            type="checkbox"
            className={style.checkbox}
            defaultChecked={isChecked}
            disabled={isDisabled}
            autoFocus={!isDisabled && hasInitialFocus}
            onChange={onChange}
            onPointerDown={handlePointerDown}
            onKeyDown={handleKeyDown}
            {...targetLayerProps}
            {...stateLayerProps}
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