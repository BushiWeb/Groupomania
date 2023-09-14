import PropTypes from 'prop-types';
import { DialogActions } from '../Dialog';
import { useContext } from 'react';
import { FullscreenDialogContext } from './FullscreenDialogContext';

/**
 * Fullscreen modal actions. Disappear on small screens.
 */
export default function FullscreenDialogActions({
    className, children, ...props
}) {
    const largeScreen = useContext(FullscreenDialogContext);

    if (!largeScreen) {
        return;
    }

    return <DialogActions className={className} {...props}>
        {children}
    </DialogActions>;
}

FullscreenDialogActions.defaultProps = {
    className: '',
};

FullscreenDialogActions.propTypes = {
    /** Additionnal class names */
    className: PropTypes.string,
};