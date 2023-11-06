import style from './DeleteUserDialog.module.css';
import PropTypes from 'prop-types';
import { ACTIONS } from './formReducer';
import { useId } from 'react';
import SupportText from '../../../components/form-inputs/SupportText/SupportText';
import PasswordField from '../../../components/form-inputs/PasswordField/PasswordField';

/** Form to create a post, with or without image */
export default function DeleteUserForm({
    password, passwordError, globalError, dispatch,
}) {
    const errorMessageId = useId();

    return <form className={style.form} aria-label="Formulaire de suppression d'utilisateur">
        <SupportText
            id={errorMessageId}
            errorMessage={globalError}
            errorIcon
            className={style.supportText}
            role="alert"
        />

        <PasswordField
            value={password}
            onChange={(e) => dispatch({ type: ACTIONS.setPassword, payload: e.target.value })}
            label="Mot de passe"
            errorMessage={passwordError}
            supportText="Veuillez confirmer votre identité avant de continuer."
            required
        />
    </form>;
}

DeleteUserForm.defaultProps = {
    emailError: '',
    password: '',
    passwordError: '',
    globalError: '',
};

DeleteUserForm.propTypes = {
    /* Id of the user's role */
    roleId: PropTypes.number,

    /* Error message for the role field */
    roleError: PropTypes.string,

    /* Value for the password field */
    password: PropTypes.string,

    /* Error message for the password field */
    passwordError: PropTypes.string,

    /* Global error message */
    globalError: PropTypes.string,

    /* Function to dispatch new field values, from the formReducer, required */
    dispatch: PropTypes.func.isRequired,
};