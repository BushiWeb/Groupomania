import Dialog, {
    DialogAction,
    DialogActions,
    DialogContent,
    DialogHeader,
    DialogHeadline,
} from '../../../components/Dialog';
import DeleteUserForm from './DeleteUserForm';
import RequestLoader from './RequestLoader';
import PropTypes from 'prop-types';
import { useDeleteUserDialog } from './useDeleteUserDialog';
import style from './DeleteUserDialog.module.css';

/** Dialog used to create a post */
export default function DeleteUserDialog({
    isOpen,
    setIsOpen,
    userId,
    userEmail,
}) {
    const {
        isLoading,
        data,
        dispatch,
        dialogActions: { cancel, save },
    } = useDeleteUserDialog(setIsOpen, { userId });

    const acceptButton = <DialogAction onClick={save}>Supprimer</DialogAction>;
    const dismissButton = <DialogAction onClick={cancel}>Annuler</DialogAction>;

    return (
        <Dialog
            open={isOpen}
            onClose={(e) => {
                setIsOpen(false);
            }}
            label={`Supprimer l'utilisateur ${userEmail}`}
            {...(isLoading && { inert: 'true' })}
        >
            <DialogHeader>
                <DialogHeadline>Supprimer l'utilisateur</DialogHeadline>
            </DialogHeader>
            <DialogContent className={style.content}>
                <RequestLoader isLoading={isLoading} />
                <p>
                    Supprimer l'utilisateur <em>{userEmail}</em>
                </p>
                <DeleteUserForm
                    {...data}
                    isLoading={isLoading}
                    dispatch={dispatch}
                />
            </DialogContent>
            <DialogActions>
                {dismissButton}
                {acceptButton}
            </DialogActions>
        </Dialog>
    );
}

DeleteUserDialog.defaultProps = {
    isOpen: false,
};

DeleteUserDialog.propTypes = {
    /* Weither the dialog is opened or not, defaults to false */
    isOpen: PropTypes.bool,

    /* Function to open or close the dialog, takes a boolean as only argument, required */
    setIsOpen: PropTypes.func.isRequired,

    /* Id of the user, required */
    userId: PropTypes.number.isRequired,

    /* Email of the user, required */
    userEmail: PropTypes.string.isRequired,
};
