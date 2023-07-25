import FilledButton from '../../components/buttons/FilledButton/FilledButton';
import TonalButton from '../../components/buttons/TonalButton/TonalButton';
import style from './AuthenticationForm.module.css';
import PropTypes from 'prop-types';

export default function FormButtons({
    isLoading, onSignupClick, onLoginClick,
}) {
    return <div className={style.buttons}>
        <TonalButton
            className={style.login}
            onClick={isLoading ? undefined : onLoginClick}
        >Se connecter</TonalButton>

        <FilledButton
            className={style.signup}
            onClick={isLoading ? undefined : onSignupClick}
        >S'inscrire</FilledButton>
    </div>;
}

FormButtons.defaultProps = {
    isLoading: false,
};

FormButtons.propTypes = {
    isLoading: PropTypes.bool,
    onSignupClick: PropTypes.func.isRequired,
};