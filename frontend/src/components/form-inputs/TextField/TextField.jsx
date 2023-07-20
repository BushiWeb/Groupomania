import PropTypes from 'prop-types';
import style from './TextField.module.css';
import InteractiveElement from '../../InteractiveElement/InteractiveElement.jsx';
import Icon from '../../Icon/Icon';
import { useId, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDarkTheme } from '../../../utils/selectors';
import TrailingIcon from './TrailingIcon';
import SupportText from './SupportText';

/**
 * Text field component. It is a controlled component.
 * Allows to create text, password, email, tel and url inputs.
 * All additionnal props are given to the input, so passing autoFocus, disabled and such is possible.
 */
export default function TextField({
    value, onChange, label, type, supportText, errorMessage, trailingIcon, leadingIcon, className, ...inputProps
}) {
    const supportTextId = useId();
    const darkTheme = useSelector(selectIsDarkTheme);
    const inputRef = useRef();

    if (inputProps?.required) {
        supportText = `*requis${supportText ? `, ${supportText}` : ''}`;
    }

    function handleClick(e) {
        if (inputRef) {
            inputRef.current.focus();
        }
    }

    return <div
        className={`${style.textField} ${className}`}
        onClick={handleClick}
        {...inputProps?.disabled && { 'data-disabled': true }}
        {...errorMessage && { 'data-error': true, 'role': 'alert' }}
    >

        {leadingIcon && <Icon {...leadingIcon} className={style.leadingIcon} isOnDark={darkTheme}/>}

        <InteractiveElement
            rootElement="label"
            active={false}
            stateLayerColor={false}
            className={style.labelContainer}
            {...leadingIcon && { 'data-leading-icon': true }}
            {...trailingIcon && { 'data-trailing-icon': true }}
        >
            <input
                type={type}
                className={`${style.input} ${value ? style.filledInput : ''}`}
                onChange={onChange}
                value={value}
                {...inputProps}
                ref={inputRef}
                {...(errorMessage || supportText) && { 'aria-describedby': supportTextId }}
            />
            <span className={style.labelText}>{label}{inputProps?.required && '*'}</span>
        </InteractiveElement>

        {
            (trailingIcon || errorMessage) &&
            <TrailingIcon
                disabled={inputProps?.disabled}
                error={!!errorMessage}
                {...trailingIcon}
            />
        }

        <SupportText
            errorMessage={errorMessage}
            supportText={supportText}
            id={supportTextId}
            errorIcon={!!trailingIcon?.onClick}
        />
    </div>;
}

TextField.defaultProps = {
    type: 'text',
    value: '',
    supportText: undefined,
    errorMessage: undefined,
    placeholder: undefined,
    trailingIcon: undefined,
    leadingIcon: undefined,
    className: '',
};

TextField.propTypes = {
    /** Current value of the test input */
    value: PropTypes.string,

    /** Function to execute when the value changes, required */
    onChange: PropTypes.func.isRequired,

    /** Label of the input, required */
    label: PropTypes.string.isRequired,

    /** Type of the input, defaults to text */
    type: PropTypes.oneOf([
        'text',
        'password',
        'email',
        'tel',
        'url',
    ]),

    /** Text giving more informations about the input */
    supportText: PropTypes.string,

    /** Error message. If it is given, then the input value is considered invalid */
    errorMessage: PropTypes.string,

    /** Input placeholder */
    placeholder: PropTypes.string,

    /**
     * Object describing the trailing icon,
     * additionnal properties are given to the icon,
     * adding an onClick transforms the icon into a button
     */
    trailingIcon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
        onClick: PropTypes.func,
    }),

    /**
     * Object describing the leading icon,
     * additionnal properties are given to the icon
     */
    leadingIcon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
    }),

    /** Additional class names to add to the container */
    className: PropTypes.string,
};