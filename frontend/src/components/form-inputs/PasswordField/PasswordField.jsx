import PropTypes from 'prop-types';
import TextField from '../TextField/TextField';
import { useState } from 'react';

/**
 * Password input component, with a show password button. It is a controlled component.
 * All additionnal props are given to the input, so passing autoFocus, disabled and such is possible.
 */
export default function PasswordField({
    value,
    onChange,
    label,
    supportText,
    errorMessage,
    leadingIconProps,
    className,
    disabled,
    required,
    ...inputProps
}) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const props = {
        value,
        onChange,
        label,
        supportText,
        errorMessage,
        className,
        leadingIconProps,
        disabled,
        required,
        ...inputProps,
    };

    return <TextField
        type={passwordVisible ? 'text' : 'password'}
        trailingIconProps={{
            name: passwordVisible ? 'visibility_off' : 'visibility',
            label: passwordVisible ? 'Cacher le mot de passe' : 'Montrer le mot de passe',
            onClick: (e) => setPasswordVisible((visible) => !visible),
        }}
        {...props}
    />;
}

PasswordField.defaultProps = {
    value: '',
    supportText: undefined,
    errorMessage: undefined,
    leadingIconProps: undefined,
    className: '',
    disabled: false,
    required: false,
};

PasswordField.propTypes = {
    /** Current value of the test input */
    value: PropTypes.string,

    /** Function to execute when the value changes, required */
    onChange: PropTypes.func.isRequired,

    /** Label of the input, required */
    label: PropTypes.string.isRequired,

    /** Text giving more informations about the input */
    supportText: PropTypes.string,

    /** Error message. If it is given, then the input value is considered invalid */
    errorMessage: PropTypes.string,

    /** Additional class names to add to the container */
    className: PropTypes.string,

    /* Object describing the leading icon */
    leadingIconProps: PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
    }),

    /* Weither the input is disabled or not, defaults to false */
    disabled: PropTypes.bool,

    /* Weither the input is required or not, defaults to false */
    required: PropTypes.bool,
};