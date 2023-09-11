import {
    useCallback, useEffect, useRef, useState,
} from 'react';
import { tabbable } from 'tabbable';

/**
 * Handles controlled opening and closing of a dialog element.
 * @param {boolean} isOpen
 * @returns Returns a ref to give to the dialog element.
 */
export function useDialog(isOpen) {
    const ref = useRef(null);
    const tabbableElements = useRef(null);

    function handleTab(e) {
        if (e.key !== 'Tab') {
            return;
        }

        // Focus the last element if Shift+Tab is pressed while on the first element
        if (e.shiftKey && document.activeElement === tabbableElements.current[0]) {
            e.preventDefault();
            tabbableElements.current.at?.(-1)?.focus();
            return;
        }

        // Focus the first element if Tab is pressed while on the last element
        if (!e.shiftKey && document.activeElement === tabbableElements.current.at?.(-1)) {
            e.preventDefault();
            tabbableElements.current[0]?.focus();
            return;
        }
    }

    const dialogRef = useCallback(node => {
        if (ref.current) {
            // Removes focus trap
            ref.current.removeEventListener('keydown', handleTab);
        }

        if (node) {
            // Handles state
            if (node.open && !isOpen) {
                node.close();
            } else if (!node.open && isOpen) {
                node.showModal();
            }

            // Add focus trap
            if (node.open) {
                tabbableElements.current = tabbable(node);
                node.addEventListener('keydown', handleTab);
            }
        }

        ref.current = node;
    }, [tabbableElements, isOpen]);

    return dialogRef;
}