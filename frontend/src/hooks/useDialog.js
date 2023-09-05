import { useEffect, useRef } from 'react';

/**
 * Handles controlled opening and closing of a dialog element.
 * @param {boolean} isOpen
 * @returns Returns a ref to give to the dialog element.
 */
export function useDialog(isOpen) {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (!dialogRef.current) {
            return;
        }

        if (dialogRef.current.open && !isOpen) {
            dialogRef.current.close();
            return;
        }

        if (!dialogRef.current.open && isOpen) {
            dialogRef.current.showModal();
            return;
        }
    }, [isOpen, dialogRef]);

    return dialogRef;
}