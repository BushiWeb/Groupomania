import PropTypes from 'prop-types';
import style from './FullscreenDialog.module.css';
import Dialog, { DialogContent } from '../Dialog';
import FullscreenDialogHeader from './FullscreenDialogHeader';
import FullscreenDialogActions from './FullscreenDialogActions';
import { useBreakpoint } from '../../hooks/useBreakpoints';
import FullscreenDialogHeadline from './FullscreenDialogHeadline';

/**
 * Displays a modal Fullscreen dialog. The fullscreen dialog is only fullscreen on small screens,
 * and changes back to a large regular dialog on larger ones.
 */
export default function FullscreenDialog({
    open, onClose, onEscape, label, children, acceptButton, dismissButton, closeButton, headline, ...props
}) {
    const largeScreen = useBreakpoint() > 0;

    return <Dialog
        label={label}
        className={!largeScreen ? style.fullscreenDialog : ''}
        onClose={onClose}
        onEscape={onEscape}
        open={open}
        {...props}
    >
        <FullscreenDialogHeader actionButton={acceptButton} closeButton={closeButton} largeScreen={largeScreen}>
            <FullscreenDialogHeadline largeScreen={largeScreen}>{headline}</FullscreenDialogHeadline>
        </FullscreenDialogHeader>

        <DialogContent>
            {children}
        </DialogContent>

        <FullscreenDialogActions largeScreen={largeScreen}>
            {dismissButton}
            {acceptButton}
        </FullscreenDialogActions>
    </Dialog>;
}

FullscreenDialog.defaultProps = {
    open: false,
};

FullscreenDialog.propTypes = {
    /* Weither the lightbox should be opened or not */
    open: PropTypes.bool,

    /* Function to execute when the lightbox is closed, required */
    onClose: PropTypes.func.isRequired,

    /* Headline of the dialog, required */
    headline: PropTypes.string.isRequired,

    /** Accept button element, required */
    acceptButton: PropTypes.element.isRequired,

    /** Dismiss button element, required */
    dismissButton: PropTypes.element.isRequired,

    /** Close button element, required */
    closeButton: PropTypes.element.isRequired,

    /** Accessible lable of the modal, required */
    label: PropTypes.string.isRequired,

    /**
     * Function to execute when the user presses the escape key
     */
    onEscape: PropTypes.func,
};