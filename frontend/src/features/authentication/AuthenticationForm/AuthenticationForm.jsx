import style from './AuthenticationForm.module.css';
import Logo from '../../../components/Logo/Logo';
import FormFields from './FormFields';
import FormButtons from './FormButtons';
import RequestLoader from './RequestLoader';
import { useAuthForm } from './useAuthForm';

/** Authentication Form. Allows to sign up or log in. */
export default function AuthenticationForm() {
    const {
        isLoading,
        mutate,
        dispatch,
        data: {
            email,
            emailError,
            password,
            passwordError,
            rememberMe,
            globalError,
        },
    } = useAuthForm();

    return <form className={style.form} aria-label="Formulaire d'inscription et de connection">
        <RequestLoader signupLoading={isLoading}/>

        <Logo color width={240} className={style.logo}/>

        <FormFields
            globalError={globalError}
            email={email}
            emailError={emailError}
            password={password}
            passwordError={passwordError}
            rememberMe={rememberMe}
            isLoading={isLoading}
            dispatch={dispatch}
        />

        <FormButtons
            isLoading={isLoading}
            onSignupClick={() => mutate('signup')}
            onLoginClick={() => mutate('login')}
        />
    </form>;

}