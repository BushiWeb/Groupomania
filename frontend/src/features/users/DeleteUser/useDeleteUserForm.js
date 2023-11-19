import { useReducer } from 'react';
import { ACTIONS, initialState, reducer } from './formReducer.js';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
    deleteUserRequest,
    handleDeleteUserRequestError,
    validatePostData,
} from './request.js';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'react-redux';
import { logout } from '../../authentication/user.slice.js';

/**
 * Hook handling form validation, submission and request errors for the user deletion form
 * @param {Function} onSuccess - Function to execute on success
 * @param {{userId: number}} [user]
 * @returns {Object} Returns the form data, the loading state, as well as the mutate and dispatch function.
 */
export function useDeleteUserForm(onSuccess, user) {
    const redirect = useNavigate();
    const { dispatch: globalDispatch } = useStore();
    const queryClient = useQueryClient();
    const [{ password, passwordError, globalError }, dispatch] = useReducer(
        reducer,
        initialState,
    );

    const { mutate, isLoading } = useMutation({
        mutationFn: async () => {
            validatePostData({ password });

            return deleteUserRequest(
                { currentPassword: password },
                user.userId,
            );
        },
        onMutate: () => {
            dispatch({ type: ACTIONS.removeErrors });
        },
        onError: async (error) => {
            let errorMessages = error;
            try {
                if (error instanceof Response) {
                    errorMessages = await handleDeleteUserRequestError(error);
                } else if (error instanceof Error) {
                    throw error;
                }
            } catch (error) {
                if (error.message === 'Unauthorized') {
                    globalDispatch(logout());
                    return redirect('/login');
                }
                return redirect('/error');
            }

            if (errorMessages.password) {
                dispatch({
                    type: ACTIONS.setPasswordError,
                    payload: errorMessages.password,
                });
            }

            if (errorMessages.global) {
                dispatch({
                    type: ACTIONS.setGlobalError,
                    payload: errorMessages.global,
                });
            }
        },
        onSuccess: () => {
            dispatch({ type: ACTIONS.reset });
            queryClient.invalidateQueries({ queryKey: ['users'] });
            queryClient.invalidateQueries({ queryKey: ['posts'] });
            queryClient.removeQueries({ queryKey: ['users', user.userId] });
            queryClient.removeQueries({ queryKey: ['posts', user.userId] });
            onSuccess();
            redirect('/reseau');
        },
    });

    return {
        isLoading,
        mutate,
        dispatch,
        data: {
            password,
            passwordError,
            globalError,
        },
    };
}
