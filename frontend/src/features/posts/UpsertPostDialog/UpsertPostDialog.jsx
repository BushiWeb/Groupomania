import { DialogAction, DialogCloseButton } from '../../../components/Dialog';
import FullscreenDialog from '../../../components/FullscreenDialog/FullscreenDialog';
import UpsertPostForm from './UpsertPostForm';
import ConfirmDialog from './ConfirmDialog';
import RequestLoader from './RequestLoader';
import PropTypes from 'prop-types';
import { useUpsertPostDialog } from './useUpsertPostDialog';

/** Dialog used to create a post */
export default function UpsertPostDialog({ isOpen, setIsOpen, post }) {
    const {
        confirmDialog: { isConfirmOpen, setIsConfirmOpen },
        isLoading,
        data,
        dispatch,
        dialogActions: { confirm, cancel, save },
    } = useUpsertPostDialog(setIsOpen, post);

    const acceptButton = (
        <DialogAction onClick={save}>Sauvegarder</DialogAction>
    );
    const dismissButton = (
        <DialogAction onClick={confirm}>Annuler</DialogAction>
    );
    const closeButton = (
        <DialogCloseButton label="Annuler la création" onClick={confirm} />
    );

    const headline = post ? 'Modifier le post' : 'Créer un post';

    return (
        <>
            <FullscreenDialog
                label={headline}
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
                headline={headline}
                {...(isLoading && { inert: 'true' })}
            >
                <RequestLoader isLoading={isLoading} />
                <UpsertPostForm
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

UpsertPostDialog.defaultProps = {
    isOpen: false,
};

UpsertPostDialog.propTypes = {
    /* Weither the dialog is opened or not, defaults to false */
    isOpen: PropTypes.bool,

    /* Function to open or close the dialog, takes a boolean as only argument, required */
    setIsOpen: PropTypes.func.isRequired,

    /* Post data, if present the form will update the post, if absent it will create a new one */
    post: PropTypes.exact({
        postId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
        writerId: PropTypes.number.isRequired,
    }),
};
