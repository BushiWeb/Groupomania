import { DialogAction, DialogCloseButton } from '../../../components/Dialog';
import FullscreenDialog from '../../../components/FullscreenDialog/FullscreenDialog';
import CreatePostForm from './CreatePostForm';
import { useCreatePostForm } from './useCreatePostForm';
import { ACTIONS } from './formReducer.js';
import ConfirmDialog from './ConfirmDialog';
import { useState } from 'react';
import RequestLoader from './RequestLoader';

/** Dialog used to create a post */
export default function CreatePostDialog({ isOpen, setIsOpen }) {
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
    } = useCreatePostForm(onSuccess);

    /*
     * Function executed when attempting to close the form.
     * If any changes were made, open the confirm dialog.
     * Otherwise, close the dialog
     */
    function confirm() {
        if (data.message === '' && data.title === '') {
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

    const acceptButton = <DialogAction onClick={save}>Sauvegarder</DialogAction>;
    const dismissButton = <DialogAction onClick={confirm}>Annuler</DialogAction>;
    const closeButton = <DialogCloseButton label="Annuler la création" onClick={confirm}/>;

    return <>
        <FullscreenDialog
            label="Créer un post"
            onClose={() => {
                setIsOpen(false);
            }}
            onEscape={(e) => {
                e.preventDefault();
                confirm();
            }}
            open={isOpen}
            acceptButton={acceptButton}
            dismissButton={dismissButton}
            closeButton={closeButton}
            headline="Créer un post"
            {...isLoading && { inert: 'true' }}
        >

            <RequestLoader isLoading={isLoading}/>
            <CreatePostForm {...data} isLoading={isLoading} dispatch={dispatch}/>
        </FullscreenDialog>

        <ConfirmDialog
            open={isConfirmOpen}
            onAccept={cancel}
            close={() => setIsConfirmOpen(false)}
        />
    </>;
}