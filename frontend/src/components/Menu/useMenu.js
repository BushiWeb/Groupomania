import {
    useCallback, useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import { useClickOutsideModal } from '../../hooks/useClickOutside.js';
import { NO_CONTROL, useArrowNavigation } from '../../hooks/useArrowNavigation.js';

/**
 * Hook providing the logic for the menu
 * @param {Object} props
 * @param {HTMLElement} [props.anchor] - Element to anchor the menu to
 * @param {bool} [props.open=false] - Weither the tooltip is opened or not
 * @param {Function} props.onClose - Function to execute when closing the menu
 * @param {Array} props.items - Items of the list
 * @returns {{top: number, left: number, ref, focusId: number, handleFocus: Function}}
 *  Returns an object containing the position of the menu
 */
export default function useMenu({
    anchor,
    open = false,
    onClose,
    items,
}) {
    const ref = useRef(null);
    const [{ top, left }, setPosition] = useState({ top: 0, left: 0 });
    const {
        handleBlur,
        handleFocus,
        handleKeyDown,
        focusId,
        setFocusId,
    } = useArrowNavigation(items.map(({ label }) => label), {
        initialFocus: 0,
        useHomeEnd: NO_CONTROL,
        useLeftRight: true,
        useFirstLetter: true,
    });

    useEffect(() => {
        if (open) {
            setFocusId(0);
        }
    }, [open, setFocusId]);

    /* Get position when opening */
    useLayoutEffect(() => {
        if (!ref.current) {
            return;
        }

        if (!anchor) {
            setPosition({
                top: 0,
                left: 0,
            });
            return;
        }

        const menuBox = ref.current.getBoundingClientRect();
        const anchorBox = anchor.getBoundingClientRect();

        let top = anchorBox.y + anchorBox.height + menuBox.height > window.innerHeight ?
            Math.max(0, anchorBox.y - menuBox.height) :
            anchorBox.y + anchorBox.height;

        let left = anchorBox.x < window.innerWidth / 2 ?
            Math.min(anchorBox.x, window.innerWidth - menuBox.width) :
            Math.max(0, anchorBox.x - menuBox.width + anchorBox.width);

        setPosition({
            top,
            left,
        });

    }, [open, anchor]);

    /* Handles the escape key press */
    const handleEscape = useCallback((e) => {
        if (e.key !== 'Escape') {
            return;
        }

        onClose();
    }, [onClose]);

    function handleClickOutside(e) {
        onClose();
    }

    useClickOutsideModal(ref, handleClickOutside);

    /* Creates the ref and adds the event handlers */
    const menuRef = useCallback((node) => {
        if (ref.current) {
            ref.current.removeEventListener('keydown', handleEscape);
            ref.current.removeEventListener('keydown', handleKeyDown);
            ref.current.removeEventListener('blur', handleBlur);
        }

        if (node) {
            node.addEventListener('keydown', handleEscape);
            node.addEventListener('keydown', handleKeyDown);
            node.addEventListener('blur', handleBlur);
        }

        ref.current = node;
    }, [handleBlur, handleEscape, handleKeyDown]);

    return {
        top,
        left,
        ref: menuRef,
        handleFocus,
        focusId,
    };
}