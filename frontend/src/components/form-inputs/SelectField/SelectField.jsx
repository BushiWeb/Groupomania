import PropTypes from 'prop-types';
import SelectButton from './SelectButton';
import Listbox from './Listbox';
import ListboxOption from './ListboxOption';
import useSelectField from './useSelectField';

/**
 * Dropdown list selection field.
 */
export default function SelectField({
    label,
    value,
    valueCollection,
    onChange,
    required,
    leadingIconProps,
    disabled,
    supportText,
    errorMessage,
    className,
}) {
    const {
        wrapperRef,
        comboboxRef,
        handleKeyboardInteraction,
        handleButtonClick,
        handleContainerBlur,
        handleOptionClick,
        orderedValueCollection,
        listboxId,
        selectedId,
        isPopupOpened,
        setIsPopupOpened,
        popupAnchor,
    } = useSelectField({
        value,
        valueCollection,
        onChange,
    });

    return (
        <div
            onBlur={handleContainerBlur}
            ref={wrapperRef}
        >
            <SelectButton
                label={label}
                value={orderedValueCollection[selectedId]?.label || ''}
                required={required}
                disabled={disabled}
                leadingIconProps={leadingIconProps}
                supportText={supportText}
                errorMessage={errorMessage}
                isPopupOpened={isPopupOpened}
                setIsPopupOpened={setIsPopupOpened}
                listboxId={listboxId}
                {...isPopupOpened &&
                    selectedId >= 0 &&
                    selectedId !== null &&
                    { selectedOptionId: orderedValueCollection[selectedId].id }}
                className={className}
                onClick={handleButtonClick}
                onKeyDown={handleKeyboardInteraction}
                ref={comboboxRef}
            />

            {isPopupOpened &&
            <Listbox
                open={isPopupOpened}
                anchor={popupAnchor}
            >
                {orderedValueCollection.map(({ label, id }, index) =>
                    <ListboxOption
                        label={label}
                        selected={selectedId === index}
                        onClick={handleOptionClick(index)}
                        onMouseDown={(e) => e.preventDefault()}
                        id={id}
                        key={id}
                    />)}
            </Listbox>
            }
        </div>
    );
}

SelectField.defaultProps = {
    required: false,
    disabled: false,
    className: '',
};

SelectField.propTypes = {
    /** Label of the field, required */
    label: PropTypes.string.isRequired,

    /** Value of the field */
    value: PropTypes.any,

    /** List of possible values and their labels, required */
    valueCollection: PropTypes.arrayOf(PropTypes.exact({
        value: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired,
    })).isRequired,

    /** Function to execute when the value changes, required */
    onChange: PropTypes.func.isRequired,

    /** Weither the field is required or not */
    required: PropTypes.bool,

    /** Icons to add before the label */
    leadingIconProps: PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
    }),

    /** Weither the field is disabled or not */
    disabled: PropTypes.bool,

    /** Text giving more informations about the field */
    supportText: PropTypes.string,

    /** Error message for the field */
    errorMessage: PropTypes.string,

    /** Additional class names */
    className: PropTypes.string,
};