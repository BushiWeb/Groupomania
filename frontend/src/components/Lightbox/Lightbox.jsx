import PropTypes from 'prop-types';
import style from './Lightbox.module.css';
import { useEffect, useRef } from 'react';
import { useClickOutsideModal } from '../../hooks/useClickOutside';
import TonalIconButton from '../icon-button/TonalIconButton/TonalIconButton';

/**
 * Displays a modal lightbox containing an image with a close icon.
 */
export default function Lightbox({
    open, onClose, src, alt, ...props
}) {
    const dialogRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!dialogRef.current) {
            return;
        }

        if (dialogRef.current.open && !open) {
            dialogRef.current.close();
            return;
        }

        if (!dialogRef.current.open && open) {
            dialogRef.current.showModal();
            return;
        }
    }, [open, dialogRef]);

    useClickOutsideModal(containerRef, () => {
        if (dialogRef.current.open) {
            dialogRef.current.close();
            return;
        }
    }, dialogRef);

    return <dialog ref={dialogRef} onClose={onClose} className={style.lightbox} {...props}>
        <div className={style.wrapper} ref={containerRef}>
            <img src={src} alt={alt} className={style.image} tabIndex="-1"/>
            <TonalIconButton
                label="Fermer la lightbox"
                onClick={() => dialogRef.current.close()}
                name="close"
                className={style.closeButton}
            />
        </div>
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