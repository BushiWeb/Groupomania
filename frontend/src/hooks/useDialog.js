import {
    useCallback, useRef,
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

    // Use the mutation observer to recalculate the tabbable elements when the dialog content changes.
    function handleDOMUpdate(record) {
        tabbableElements.current = tabbable(ref.current);
    }
    const { current: mutationObserver } = useRef(new MutationObserver(handleDOMUpdate));

    // Creates the focus trap.
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
            mutationObserver.disconnect();
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
                mutationObserver.observe(node, {
                    subtree: true,
                    childList: true,
                    attributes: true,
                    attributeFilter: [
                        'style',
                        'hidden',
                        'inert',
                        'disabled',
                        'tabindex',
                        'controls',
                        'contenteditable',
                        'class',
                        'type',
                        'href',
                    ],
                });
            }
        }

        ref.current = node;
    }, [tabbableElements, isOpen, mutationObserver]);

    return dialogRef;
}