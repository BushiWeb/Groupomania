import { useSelector } from 'react-redux';
import style from './AuthenticationForm.module.css';
import { selectIsDarkTheme } from '../../utils/selectors';
import Icon from '../../components/Icon/Icon';
import TextField from '../../components/form-inputs/TextField/TextField';
import PasswordField from '../../components/form-inputs/PasswordField/PasswordField';
import CheckboxLabel from '../../components/form-inputs/Checkbox/CheckboxLabel';
import { ACTIONS } from './formReducer';
import PropTypes from 'prop-types';

export default function FormFields({
    globalError, email, emailError, password, passwordError, isLoading, rememberMe, dispatch,
}) {
    const darkTheme = useSelector(selectIsDarkTheme);

    return <div className={style.inputs}>
        {globalError && <p className={style.globalError} role="alert">
            <Icon name="error" label="Error" size={20} grad={50} isOnDark={darkTheme} className={style.globalErrorIcon}/>
            {globalError}
        </p>}

        <TextField
            value={email}
            errorMessage={emailError}
            onChange={(e) => dispatch({ type: ACTIONS.setEmail, payload: e.target.value })}
            label="Email"
            leadingIconProps={{
                name: 'mail',
            }}
            autoFocus
            className={style.email}
            required
            readOnly={isLoading}
        />
        <PasswordField
            value={password}
            errorMessage={passwordError}
            onChange={(e) => dispatch({ type: ACTIONS.setPassword, payload: e.target.value })}
            label="Mot de passe"
            leadingIconProps={{
                name: 'lock',
            }}
            className={style.password}
            required
            readOnly={isLoading}
        />

        <CheckboxLabel
            checked={rememberMe}
            onChange={(e) => dispatch({ type: ACTIONS.setRememberMe, payload: e.target.checked })}
            className={style.rememberMe}
            readOnly={isLoading}
        >
            Se souvenir de moi
        </CheckboxLabel>
    </div>;
}

FormFields.defaultProps = {
    globalError: undefined,
    email: '',
    emailError: undefined,
    password: '',
    passwordError: undefined,
    rememberMe: false,
    isLoading: false,
};

FormFields.propTypes = {
    globalError: PropTypes.string,
    email: PropTypes.string,
    emailError: PropTypes.string,
    password: PropTypes.string,
    passwordError: PropTypes.string,
    rememberMe: PropTypes.bool,
    isLoading: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
};