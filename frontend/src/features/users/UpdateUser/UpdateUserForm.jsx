import style from './UpdateUserDialog.module.css';
import PropTypes from 'prop-types';
import { ACTIONS } from './formReducer';
import TextField from '../../../components/form-inputs/TextField/TextField';
import { useId } from 'react';
import SupportText from '../../../components/form-inputs/SupportText/SupportText';
import PasswordField from '../../../components/form-inputs/PasswordField/PasswordField';

/** Form to create a post, with or without image */
export default function UpdateUserForm({
    email, emailError, oldPassword, oldPasswordError, newPassword, newPasswordError, globalError, dispatch,
}) {
    const errorMessageId = useId();

    return <form className={style.form} aria-label="Formulaire de mise à jour du profil">
        <SupportText
            id={errorMessageId}
            errorMessage={globalError}
            errorIcon
            className={style.supportText}
            role="alert"
        />

        <PasswordField
            value={oldPassword}
            onChange={(e) => dispatch({ type: ACTIONS.setOldPassword, payload: e.target.value })}
            label="Mot de passe"
            errorMessage={oldPasswordError}
            required
        />

        <TextField
            value={email}
            onChange={(e) => dispatch({ type: ACTIONS.setEmail, payload: e.target.value })}
            label="Email"
            errorMessage={emailError}
        />

        <PasswordField
            value={newPassword}
            onChange={(e) => dispatch({ type: ACTIONS.setNewPassword, payload: e.target.value })}
            label="Nouveau mot de passe"
            errorMessage={newPasswordError}
        />
    </form>;
}

UpdateUserForm.defaultProps = {
    email: '',
    emailError: '',
    oldPassword: '',
    oldPasswordError: '',
    newPassword: '',
    newPasswordError: '',
    globalError: '',
};

UpdateUserForm.propTypes = {
    /* Value of the email field*/
    email: PropTypes.string,

    /* Error message for the email field */
    emailError: PropTypes.string,

    /* Value for the old password field */
    oldPassword: PropTypes.string,

    /* Error message for the old password field */
    oldPasswordError: PropTypes.string,

    /* Value for the new password field */
    newPassword: PropTypes.string,

    /* Error message for the new password field */
    newPasswordError: PropTypes.string,

    /* Global error message */
    globalError: PropTypes.string,

    /* Function to dispatch new field values, from the formReducer, required */
    dispatch: PropTypes.func.isRequired,
};