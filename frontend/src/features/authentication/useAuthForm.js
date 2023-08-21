import { useReducer } from 'react';
import { useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ACTIONS, initialState, reducer } from './formReducer.js';
import { useMutation } from '@tanstack/react-query';
import {
    authRequest, handleAuthRequestError, validateAuthData,
} from './request.js';
import { login } from './user.slice.js';

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
            let errorMessages = error;
            try {
                if (error instanceof Response) {
                    errorMessages = await handleAuthRequestError(error);
                } else if (error instanceof Error) {
                    throw error;
                }
            } catch (error) {
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
        onSuccess: (data) => {
            store.dispatch(login(data));
            dispatch({ type: ACTIONS.reset });
        },
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