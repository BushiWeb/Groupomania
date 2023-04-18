import PropTypes from 'prop-types';
import style from './CheckboxLabel.module.css';
import Checkbox from './Checkbox.jsx';

/**
 * checkbox with label. It handles its checked state on its own, based on the initial state.
 */
export default function CheckboxLabel({
    isChecked, label, onChange, isDisabled, hasInitialFocus,
}) {
    return (
        <label className={`${isDisabled ? style.disabled : style.label}`}>
            <Checkbox
                isChecked={isChecked}
                onChange={onChange}
                isDisabled={isDisabled}
                hasInitialFocus={hasInitialFocus}
            />
            {label}
        </label>
    );
}

CheckboxLabel.defaultProps = {
    isChecked: false,
    isDisabled: false,
    hasInitialFocus: false,
};

CheckboxLabel.propTypes = {
    /** Weither the checkbox is checked or not */
    isChecked: PropTypes.bool,

    /** Label of the checkbox */
    label: PropTypes.string.isRequired,

    /** Action to execute on click */
    onChange: PropTypes.func,

    /** Weither the checkbox is disabled or not */
    isDisabled: PropTypes.bool,

    /** Weither the checkbox has focus or not */
    hasInitialFocus: PropTypes.bool,
};