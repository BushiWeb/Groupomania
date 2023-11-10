import { useId } from 'react';
import Dialog, {
    DialogAction, DialogActions, DialogContent, DialogHeader, DialogHeadline,
} from '../../../components/Dialog';
import SupportText from '../../../components/form-inputs/SupportText/SupportText';
import { useDeletePostForm } from './useDeletePostForm';
import PropTypes from 'prop-types';
import style from './DeletePostDialog.module.css';

/** Dialog used to create a post */
export default function DeletePostDialog({
    open,
    onClose,
    postTitle,
    postDate,
    postId,
    writerId,
}) {
    const {
        mutate,
        error,
    } = useDeletePostForm(onClose, postId, writerId);
    const errorMessageId = useId();

    const formatedDate = new Date(postDate).toLocaleString('fr-FR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    return <Dialog
        open={open}
        onClose={onClose}
        {
            ...!error ?
                { label: 'Confirmation de suppression' } :
                {
                    'aria-labelledby': errorMessageId,
                    role: 'alertdialog',
                }
        }
    >
        <DialogHeader>
            <DialogHeadline>Supprimer un post ?</DialogHeadline>
        </DialogHeader>

        <DialogContent>
            Êtes-vous sûr de vouloir supprimer le post <em>{postTitle}</em> créé le {formatedDate} ?
            <SupportText errorMessage={error} id={errorMessageId} errorIcon className={style.supportText} role="alert"/>
        </DialogContent>

        <DialogActions>
            <DialogAction onClick={onClose}>Non, annuler</DialogAction>
            <DialogAction onClick={mutate}>Oui, supprimer</DialogAction>
        </DialogActions>

    </Dialog>;
}

DeletePostDialog.defaultProps = {
    open: false,
};

DeletePostDialog.propTypes = {
    /* Weither the dialog is opened or closed, defaults to false */
    open: PropTypes.bool,

    /* Function to close the dialog, required */
    onClose: PropTypes.func.isRequired,

    /* Post title, required */
    postTitle: PropTypes.string.isRequired,

    /* Post date, required */
    postDate: PropTypes.string.isRequired,

    /* Post id, required */
    postId: PropTypes.number.isRequired,

    /* Writer id, required */
    writerId: PropTypes.number.isRequired,
};