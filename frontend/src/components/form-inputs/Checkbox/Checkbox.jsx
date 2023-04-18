import PropTypes from 'prop-types';
import style from './Checkbox.module.css';

/**
 * checkbox with label. It handles its checked state on its own, based on the initial state.
 */
export default function Checkbox({
    isChecked, onChange, isDisabled, hasInitialFocus,
}) {
    return (
        <input
            type="checkbox"
            className={`${style.checkbox}`}
            defaultChecked={isChecked}
            disabled={isDisabled}
            autoFocus={!isDisabled && hasInitialFocus}
            onChange={onChange}
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