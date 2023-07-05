import PropTypes from 'prop-types';
import TextField from '../TextField/TextField';
import { useState } from 'react';

/**
 * Password input component, with a show password button. It is a controlled component.
 * All additionnal props are given to the input, so passing autoFocus, disabled and such is possible.
 */
export default function PasswordField({
    value, onChange, label, supportText, errorMessage, leadingIcon, className, ...inputProps
}) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const props = {
        value,
        onChange,
        label,
        supportText,
        errorMessage,
        className,
        leadingIcon,
        ...inputProps,
    };

    return <TextField
        type={passwordVisible ? 'text' : 'password'}
        trailingIcon={{
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
    className: '',
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

    /**
     * Object describing the leading icon,
     * additionnal properties are given to the icon
     */
    leadingIcon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
    }),
};