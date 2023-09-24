import PropTypes from 'prop-types';
import style from './FullscreenDialog.module.css';
import Dialog, { DialogContent } from '../Dialog';
import FullscreenDialogHeader from './FullscreenDialogHeader';
import FullscreenDialogActions from './FullscreenDialogActions';
import { useBreakpoint } from '../../hooks/useBreakpoints';
import FullscreenDialogHeadline from './FullscreenDialogHeadline';
import { FullscreenDialogContext } from './FullscreenDialogContext';

/**
 * Displays a modal Fullscreen dialog. The fullscreen dialog is only fullscreen on small screens,
 * and changes back to a large regular dialog on larger ones.
 */
export default function FullscreenDialog({
    open,
    onClose,
    onEscape,
    label,
    children,
    acceptButton,
    dismissButton,
    closeButton,
    headline,
    largeScreenClassname,
    contentClassName,
    ...props
}) {
    const largeScreen = useBreakpoint() > 0;

    return <FullscreenDialogContext.Provider value={largeScreen}>
        <Dialog
            label={label}
            className={!largeScreen ? style.fullscreenDialog : `${style.largeScreenDialog} ${largeScreenClassname}`}
            onClose={onClose}
            onEscape={onEscape}
            open={open}
            {...props}
        >
            <FullscreenDialogHeader actionButton={acceptButton} closeButton={closeButton}>
                <FullscreenDialogHeadline>{headline}</FullscreenDialogHeadline>
            </FullscreenDialogHeader>

            <DialogContent className={`${!largeScreen ? style.content : ''} ${contentClassName}`}>
                {children}
            </DialogContent>

            <FullscreenDialogActions>
                {dismissButton}
                {acceptButton}
            </FullscreenDialogActions>
        </Dialog>
    </FullscreenDialogContext.Provider>;
}

FullscreenDialog.defaultProps = {
    open: false,
    largeScreenClassname: '',
    contentClassName: '',
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

    /* Classname to give to the dialog when on large screen */
    largeScreenClassname: PropTypes.string,

    /* ClassName to give to the conent */
    contentClassName: PropTypes.string,
};