import PropTypes from 'prop-types';
import style from './CheckboxLabel.module.css';
import Checkbox from './Checkbox.jsx';

/**
 * Checkbox with a visible label. The label is given as the child of the component.
 */
export default function CheckboxLabel({
    children, checked, onChange, disabled, autoFocus, className, ...other
}) {
    return (
        <label className={`${disabled ? style.disabled : style.label} ${className}`}>
            <Checkbox
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                autoFocus={autoFocus}
                {...other}
            />
            {children}
        </label>
    );
}

CheckboxLabel.defaultProps = {
    checked: false,
    disabled: false,
    autoFocus: false,
    label: undefined,
    className: '',
};

CheckboxLabel.propTypes = {
    /** Weither the checkbox is checked or not */
    checked: PropTypes.bool,

    /** Action to execute on click */
    onChange: PropTypes.func.isRequired,

    /** Weither the checkbox is disabled or not */
    disabled: PropTypes.bool,

    /** Weither the checkbox has focus or not */
    autoFocus: PropTypes.bool,

    /** Other classnames */
    className: PropTypes.string,
};