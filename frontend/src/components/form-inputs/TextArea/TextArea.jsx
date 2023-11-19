import PropTypes from 'prop-types';
import style from './TextArea.module.css';
import { useId, useRef } from 'react';
import * as TextBox from '../TextBox/index.js';
import SupportText from '../SupportText/SupportText';

/**
 * Text area component. It is a controlled component.
 */
export default function TextArea({
    value,
    onChange,
    label,
    supportText,
    errorMessage,
    className,
    disabled,
    required,
    placeholder,
    rows,
    ...props
}) {
    const supportTextId = useId();
    const inputRef = useRef();
    const inputId = useId();

    return (
        <TextBox.Root
            focusInput={() => inputRef.current?.focus?.()}
            hasPlaceholder={!!placeholder}
            hasValue={!!value}
            isDisabled={disabled}
            hasError={!!errorMessage}
            className={`${style.textAreaRoot} ${className}`}
            {...((supportText || errorMessage) && { labelId: supportTextId })}
        >
            <TextBox.InteractiveContainer
                label={label}
                inputId={inputId}
                required={required}
                className={style.textAreaContainer}
            >
                <textarea
                    value={value}
                    onChange={onChange}
                    id={inputId}
                    disabled={disabled}
                    required={required}
                    placeholder={placeholder}
                    className={style.textarea}
                    ref={inputRef}
                    rows={rows}
                    aria-invalid={!!errorMessage}
                    {...props}
                />
            </TextBox.InteractiveContainer>

            <SupportText
                id={supportTextId}
                supportText={supportText}
                errorMessage={errorMessage}
                errorIcon={true}
                required={required}
                disabled={disabled}
            />
        </TextBox.Root>
    );
}

TextArea.defaultProps = {
    value: '',
    supportText: undefined,
    errorMessage: undefined,
    className: '',
    disabled: false,
    required: false,
    placeholder: undefined,
    rows: 5,
};

TextArea.propTypes = {
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

    /* Weither the input is disabled or not, defaults to false */
    disabled: PropTypes.bool,

    /* Weither the input is required or not, defaults to false */
    required: PropTypes.bool,

    /* Placeholder for the input */
    placeholder: PropTypes.string,

    /* Number of rows for the text area, default to 5 */
    rows: PropTypes.number,
};
