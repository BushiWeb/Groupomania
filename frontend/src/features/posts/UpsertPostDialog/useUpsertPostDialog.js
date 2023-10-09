import { useState } from 'react';
import { ACTIONS } from './formReducer.js';
import { useUpsertPostForm } from './useUpsertPostForm.js';

/**
 * Hook handling form validation, submission and request errors for the post creation form
 * @param {Function} setIsOpen - Function to open or close the dialog
 * @param {{postId: number, title: string, message: string, imageUrl: string}} [post]
 * @returns {
 *  confirmDialog: {
 *      isConfirmOpen,
 *      setIsConfirmOpen,
 *  },
 *  isLoading,
 *  data,
 *  dispatch,
 *  dialogActions: {
 *      confirm,
 *      cancel,
 *      save,
 *  },
 * }
 */
export function useUpsertPostDialog(setIsOpen, post) {
    // Confirm dialog state
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    // Mutation data. When the mutation is successful, close the form
    function onSuccess() {
        setIsOpen(false);
    }
    const {
        isLoading,
        mutate,
        dispatch,
        data,
    } = useUpsertPostForm(onSuccess, post);

    /*
     * Function executed when attempting to close the form.
     * If any changes were made, open the confirm dialog.
     * Otherwise, close the dialog
     */
    function confirm() {
        if (data.message === '' && data.title === '' && data.image === null) {
            return cancel();
        }
        setIsConfirmOpen(true);
    }

    /*
     * Cancels the input.
     * Closes the confirm dialog, the dialog and reset the form
     */
    function cancel() {
        dispatch({ type: ACTIONS.reset });
        setIsConfirmOpen(false);
        setIsOpen(false);
    }

    /* Saves the form */
    function save() {
        mutate();
    }

    return {
        confirmDialog: {
            isConfirmOpen,
            setIsConfirmOpen,
        },
        isLoading,
        data,
        dispatch,
        dialogActions: {
            confirm,
            cancel,
            save,
        },
    };
}