import PropTypes from 'prop-types';
import style from './Dialog.module.css';
import { useDialog } from '../../hooks/useDialog';

/**
 * Displays a modal dialog with custom content.
 * The dialog can't be dismissed by clicking outside.
 */
export default function Dialog({
    open, onClose, label, children, className, ...props
}) {
    const dialogRef = useDialog(open);

    return <dialog ref={dialogRef} onClose={onClose} className={`${style.dialog} ${className}`} aria-label={label} {...props}>
        {children}
    </dialog>;
}

Dialog.defaultProps = {
    open: false,
};

Dialog.propTypes = {
    /* Weither the lightbox should be opened or not */
    open: PropTypes.bool,

    /* Function to execute when the lightbox is closed, required */
    onClose: PropTypes.func.isRequired,

    /* Accessibility label of the dialog box, required */
    label: PropTypes.string.isRequired,
};