import { DialogHeadline } from '../Dialog';
import style from './FullscreenDialog.module.css';
import PropTypes from 'prop-types';

/**
 * Headline of the dialog.
 */
export default function FullscreenDialogHeadline({
    largeScreen, children, className, ...props
}) {
    if (largeScreen) {
        return <DialogHeadline>{children}</DialogHeadline>;
    }
    return <h1 className={`${style.headline} ${className}`} {...props}>{children}</h1>;
}

FullscreenDialogHeadline.defaultProps = {
    className: '',
};

FullscreenDialogHeadline.propTypes = {
    className: PropTypes.string,

    /** Weither the dialog is displayed on a large screen or a small one, defaults to false */
    largeScreen: PropTypes.bool,
};