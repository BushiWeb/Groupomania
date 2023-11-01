import { useReducer } from 'react';
import {
    ACTIONS,
    initState,
    isUserRoleUpdated,
    reducer,
} from './formReducer.js';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
    updateUserRoleRequest,
    handleUpdateUserRequestError,
    validatePostData,
} from './request.js';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'react-redux';
import { logout } from '../../authentication/user.slice.js';

/**
 * Hook handling form validation, submission and request errors for the user role update form
 * @param {Function} onSuccess - Function to execute on success
 * @param {{userId: number, roleId: number}} [user]
 * @returns {Object} Returns the form data, the loading state, as well as the mutate and dispatch function.
 */
export function useUpdateUserRoleForm(onSuccess, user) {
    const redirect = useNavigate();
    const { dispatch: globalDispatch } = useStore();
    const queryClient = useQueryClient();
    const [
        {
            roleId,
            roleError,
            password,
            passwordError,
            globalError,
        },
        dispatch,
    ] = useReducer(reducer, user, initState);

    const { mutate, isLoading } = useMutation({
        mutationFn: async () => {
            if (!isUserRoleUpdated({ roleId }, user)) {
                return;
            }

            validatePostData({
                password,
                roleId,
            });

            return updateUserRoleRequest({ roleId, currentPassword: password }, user.userId);
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

            if (errorMessages.role) {
                dispatch({ type: ACTIONS.setEmailError, payload: errorMessages.role });
            }

            if (errorMessages.password) {
                dispatch({ type: ACTIONS.setPasswordError, payload: errorMessages.password });
            }
        },
        onSuccess: () => {
            dispatch({ type: ACTIONS.reset });
            queryClient.invalidateQueries({ queryKey: ['users']});
            queryClient.invalidateQueries({ queryKey: ['users', user.userId]});
            onSuccess();
        },
    });

    return {
        isLoading,
        mutate,
        dispatch,
        data: {
            roleId,
            roleError,
            password,
            passwordError,
            globalError,
        },
    };
}