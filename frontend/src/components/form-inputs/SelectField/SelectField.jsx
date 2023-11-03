import PropTypes from 'prop-types';
import style from './SelectField.module.css';
import {
    useId, useRef, useState,
} from 'react';
import SelectButton from './SelectButton';
import Listbox from './Listbox';
import { NO_CONTROL, useArrowNavigation } from '../../../hooks/useArrowNavigation';
import ListboxOption from './ListboxOption';

/**
 * Dropdown list selection field.
 */
export default function SelectField({
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
    const comboboxRef = useRef(null);
    const wrapperRef = useRef(null);

    // Listbox related informations
    const listboxId = useId();
    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const [popupAnchor, setPopupAnchor] = useState(false);
    const stringComparator = new Intl.Collator('fr');
    const orderedValueCollection = valueCollection.map(({ value, label }, index) => ({
        value,
        label,
        id: `${listboxId}-${index}-${value}-${label}`,
    }))/* .toSorted((a, b) => stringComparator.compare(a.label, b.label)) */;

    // Keyboard intractions
    const {
        handleKeyDown,
        focusId: selectedId,
        setFocusId: setSelectedId,
    } = useArrowNavigation(
        orderedValueCollection.map(({ label }) => label),
        {
            initialFocus: orderedValueCollection.findIndex(({ value: optionValue }) => optionValue === value),
            useHomeEnd: NO_CONTROL,
            useFirstLetter: true,
        },
        (index) => index === null ? onChange(undefined) : onChange(orderedValueCollection[index].value)
    );

    function handleKeyboardInteraction(e) {
        if (e.key === 'Escape') {
            e.preventDefault();
            e.stopPropagation();
            setIsPopupOpened(false);
            return;
        }

        if (e.key === 'ArrowDown' && e.altKey) {
            e.preventDefault();
            e.stopPropagation();
            setIsPopupOpened(true);
            return;
        }

        if (e.key === 'ArrowUp' && e.altKey) {
            e.preventDefault();
            e.stopPropagation();
            setIsPopupOpened(false);
            return;
        }

        handleKeyDown(e);
    }

    return (
        <div
            onBlur={(e) => setIsPopupOpened(false)}
            ref={wrapperRef}
        >
            <SelectButton
                value={orderedValueCollection[selectedId].label || ''}
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
                onClick={(e) => {
                    setIsPopupOpened(previous => !previous);
                    setPopupAnchor(e.currentTarget);
                }}
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
                        onClick={(e) => {
                            setSelectedId(index);
                            onChange(orderedValueCollection[index].value);
                            comboboxRef.current?.focus?.();
                            setIsPopupOpened(false);
                        }}
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
};

SelectField.propTypes = {
};