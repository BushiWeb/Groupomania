import { useCallback, useRef } from 'react';
import { tabbable } from 'tabbable';

/**
 * Handles controlled opening and closing of a dialog element.
 * @param {boolean} isOpen
 * @returns {
 *  ref,
 *  dialogRef: Function,
 *  dialogEventHandlers: {
 *      onKeyDown: Function,
 *  },
 * } Returns an object, dialogRef is to be given to the dialog as a ref,
 *  ref is the reference containing that said dialog.
 */
export function useDialog(isOpen) {
    const ref = useRef(null);
    const tabbableElements = useRef(null);

    // Use the mutation observer to recalculate the tabbable elements when the dialog content changes.
    function handleDOMUpdate() {
        tabbableElements.current = tabbable(ref.current);
    }
    const { current: mutationObserver } = useRef(
        new MutationObserver(handleDOMUpdate),
    );

    // Creates the focus trap.
    function handleTab(e) {
        if (e.key !== 'Tab') {
            return;
        }

        // Focus the last element if Shift+Tab is pressed while on the first element
        if (
            e.shiftKey &&
            document.activeElement === tabbableElements.current[0]
        ) {
            e.preventDefault();
            tabbableElements.current.at?.(-1)?.focus();
            return;
        }

        // Focus the first element if Tab is pressed while on the last element
        if (
            !e.shiftKey &&
            document.activeElement === tabbableElements.current.at?.(-1)
        ) {
            e.preventDefault();
            tabbableElements.current[0]?.focus();
            return;
        }
    }

    const dialogRef = useCallback(
        (node) => {
            if (ref.current) {
                // Removes focus trap
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
        },
        [tabbableElements, isOpen, mutationObserver],
    );

    return {
        dialogRef,
        ref,
        dialogEventHandlers: {
            onKeyDown: handleTab,
        },
    };
}
