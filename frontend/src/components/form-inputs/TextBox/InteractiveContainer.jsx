import PropTypes from 'prop-types';
import style from './TextBox.module.css';
import InteractiveElement from '../../InteractiveElement/InteractiveElement.jsx';

/**
 * Contains the label and the input of the text box
 */
export default function InteractiveContainer({
    label,
    required,
    leadingIcon,
    trailingIcon,
    inputId,
    className,
    children,
}) {
    return (
        <InteractiveElement
            rootElement="div"
            active={false}
            stateLayerColor={false}
            className={`${style.interactiveContainer} ${className}`}
            {...(leadingIcon && { 'data-leading-icon': true })}
            {...(trailingIcon && { 'data-trailing-icon': true })}
        >
            {leadingIcon}
            {children}
            {trailingIcon}
            <label className={style.labelText} htmlFor={inputId}>
                {label}
                {required && '*'}
            </label>
        </InteractiveElement>
    );
}

InteractiveContainer.defaultProps = {
    required: false,
    leadingIcon: undefined,
    trailingIcon: undefined,
    className: '',
};

InteractiveContainer.propTypes = {
    /* Label of the input, required */
    label: PropTypes.string.isRequired,

    /* Weither the input is required or not, default to false */
    required: PropTypes.bool,

    /* Leading icon element */
    leadingIcon: PropTypes.element,

    /* Trailing icon element */
    trailingIcon: PropTypes.element,

    /* Id of the input element, to link the label, required */
    inputId: PropTypes.string.isRequired,

    /* Additionnal classnames for the root element */
    className: PropTypes.string,
};
