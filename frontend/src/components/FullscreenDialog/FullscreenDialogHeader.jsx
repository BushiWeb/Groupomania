import PropTypes from 'prop-types';
import style from './FullscreenDialog.module.css';
import { DialogHeader } from '../Dialog';
import { useContext } from 'react';
import { FullscreenDialogContext } from './FullscreenDialogContext';

/**
 * Fullscreen modal header. Depending on the screen size, changes its content.
 */
export default function FullscreenDialogHeader({
    closeButton, actionButton, className, children, ...props
}) {
    const largeScreen = useContext(FullscreenDialogContext);

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
    className: '',
};

FullscreenDialogHeader.propTypes = {
    /** Close button to use, required, must be a DialogCloseButton element */
    closeButton: PropTypes.element.isRequired,

    /** Action button to use, required, must be a DialogAction element */
    actionButton: PropTypes.element.isRequired,

    /** Additionnal class names */
    className: PropTypes.string,
};