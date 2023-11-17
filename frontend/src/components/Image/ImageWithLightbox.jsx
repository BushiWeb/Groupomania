import PropTypes from 'prop-types';
import style from './ImageWithLightbox.module.css';
import Lightbox from '../Lightbox/Lightbox';
import { useState } from 'react';

/**
 * Displays an image that can be enlarged in a lightbox by clicking.
 */
export default function ImageWithLighbox({
    src,
    alt,
    className,
    lightboxLabel,
    lightboxDescription,
    label,
}) {
    const [isLightboxOpened, setIsLightboxOpened] = useState(false);

    function handleClick() {
        setIsLightboxOpened((isOpened) => !isOpened);
    }

    function handleClose() {
        setIsLightboxOpened(false);
    }

    return (
        <>
            <button
                className={`${style.button} ${className}`}
                onClick={handleClick}
                aria-label={label}
            >
                <img src={src} alt={alt} className={style.image} />
            </button>

            <Lightbox
                open={isLightboxOpened}
                onClose={handleClose}
                alt={alt}
                src={src}
                aria-label={lightboxLabel}
                aria-describedby={lightboxDescription}
            />
        </>
    );
}

ImageWithLighbox.defaultProps = {
    alt: '',
    className: '',
};

ImageWithLighbox.propTypes = {
    /* Source of the image, required */
    src: PropTypes.string.isRequired,

    /* Alt text for the image, defaults to empty */
    alt: PropTypes.string,

    /* Classname to scale and position the image */
    className: PropTypes.string,

    /* Label for the lightbox */
    lightboxLabel: PropTypes.string,

    /* Description for the lightbox */
    lightboxDescription: PropTypes.string,

    /* Label of the button, required if no alt text is provided */
    label: PropTypes.string,
};
