import TonalButton from '../../components/buttons/TonalButton/TonalButton';
import FilledButton from '../../components/buttons/FilledButton/FilledButton';
import { useReducer } from 'react';
import style from './AuthenticationForm.module.css';
import Logo from '../../components/Logo/Logo';
import { useMutation } from '@tanstack/react-query';
import { setAntiCSRFToken } from '../../utils/antiCSRFToken.js';
import { useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './user.slice.js';
import ProgressIndicator from '../../components/ProgressIndicator/ProgressIndicator';
import { ACTIONS, initialState, reducer } from './formReducer.js';
import { handleSignupValidationError, validateSignupData } from './validation.js';
import { handleSignupRequestError, signupRequest } from './request';
import FormFields from './FormFields';
import FormButtons from './FormButtons';
import RequestLoader from './RequestLoader';

/** Authentication Form. Allows to sign up or log in. */
export default function AuthenticationForm() {
    const redirect = useNavigate();
    const store = useStore();
    const [
        {
            email, emailError, password, passwordError, rememberMe, globalError,
        },
        dispatch,
    ] = useReducer(reducer, initialState);

    const signupMutation = useMutation({
        mutationFn: async () => {
            const data = { email, password, rememberMe };
            validateSignupData(data);
            return signupRequest(data);
        },
        onMutate: () => {
            dispatch({ type: ACTIONS.removeErrors });
        },
        onError: async (error) => {
            const errorMessages = error instanceof Response ?
                await handleSignupRequestError(error) :
                handleSignupValidationError(error);

            if (!errorMessages) {
                return redirect('/error');
            }

            if (errorMessages.email) {
                dispatch({ type: ACTIONS.setEmailError, payload: errorMessages.email });
            }

            if (errorMessages.password) {
                dispatch({ type: ACTIONS.setPasswordError, payload: errorMessages.password });
            }

            if (errorMessages.global) {
                dispatch({ type: ACTIONS.setGlobalError, payload: errorMessages.global });
            }
        },
        onSuccess: async (data) => {
            const userData = await data.json();
            store.dispatch(login(userData));
            dispatch({ type: ACTIONS.reset });
        },
        onSettled: (data, error) => {
            const headers = data ? data.headers : error.headers;
            const csrfToken = headers.get('X-Crsf-Token');
            if (csrfToken) {
                setAntiCSRFToken(csrfToken);
            }
        },
    });

    return <form className={style.form}>
        <RequestLoader signupLoading={signupMutation.isLoading}/>

        <Logo color width={240} className={style.logo}/>

        <FormFields
            globalError={globalError}
            email={email}
            emailError={emailError}
            password={password}
            passwordError={passwordError}
            rememberMe={rememberMe}
            isLoading={signupMutation.isLoading}
            dispatch={dispatch}
        />

        <FormButtons
            isLoading={signupMutation.isLoading}
            onSignupClick={signupMutation.mutate}
        />
    </form>;

}