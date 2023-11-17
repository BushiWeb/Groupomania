import { DialogAction, DialogCloseButton } from '../../../components/Dialog';
import FullscreenDialog from '../../../components/FullscreenDialog/FullscreenDialog';
import UpdateUserForm from './UpdateUserForm';
import ConfirmDialog from './ConfirmDialog';
import RequestLoader from './RequestLoader';
import PropTypes from 'prop-types';
import { useUpdateUserDialog } from './useUpdateUserDialog';

/** Dialog used to create a post */
export default function UpdateUserDialog({
    isOpen,
    setIsOpen,
    userId,
    userEmail,
}) {
    const {
        confirmDialog: { isConfirmOpen, setIsConfirmOpen },
        isLoading,
        data,
        dispatch,
        dialogActions: { confirm, cancel, save },
    } = useUpdateUserDialog(setIsOpen, { userId, email: userEmail });

    const acceptButton = (
        <DialogAction onClick={save}>Sauvegarder</DialogAction>
    );
    const dismissButton = (
        <DialogAction onClick={confirm}>Annuler</DialogAction>
    );
    const closeButton = (
        <DialogCloseButton label="Annuler la création" onClick={confirm} />
    );

    return (
        <>
            <FullscreenDialog
                label="Modifier le profil"
                onClose={(e) => {
                    setIsOpen(false);
                }}
                onCancel={(e) => {
                    e.preventDefault();
                    confirm();
                }}
                open={isOpen}
                acceptButton={acceptButton}
                dismissButton={dismissButton}
                closeButton={closeButton}
                headline="Modifier le profil"
                {...(isLoading && { inert: 'true' })}
            >
                <RequestLoader isLoading={isLoading} />
                <UpdateUserForm
                    {...data}
                    isLoading={isLoading}
                    dispatch={dispatch}
                />
            </FullscreenDialog>

            <ConfirmDialog
                open={isConfirmOpen}
                onAccept={cancel}
                close={() => setIsConfirmOpen(false)}
            />
        </>
    );
}

UpdateUserDialog.defaultProps = {
    isOpen: false,
};

UpdateUserDialog.propTypes = {
    /* Weither the dialog is opened or not, defaults to false */
    isOpen: PropTypes.bool,

    /* Function to open or close the dialog, takes a boolean as only argument, required */
    setIsOpen: PropTypes.func.isRequired,

    /* Id of the user, required */
    userId: PropTypes.number.isRequired,

    /* Email of the user, required */
    userEmail: PropTypes.string.isRequired,
};
