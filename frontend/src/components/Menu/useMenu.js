import {
    useEffect, useLayoutEffect, useRef, useState,
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
 * @returns {{
 *  position: {
 *    top: number,
 *    left: number,
 *  }
 *  ref,
 *  focusId: number,
 *  menuItemsEventHandlers: {
 *    handleFocus: Function,
 *  }
 *  menuEventHandlers: {
 *    onKeyDown: Function,
 *    onBlur: Function,
 *  }
 * }}
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
        useFocusTrap: true,
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

        // Place the element underneath the anchor except if it overflows
        let top = anchorBox.y + anchorBox.height + menuBox.height > window.innerHeight ?
            Math.max(0, anchorBox.y - menuBox.height) :
            anchorBox.y + anchorBox.height;

        // Place the element on the side of the anchor where there's more space, while avoiding overflowing
        let left = anchorBox.x < window.innerWidth / 2 ?
            Math.min(anchorBox.x, window.innerWidth - menuBox.width) :
            Math.max(0, anchorBox.x - menuBox.width + anchorBox.width);

        setPosition({
            top,
            left,
        });

    }, [open, anchor]);

    /* Handles the escape key press */
    function handleEscape(e) {
        if (e.key !== 'Escape') {
            return;
        }

        onClose();
    }

    function handleClickOutside(e) {
        if (anchor.contains(e.target)) {
            return;
        }
        onClose();
    }

    useClickOutsideModal(ref, handleClickOutside);

    return {
        position: {
            top,
            left,
        },
        ref,
        menuEventHandlers: {
            onKeyDown: (e) => {
                handleEscape(e);
                handleKeyDown(e);
            },
            onBlur: handleBlur,
        },
        menuItemsEventHandlers: {
            handleFocus,
        },
        focusId,
    };
}