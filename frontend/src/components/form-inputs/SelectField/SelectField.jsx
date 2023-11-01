import PropTypes from 'prop-types';
import style from './SelectField.module.css';
import { useId, useRef } from 'react';
import * as TextBox from '../TextBox/index.js';
import SupportText from '../SupportText/SupportText';

/**
 * Dropdown list selection field.
 */
export default function SelectField({
    value,
    onChange,
    label,
    supportText,
    errorMessage,
    leadingIconProps,
    trailingIconProps,
    className,
    disabled,
    required,
    children,
    ...props
}) {
    return (
        <select
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
            {...props}
        >
            {children}
        </select>
    );
}

SelectField.defaultProps = {
    value: undefined,
    type: 'text',
    supportText: undefined,
    errorMessage: undefined,
    leadingIconProps: undefined,
    trailingIconProps: undefined,
    className: '',
    disabled: false,
    required: false,
    placeholder: undefined,
};

SelectField.propTypes = {
    /** Current value of the test input */
    value: PropTypes.number,

    /** Function to execute when the value changes, required */
    onChange: PropTypes.func.isRequired,

    /** Type of the input, defaults to text */
    type: PropTypes.oneOf([
        'text',
        'password',
        'email',
        'tel',
        'url',
    ]),

    /** Label of the input, required */
    label: PropTypes.string.isRequired,

    /** Text giving more informations about the input */
    supportText: PropTypes.string,

    /** Error message. If it is given, then the input value is considered invalid */
    errorMessage: PropTypes.string,

    /* Object describing the leading icon */
    leadingIconProps: PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
    }),

    /* Object describing the trailing icon, adding an onClick transforms the icon into a button */
    trailingIconProps: PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
        onClick: PropTypes.func,
    }),

    /** Additional class names to add to the container */
    className: PropTypes.string,

    /* Weither the input is disabled or not, defaults to false */
    disabled: PropTypes.bool,

    /* Weither the input is required or not, defaults to false */
    required: PropTypes.bool,

    /* Placeholder for the input */
    placeholder: PropTypes.string,
};