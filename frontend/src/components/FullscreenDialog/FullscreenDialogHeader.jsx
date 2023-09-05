import PropTypes from 'prop-types';
import style from './FullscreenDialog.module.css';
import { DialogHeader } from '../Dialog';

/**
 * Fullscreen modal header. Depending on the screen size, changes its content.
 */
export default function FullscreenDialogHeader({
    closeButton, actionButton, largeScreen, className, children, ...props
}) {
    if (largeScreen) {
        return <DialogHeader className={className} {...props}>
            {children}
            {closeButton}
        </DialogHeader>;
    }

    return <header className={`${style.header} ${className}`} {...props}>
        {closeButton}
        {children}
        {actionButton}
    </header>;
}

FullscreenDialogHeader.defaultProps = {
    largeScreen: false,
    className: '',
};

FullscreenDialogHeader.propTypes = {
    /** Close button to use, required, must be a DialogCloseButton element */
    closeButton: PropTypes.element.isRequired,

    /** Action button to use, required, must be a DialogAction element */
    actionButton: PropTypes.element.isRequired,

    /** Weither the dialog is displayed on a large screen or a small one, defaults to false */
    largeScreen: PropTypes.bool,

    /** Additionnal class names */
    className: PropTypes.string,
};