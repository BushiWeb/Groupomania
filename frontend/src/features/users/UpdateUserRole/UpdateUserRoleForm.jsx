import style from './UpdateUserDialog.module.css';
import PropTypes from 'prop-types';
import { ACTIONS } from './formReducer';
import { ROLES } from '../../../utils/roles';
import { useId } from 'react';
import SupportText from '../../../components/form-inputs/SupportText/SupportText';
import PasswordField from '../../../components/form-inputs/PasswordField/PasswordField';
import SelectField from '../../../components/form-inputs/SelectField/SelectField';
import Option from '../../../components/form-inputs/SelectField/Option';

/** Form to create a post, with or without image */
export default function UpdateUserRoleForm({
    roleId, roleError, password, passwordError, globalError, dispatch,
}) {
    const errorMessageId = useId();

    return <form className={style.form} aria-label="Formulaire de mise à jour du role de l'utilisateur">
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
            required
        />

        <SelectField
            value={roleId}
            onChange={(e) => dispatch({ type: ACTIONS.setRole, payload: parseInt(e.target.value) })}
            required
            errorMessage={roleError}
            label="Role"
        >
            {ROLES.map(value => <Option value={value.id} key={`${value.id}-${value.name}`}>{value.name}</Option>) }
        </SelectField>
    </form>;
}

UpdateUserRoleForm.defaultProps = {
    emailError: '',
    password: '',
    passwordError: '',
    globalError: '',
};

UpdateUserRoleForm.propTypes = {
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