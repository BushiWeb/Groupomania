import { useReducer } from 'react';
import {
    ACTIONS,
    initState,
    isUserUpdated,
    reducer,
} from './formReducer.js';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
    updateUserRequest,
    handleUpdateUserRequestError,
    validatePostData,
} from './request.js';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'react-redux';
import { logout } from '../../authentication/user.slice.js';

/**
 * Hook handling form validation, submission and request errors for the post creation form
 * @param {Function} onSuccess - Function to execute on success
 * @param {{userId: number, email: string}} [user]
 * @returns {Object} Returns the form data, the loading state, as well as the mutate and dispatch function.
 */
export function useUpdateUserForm(onSuccess, user) {
    const redirect = useNavigate();
    const { dispatch: globalDispatch } = useStore();
    const queryClient = useQueryClient();
    const [
        {
            email,
            emailError,
            oldPassword,
            oldPasswordError,
            newPassword,
            newPasswordError,
            globalError,
        },
        dispatch,
    ] = useReducer(reducer, user, initState);

    const { mutate, isLoading } = useMutation({
        mutationFn: async () => {
            if (!isUserUpdated({ email, oldPassword, newPassword }, user)) {
                return;
            }

            validatePostData({
                email,
                newPassword,
                oldPassword,
            });

            return updateUserRequest({
                ...email !== user.email && { email },
                ...newPassword && { password: newPassword },
                currentPassword: oldPassword,
            }, user.userId);
        },
        onMutate: () => {
            dispatch({ type: ACTIONS.removeErrors });
        },
        onError: async (error) => {
            let errorMessages = error;
            try {
                if (error instanceof Response) {
                    errorMessages = await handleUpdateUserRequestError(error);
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

            if (errorMessages.email) {
                dispatch({ type: ACTIONS.setEmailError, payload: errorMessages.email });
            }

            if (errorMessages.oldPassword) {
                dispatch({ type: ACTIONS.setOldPasswordError, payload: errorMessages.oldPassword });
            }

            if (errorMessages.newPassword) {
                dispatch({ type: ACTIONS.setNewPasswordError, payload: errorMessages.newPassword });
            }

            if (errorMessages.global) {
                dispatch({ type: ACTIONS.setGlobalError, payload: errorMessages.global });
            }
        },
        onSuccess: () => {
            dispatch({ type: ACTIONS.reset });
            queryClient.invalidateQueries({ queryKey: ['users']});
            queryClient.invalidateQueries({ queryKey: ['users', user.userId]});
            queryClient.invalidateQueries({ queryKey: ['posts']});
            queryClient.invalidateQueries({ queryKey: ['posts', user.userId]});
            onSuccess();
        },
    });

    return {
        isLoading,
        mutate,
        dispatch,
        data: {
            email,
            emailError,
            oldPassword,
            oldPasswordError,
            newPassword,
            newPasswordError,
            globalError,
        },
    };
}