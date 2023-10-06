import PropTypes from 'prop-types';
import style from './Lightbox.module.css';
import { useRef } from 'react';
import { useClickOutsideModal } from '../../hooks/useClickOutside';
import TonalIconButton from '../icon-button/TonalIconButton/TonalIconButton';
import { useDialog } from '../../hooks/useDialog';
import TooltipWrapper from '../../features/tooltip/TooltipWrapper';

/**
 * Displays a modal lightbox containing an image with a close icon.
 */
export default function Lightbox({
    open, onClose, src, alt, ...props
}) {
    const {
        dialogRef,
        ref,
        dialogEventHandlers,
    } = useDialog(open);
    const containerRef = useRef(null);

    useClickOutsideModal(containerRef, () => {
        if (ref.current.open) {
            ref.current.close();
            return;
        }
    }, ref);

    return <dialog
        ref={dialogRef}
        onClose={onClose}
        className={style.lightbox}
        {...dialogEventHandlers}
        {...props}
    >
        <TooltipWrapper>
            <div className={style.wrapper} ref={containerRef}>
                <img src={src} alt={alt} className={style.image} tabIndex="-1"/>
                <TonalIconButton
                    label="Fermer la lightbox"
                    onClick={() => ref.current.close()}
                    name="close"
                    className={style.closeButton}
                />
            </div>
        </TooltipWrapper>
    </dialog>;
}

Lightbox.defaultProps = {
    open: false,
    alt: '',
};

Lightbox.propTypes = {
    /* Weither the lightbox should be opened or not */
    open: PropTypes.bool,

    /* Function to execute when the lightbox is closed, required */
    onClose: PropTypes.func.isRequired,

    /* Source of the image, required */
    src: PropTypes.string.isRequired,

    /* Alt text for the image, defaults to empty */
    alt: PropTypes.string,
};