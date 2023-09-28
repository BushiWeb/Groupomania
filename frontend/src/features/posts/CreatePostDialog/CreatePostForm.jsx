import style from './CreatePostDialog.module.css';
import PropTypes from 'prop-types';
import { ACTIONS } from './formReducer';
import TextField from '../../../components/form-inputs/TextField/TextField';
import TextArea from '../../../components/form-inputs/TextArea/TextArea';
import ImageField from '../../../components/form-inputs/ImageField/ImageField';
import { useRef } from 'react';

/** Form to create a post, with or without image */
export default function CreatePostForm({
    title, titleError, message, messageError, image, imageError, dispatch,
}) {
    const imageRef = useRef(null);

    return <form className={style.form} aria-label="Formulaire de création de post">
        <TextField
            value={title}
            onChange={(e) => dispatch({ type: ACTIONS.setTitle, payload: e.target.value })}
            label="Titre du post"
            errorMessage={titleError}
            required
        />

        <TextArea
            value={message}
            onChange={(e) => dispatch({ type: ACTIONS.setMessage, payload: e.target.value })}
            label="Message du post"
            errorMessage={messageError}
            required
            rows={5}
        />

        <ImageField
            ref={imageRef}
            className={style.imageInput}
            empty={!image}
            onChange={(file) => {
                dispatch({ type: ACTIONS.setImage, payload: file });
                dispatch({ type: ACTIONS.removeImageError });
            }}
            errorMessage={imageError}
        />
    </form>;
}

CreatePostForm.defaultProps = {
    title: '',
    titleError: '',
    message: '',
    messageError: '',
    image: null,
    imageError: '',
};

CreatePostForm.propTypes = {
    /* Value of the title field*/
    title: PropTypes.string,

    /* Error message for the title field */
    titleError: PropTypes.string,

    /* Value for the message field */
    message: PropTypes.string,

    /* Error message for the message field */
    messageError: PropTypes.string,

    /* Value for the image field */
    image: PropTypes.instanceOf(File),

    /* Image field error message */
    imageError: PropTypes.string,

    /* Function to dispatch new field values, from the formReducer, required */
    dispatch: PropTypes.func.isRequired,
};