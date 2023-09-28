import PropTypes from 'prop-types';
import style from './ImageField.module.css';
import {
    forwardRef, useEffect, useId, useState,
} from 'react';
import OutlinedButton from '../../buttons/OutlinedButton/OutlinedButton';
import TonalIconButton from '../../icon-button/TonalIconButton/TonalIconButton';
import SupportText from '../SupportText/SupportText';

/**
 * Image field.
 * The field allows to choose an image to submit, and displays the image.
 * This component is uncontrolled.
 */
const ImageField = forwardRef(({
    emptyLabel,
    selectedLabel,
    accept,
    className,
    onChange,
    errorMessage,
    supportText,
    empty,
}, ref) => {
    const [image, setImage] = useState(null);
    const supportTextId = useId();

    useEffect(() => {
        if (empty) {
            ref.current.value = '';
            setImage(null);
        }
    }, [empty, ref]);

    function handleChange(e) {
        if (e.target.files.length === 0) {
            onChange(null);
            setImage(null);
            return;
        }
        const objectUrl = URL.createObjectURL(e.target.files[0]);
        onChange(e.target.files[0]);
        setImage({
            src: objectUrl,
            name: e.target.files[0].name,
        });
    }

    function handleDeleteImage() {
        ref.current.value = '';
        onChange(null);
        setImage(null);
    }

    return <div
        className={`${style.container} ${className}`}
        {...errorMessage && { 'data-error': true, 'role': 'alert' }}
        {... (supportText || errorMessage) && { 'aria-labelledby': supportTextId }}
    >
        <div className={style.inputCommand}>
            <OutlinedButton
                onClick={(e) => ref.current.click()}
                className={style.button}
                {... image && { 'aria-describedby': `Le fichier ${image.name} est actuellement sélectionné` }}
            >{image ? selectedLabel : emptyLabel}</OutlinedButton>

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

        {image &&
            <div className={style.previewContainer}>
                <TonalIconButton
                    onClick={handleDeleteImage}
                    label="Supprimer l'image"
                    name="delete"
                    className={style.deleteImageButton}
                />
                <img
                    alt={image.name}
                    src={image.src}
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
    empty: true,
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

    /* Weither the field is empty or not, ie the user did not yet choose a file, defaults to true */
    empty: PropTypes.bool,
};

export default ImageField;