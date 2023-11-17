import PropTypes from 'prop-types';
import style from './TextBox.module.css';

/**
 * Root element for the text box.
 * Creates a context to share the text box state.
 */
export default function Root({
    hasPlaceholder,
    hasValue,
    isDisabled,
    hasError,
    focusInput,
    className,
    children,
    label,
    labelId,
    ...props
}) {
    return (
        <div
            className={`${style.root} ${className}`}
            onClick={focusInput}
            aria-label={label}
            aria-labelledby={labelId}
            {...(hasPlaceholder && { 'data-placeholder': true })}
            {...(hasValue && { 'data-value': true })}
            {...(isDisabled && { 'data-disabled': true })}
            {...(hasError && { 'data-error': true, role: 'alert' })}
            {...props}
        >
            {children}
        </div>
    );
}

Root.defaultProps = {
    hasPlaceholder: false,
    hasValue: false,
    isDisabled: false,
    hasError: false,
    className: '',
    label: undefined,
    labelId: undefined,
};

Root.propTypes = {
    /* Weither the input has a placeholder, default to false */
    hasPlaceholder: PropTypes.bool,

    /* Weither the input has a value, default to false */
    hasValue: PropTypes.bool,

    /* Weither the input is disabled, default to false */
    isDisabled: PropTypes.bool,

    /* Weither the input has an error, default to false */
    hasError: PropTypes.bool,

    /* Function to focus the input element, required */
    focusInput: PropTypes.func.isRequired,

    /* Additionnal classnames for the root element */
    className: PropTypes.string,

    /* Label */
    label: PropTypes.string,

    /* Id of an element acting as the label */
    labelId: PropTypes.string,
};
