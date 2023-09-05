import PropTypes from 'prop-types';
import { DialogActions } from '../Dialog';

/**
 * Fullscreen modal actions. Disappear on small screens.
 */
export default function FullscreenDialogActions({
    largeScreen, className, children, ...props
}) {
    if (!largeScreen) {
        return;
    }

    return <DialogActions className={className} {...props}>
        {children}
    </DialogActions>;
}

FullscreenDialogActions.defaultProps = {
    largeScreen: false,
    className: '',
};

FullscreenDialogActions.propTypes = {
    /** Weither the dialog is displayed on a large screen or a small one, defaults to false */
    largeScreen: PropTypes.bool,

    /** Additionnal class names */
    className: PropTypes.string,
};