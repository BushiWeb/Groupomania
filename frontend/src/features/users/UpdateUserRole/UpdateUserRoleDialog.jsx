import Dialog, {
    DialogAction, DialogActions, DialogContent, DialogHeader, DialogHeadline,
} from '../../../components/Dialog';
import UpdateUserRoleForm from './UpdateUserRoleForm';
import RequestLoader from './RequestLoader';
import PropTypes from 'prop-types';
import { useUpdateUserRoleDialog } from './useUpdateUserRoleDialog';
import style from './UpdateUserDialog.module.css';

/** Dialog used to create a post */
export default function UpdateUserRoleDialog({
    isOpen,
    setIsOpen,
    userId,
    userRoleId,
    userEmail,
}) {
    const {
        isLoading,
        data,
        dispatch,
        dialogActions: {
            cancel,
            save,
        },
    } = useUpdateUserRoleDialog(setIsOpen, { userId, roleId: userRoleId });

    const acceptButton = <DialogAction onClick={save}>Sauvegarder</DialogAction>;
    const dismissButton = <DialogAction onClick={cancel}>Annuler</DialogAction>;

    return (
        <Dialog
            open={isOpen}
            onClose={(e) => {
                setIsOpen(false);
            }}
            label={`Modifier le role de l'utilisateur ${userEmail}`}
            {...isLoading && { inert: 'true' }}
        >
            <DialogHeader>
                <DialogHeadline>Modification du rôle</DialogHeadline>
            </DialogHeader>
            <DialogContent className={style.content}>
                <RequestLoader isLoading={isLoading}/>
                <p>Modifier le rôle de l'utilisateur <em>{userEmail}</em></p>
                <UpdateUserRoleForm {...data} isLoading={isLoading} dispatch={dispatch}/>
            </DialogContent>
            <DialogActions>
                {dismissButton}
                {acceptButton}
            </DialogActions>
        </Dialog>
    );
}

UpdateUserRoleDialog.defaultProps = {
    isOpen: false,
};

UpdateUserRoleDialog.propTypes = {
    /* Weither the dialog is opened or not, defaults to false */
    isOpen: PropTypes.bool,

    /* Function to open or close the dialog, takes a boolean as only argument, required */
    setIsOpen: PropTypes.func.isRequired,

    /* Id of the user, required */
    userId: PropTypes.number.isRequired,

    /* Id of the user's role, required */
    userRoleId: PropTypes.number.isRequired,

    /* Email of the user, required */
    userEmail: PropTypes.string.isRequired,
};