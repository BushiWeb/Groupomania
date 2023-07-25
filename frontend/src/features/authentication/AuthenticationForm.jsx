import { useReducer } from 'react';
import style from './AuthenticationForm.module.css';
import Logo from '../../components/Logo/Logo';
import { useMutation } from '@tanstack/react-query';
import { handleCSRFToken } from '../../utils/antiCSRFToken.js';
import { useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './user.slice.js';
import { ACTIONS, initialState, reducer } from './formReducer.js';
import { handleSignupValidationError, validateSignupData } from './validation.js';
import { handleSignupRequestError, signupRequest } from './request';
import FormFields from './FormFields';
import FormButtons from './FormButtons';
import RequestLoader from './RequestLoader';
import PropTypes from 'prop-types';

/** Authentication Form. Allows to sign up or log in. */
export default function AuthenticationForm({ loading }) {
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
        onSettled: handleCSRFToken,
    });

    const isLoading = loading || signupMutation.isLoading;

    return <form className={style.form}>
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
            onSignupClick={signupMutation.mutate}
        />
    </form>;

}

AuthenticationForm.defaultProps = {
    loading: false,
};

AuthenticationForm.propTypes = {
    loading: PropTypes.bool,
};