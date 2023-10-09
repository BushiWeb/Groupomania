import PropTypes from 'prop-types';
import style from './ImageField.module.css';
import {
    forwardRef, useEffect, useId, useState,
} from 'react';
import OutlinedButton from '../../buttons/OutlinedButton/OutlinedButton';
import TonalIconButton from '../../icon-button/TonalIconButton/TonalIconButton';
import SupportText from '../SupportText/SupportText';
import useImageField from './useImageField';

/**
 * Image field.
 * The field allows to choose an image to submit, and displays the image.
 * Althought the file input is uncontrolled, this components still depends on its parent component to handle the
 *  File chosen with onChange, and alose the displayed file with image. It is to the responsability of the user to make
 *  make sure the displayed and saved image are the same as the chosen image.
 */
const ImageField = forwardRef(({
    emptyLabel,
    selectedLabel,
    accept,
    className,
    onChange,
    errorMessage,
    supportText,
    image,
}, ref) => {
    const {
        imageData,
        supportTextId,
        handleChange,
        handleDeleteImage,
    } = useImageField(image, ref, onChange);

    return <div
        className={`${style.container} ${className}`}
        {...errorMessage && { 'data-error': true, 'role': 'alert' }}
        {... (supportText || errorMessage) && { 'aria-labelledby': supportTextId }}
    >
        <div className={style.inputCommand}>
            <OutlinedButton
                onClick={(e) => ref.current.click()}
                className={style.button}
                {... imageData && {
                    'aria-describedby': imageData.uploaded ?
                        'Il s\'agit du fichier original du post, vous pouvez le modifier' :
                        `Le fichier ${imageData.name} est actuellement sélectionné`,
                }}
            >{imageData ? selectedLabel : emptyLabel}</OutlinedButton>

            <SupportText
                id={supportTextId}
                errorIcon
                errorMessage={errorMessage}
                supportText={supportText}
            />
        </div>

        <input
            type="file"
            accept={accept}
            capture="environment"
            ref={ref}
            className={style.imageField}
            aria-hidden="true"
            tabIndex={-1}
            onCancel={(e) => e.stopPropagation()}
            onChange={handleChange}
        />

        {imageData &&
            <div className={style.previewContainer}>
                <TonalIconButton
                    onClick={handleDeleteImage}
                    label="Supprimer l'image"
                    name="delete"
                    className={style.deleteImageButton}
                />
                <img
                    alt={imageData.name}
                    src={imageData.src}
                    className={style.previewImage}
                    onLoad = {(e) => {
                        URL.revokeObjectURL(e.target.src);
                    }}
                />
            </div>
        }
    </div>;
});

ImageField.defaultProps = {
    accept: '.jpg,.jpeg,.png,.webp,.avif',
    emptyLabel: 'Ajouter une image',
    selectedLabel: 'Modifier l\'image',
    className: '',
    errorMessage: undefined,
    supportText: undefined,
    image: undefined,
};

ImageField.propTypes = {
    /* Label to display when the user hasn't chosen any file */
    emptyLabel: PropTypes.string,

    /* Label to use when the user has chosen a file, and can now update it */
    selectedLabel: PropTypes.string,

    /* Value for the accept attribute of the file input, default to png, jped, webp and avif */
    accept: PropTypes.string,

    /* Additionnal class names */
    className: PropTypes.string,

    /*
     * Function to execute when the file changes, or is removed.
     * It takes the new file as a parameter, or null if the file is deleted.
     * Required
     */
    onChange: PropTypes.func.isRequired,

    /* Error message */
    errorMessage: PropTypes.string,

    /* Support text */
    supportText: PropTypes.string,

    /* Current image, either a file object or a file URL */
    image: PropTypes.oneOfType([PropTypes.instanceOf(File), PropTypes.string]),
};

export default ImageField;