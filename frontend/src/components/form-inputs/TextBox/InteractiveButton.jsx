import PropTypes from 'prop-types';
import style from './TextBox.module.css';
import InteractiveElement from '../../InteractiveElement/InteractiveElement.jsx';
import { forwardRef, useId } from 'react';

/**
 * Similar to Interactive Container, but includes a button.
 * The label of the button is contained within the children.
 */
const InteractiveButton = forwardRef(
    (
        {
            label,
            required,
            leadingIcon,
            trailingIcon,
            className,
            children,
            onClick,
            ...props
        },
        ref,
    ) => {
        const labelId = useId();

        return (
            <InteractiveElement
                rootElement="button"
                type="button"
                onClick={onClick}
                active={false}
                stateLayerColor={false}
                className={`${style.interactiveContainer} ${className}`}
                {...(leadingIcon && { 'data-leading-icon': true })}
                {...(trailingIcon && { 'data-trailing-icon': true })}
                ref={ref}
                aria-labelledby={labelId}
                {...props}
            >
                {leadingIcon}
                <span className={style.labelText} id={labelId}>
                    {label}
                    {required && '*'}
                </span>
                <span className={style.buttonContent}>{children}</span>
                {trailingIcon}
            </InteractiveElement>
        );
    },
);

InteractiveButton.defaultProps = {
    required: false,
    leadingIcon: undefined,
    trailingIcon: undefined,
    className: '',
};

InteractiveButton.propTypes = {
    /* Weither the input is required or not, default to false */
    required: PropTypes.bool,

    /* Leading icon element */
    leadingIcon: PropTypes.element,

    /* Trailing icon element, not interactive */
    trailingIcon: PropTypes.element,

    /* Additionnal classnames for the root element */
    className: PropTypes.string,
};

export default InteractiveButton;
