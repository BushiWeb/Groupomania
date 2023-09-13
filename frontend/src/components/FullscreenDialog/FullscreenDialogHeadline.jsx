import { useContext } from 'react';
import { DialogHeadline } from '../Dialog';
import style from './FullscreenDialog.module.css';
import PropTypes from 'prop-types';
import { FullscreenDialogContext } from './FullscreenDialogContext';

/**
 * Headline of the dialog.
 */
export default function FullscreenDialogHeadline({
    children, className, ...props
}) {
    const largeScreen = useContext(FullscreenDialogContext);

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
};