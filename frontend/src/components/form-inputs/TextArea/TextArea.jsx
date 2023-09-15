import PropTypes from 'prop-types';
import InteractiveElement from '../../InteractiveElement/InteractiveElement.jsx';
import { useId, useRef } from 'react';
import SupportText from './SupportText';
import style from './TextArea.module.css';

/**
 * Text area component. It is a controlled component.
 * All additionnal props are given to the input, so passing autoFocus, disabled and such is possible.
 */
export default function TextArea({
    onChange, label, supportText, errorMessage, className, value, ...props
}) {
    const supportTextId = useId();
    const inputRef = useRef();

    if (props?.required) {
        supportText = `*requis${supportText ? `, ${supportText}` : ''}`;
    }

    function handleClick(e) {
        if (inputRef) {
            inputRef.current.focus();
        }
    }

    return <div
        className={`${style.textareaField} ${className}`}
        onClick={handleClick}
        {...props?.disabled && { 'data-disabled': true }}
        {...errorMessage && { 'data-error': true, 'role': 'alert' }}
    >
        <InteractiveElement
            rootElement="label"
            active={false}
            stateLayerColor={false}
            className={style.labelContainer}
        >
            <textarea
                className={`${style.textarea} ${value ? style.filledTextarea : ''}`}
                onChange={onChange}
                value={value}
                {...props}
                ref={inputRef}
                {...(errorMessage || supportText) && { 'aria-describedby': supportTextId }}
            />
            <span className={style.labelText}>{label}{props?.required && '*'}</span>
        </InteractiveElement>

        <SupportText
            errorMessage={errorMessage}
            supportText={supportText}
            id={supportTextId}
        />
    </div>;
}

TextArea.defaultProps = {
    value: undefined,
    supportText: undefined,
    errorMessage: undefined,
    placeholder: undefined,
    className: '',
};

TextArea.propTypes = {
    /** Value of the text area */
    value: PropTypes.string,

    /** Function to execute when the value changes, required */
    onChange: PropTypes.func.isRequired,

    /** Label of the input, required */
    label: PropTypes.string.isRequired,

    /** Text giving more informations about the input */
    supportText: PropTypes.string,

    /** Error message. If it is given, then the input value is considered invalid */
    errorMessage: PropTypes.string,

    /** Input placeholder */
    placeholder: PropTypes.string,

    /** Additional class names to add to the container */
    className: PropTypes.string,
};