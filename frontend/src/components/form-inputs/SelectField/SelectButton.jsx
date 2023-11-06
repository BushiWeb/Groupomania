import PropTypes from 'prop-types';
import {
    forwardRef, useId,
} from 'react';
import SupportText from '../SupportText/SupportText';
import * as TextBox from '../TextBox/index.js';

/**
 * Button for the dropdown list.
 */
const SelectButton = forwardRef(({
    label,
    required,
    disabled,
    leadingIconProps,
    supportText,
    errorMessage,
    isPopupOpened,
    listboxId,
    value,
    className,
    onClick,
    selectedOptionId,
    onKeyDown,
}, ref) => {
    const supportTextId = useId();
    const leadingIcon = leadingIconProps && <TextBox.TextBoxIcon {...leadingIconProps} position="leading"/>;
    const trailingIcon = <TextBox.TextBoxIcon
        name={isPopupOpened ? 'arrow_drop_up' : 'arrow_drop_down'}
        disabled={disabled}
        position="trailing"
    />;

    return (
        <TextBox.Root
            focusInput={() => ref.current?.focus?.()}
            hasValue={!!value}
            isDisabled={disabled}
            hasError={!!errorMessage}
            className={className}
            {... (supportText || errorMessage) && { labelId: supportTextId }}
        >
            <TextBox.InteractiveButton
                label={label}
                onClick={onClick}
                onKeyDown={onKeyDown}
                leadingIcon={leadingIcon}
                trailingIcon={trailingIcon}
                required={required}
                disabled={disabled}
                ref={ref}
                role='combobox'
                aria-required={required}
                aria-expanded={isPopupOpened}
                aria-autocomplete='none'
                {...isPopupOpened && { 'aria-controls': listboxId }}
                aria-activedescendant={selectedOptionId}
            >
                {value}
            </TextBox.InteractiveButton>

            <SupportText
                id={supportTextId}
                supportText={supportText}
                errorMessage={errorMessage}
                required={required}
                disabled={disabled}
                errorIcon
            />
        </TextBox.Root>
    );
});

SelectButton.defaultProps = {
    required: false,
    disabled: false,
    className: '',
    isPopupOpened: false,
};

SelectButton.propTypes = {
    /** Label of the button, required */
    label: PropTypes.string.isRequired,

    /** Weither the field is required or not */
    required: PropTypes.bool,

    /** Weither the field is disabled or not */
    disabled: PropTypes.bool,

    /** Icons to add before the label */
    leadingIconProps: PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
    }),

    /** Text giving more informations about the field */
    supportText: PropTypes.string,

    /** Error message for the field */
    errorMessage: PropTypes.string,

    /** Weither the corresponding popup is opened of not */
    isPopupOpened: PropTypes.bool,

    /** Id of the corresponding popup, required when the popup is opened */
    listboxId: PropTypes.string,

    /** Value of the field */
    value: PropTypes.any,

    /** Additional class names */
    className: PropTypes.string,

    /** Action to execute on click, required */
    onClick: PropTypes.func.isRequired,

    /** Id of the selected option, required when the field has a value */
    selectedOptionId: PropTypes.string,

    /** Action to execute to navigate using the keyboard, required */
    onKeyDown: PropTypes.func.isRequired,
};

export default SelectButton;