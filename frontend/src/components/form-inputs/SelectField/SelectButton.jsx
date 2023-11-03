import PropTypes from 'prop-types';
import style from './SelectField.module.css';
import {
    forwardRef, useId, useRef, useState,
} from 'react';
import SupportText from '../SupportText/SupportText';
import * as TextBox from '../TextBox/index.js';

/**
 * Dropdown list selection field.
 */
const SelectButton = forwardRef(({
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
    onBlur,
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
                label='Rôle'
                onClick={onClick}
                onKeyDown={onKeyDown}
                onBlur={onBlur}
                leadingIcon={leadingIcon}
                trailingIcon={trailingIcon}
                required={required}
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
            />
        </TextBox.Root>
    );
});

SelectButton.defaultProps = {
};

SelectButton.propTypes = {
};

export default SelectButton;