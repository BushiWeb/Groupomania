import { useId, useRef, useState } from 'react';
import {
    NO_CONTROL,
    useArrowNavigation,
} from '../../../hooks/useArrowNavigation.js';

/**
 * Hook containing the logic of the select field
 * @returns {{
 * wrapperRef,
 * comboboxRef,
 * handleKeyboardInteraction,
 * handleButtonClick,
 * handleContainerBlur,
 * handleOptionClick,
 * orderedValueCollection,
 * listboxId,
 * selectedId,
 * isPopupOpened,
 * setIsPopupOpened,
 * popupAnchor,
 * }}
 */
export default function useSelectField({ value, valueCollection, onChange }) {
    const comboboxRef = useRef(null);
    const wrapperRef = useRef(null);

    // Listbox related informations
    const listboxId = useId();
    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const [popupAnchor, setPopupAnchor] = useState(null);
    const stringComparator = new Intl.Collator('fr');
    const orderedValueCollection = valueCollection
        .map(({ value, label }, index) => ({
            value,
            label,
            id: `${listboxId}-${index}-${value}-${label}`,
        }))
        .toSorted((a, b) => stringComparator.compare(a.label, b.label));

    // Keyboard interactions
    const {
        handleKeyDown,
        focusId: selectedId,
        setFocusId: setSelectedId,
    } = useArrowNavigation(
        orderedValueCollection.map(({ label }) => label),
        {
            initialFocus: orderedValueCollection.findIndex(
                ({ value: optionValue }) => optionValue === value,
            ),
            useHomeEnd: NO_CONTROL,
            useFirstLetter: true,
        },
        (index) =>
            index === null ?
                onChange(undefined)
            :   onChange(orderedValueCollection[index].value),
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

    // Button click handler
    function handleButtonClick(e) {
        setIsPopupOpened((previous) => !previous);
        setPopupAnchor(e.currentTarget);
    }

    // Container blur handler
    function handleContainerBlur() {
        setIsPopupOpened(false);
    }

    // Option click hander
    function handleOptionClick(index) {
        return () => {
            setSelectedId(index);
            comboboxRef.current?.focus?.();
            setIsPopupOpened(false);
        };
    }

    return {
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
    };
}
