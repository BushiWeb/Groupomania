import { useReducer } from 'react';
import { useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ACTIONS, initialState, reducer } from './formReducer.js';
import { useMutation } from '@tanstack/react-query';
import {
    authRequest, handleAuthRequestError, handleValidationError, validateAuthData,
} from './request.js';
import { login } from './user.slice.js';
import { handleCSRFToken } from '../../utils/antiCSRFToken.js';

/**
 * Hook handling form validation, submission and request errors.
 * @returns {Object} Returns the form data, the loading state, as well as the mutate and dispatch function.
 */
export function useAuthForm() {
    const redirect = useNavigate();
    const store = useStore();
    const [
        {
            email, emailError, password, passwordError, rememberMe, globalError,
        },
        dispatch,
    ] = useReducer(reducer, initialState);

    const { mutate, isLoading } = useMutation({
        mutationFn: async (action) => {
            validateAuthData({ email: { value: email }, password: { value: password, format: action === 'signup' }});
            return authRequest({ email, password, rememberMe }, action);
        },
        onMutate: () => {
            dispatch({ type: ACTIONS.removeErrors });
        },
        onError: async (error) => {
            const errorMessages = error instanceof Response ?
                await handleAuthRequestError(error) :
                handleValidationError(error);

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

    return {
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
    };
}