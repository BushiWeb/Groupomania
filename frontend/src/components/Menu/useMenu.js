import {
    useCallback, useLayoutEffect, useRef, useState,
} from 'react';
import { useClickOutsideModal } from '../../hooks/useClickOutside.js';

/**
 * Hook providing the logic for the menu
 * @param {Object} props
 * @param {HTMLElement} [props.anchor] - Element to anchor the menu to
 * @param {bool} [props.open=false] - Weither the tooltip is opened or not
 * @param {Function} props.onClose - Function to execute when closing the menu
 * @returns {{top: number, left: number, ref}} Returns an object containing the position of the menu
 */
export default function useMenu({
    anchor,
    open = false,
    onClose,
}) {
    const ref = useRef(null);
    const [{ top, left }, setPosition] = useState({ top: 0, left: 0 });

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

        setPosition({
            top: anchorBox.y + anchorBox.height,
            left: anchorBox.x - menuBox.width + anchorBox.width,
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
        }

        if (node) {
            node.addEventListener('keydown', handleEscape);
        }

        ref.current = node;
    }, [handleEscape]);

    return {
        top,
        left,
        ref: menuRef,
    };
}