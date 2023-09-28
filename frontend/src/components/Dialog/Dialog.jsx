import PropTypes from 'prop-types';
import style from './Dialog.module.css';
import { useDialog } from '../../hooks/useDialog';

/**
 * Displays a modal dialog with custom content.
 * The dialog can't be dismissed by clicking outside.
 */
export default function Dialog({
    open, onClose, label, children, className, onCancel, ...props
}) {
    const { dialogRef } = useDialog(open);

    return <dialog ref={dialogRef} onClose={onClose} onCancel={onCancel} className={`${style.dialog} ${className}`} aria-label={label} {...props}>
        {children}
    </dialog>;
}

Dialog.defaultProps = {
    open: false,
};

Dialog.propTypes = {
    /* Weither the lightbox should be opened or not */
    open: PropTypes.bool,

    /* Function to execute when the lightbox is closed by the system, required */
    onClose: PropTypes.func.isRequired,

    /* Accessibility label of the dialog box, required */
    label: PropTypes.string.isRequired,

    /**
     * Function to execute on the cancel event, like when the user presses the escape key
     */
    onCancel: PropTypes.func,
};