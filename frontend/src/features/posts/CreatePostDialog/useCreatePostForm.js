import { useReducer } from 'react';
import { ACTIONS, initialState, reducer } from './formReducer.js';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
    createPostRequest,
    handleCreatePostRequestError,
    validatePostData,
} from './request.js';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'react-redux';
import { logout } from '../../authentication/user.slice.js';

/**
 * Hook handling form validation, submission and request errors for the post creation form
 * @param {Function} onSuccess - Function to execute on success
 * @returns {Object} Returns the form data, the loading state, as well as the mutate and dispatch function.
 */
export function useCreatePostForm(onSuccess) {
    const redirect = useNavigate();
    const { dispatch: globalDispatch } = useStore();
    const queryClient = useQueryClient();
    const [
        {
            title,
            titleError,
            message,
            messageError,
            image,
            imageError,
        },
        dispatch,
    ] = useReducer(reducer, initialState);

    const { mutate, isLoading } = useMutation({
        mutationFn: async () => {
            validatePostData({ title: { value: title }, message: { value: message }, image: { value: image }});
            return createPostRequest({ title, message, image });
        },
        onMutate: () => {
            dispatch({ type: ACTIONS.removeErrors });
        },
        onError: async (error) => {
            let errorMessages = error;
            try {
                if (error instanceof Response) {
                    errorMessages = await handleCreatePostRequestError(error);
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

            if (errorMessages.title) {
                dispatch({ type: ACTIONS.setTitleError, payload: errorMessages.title });
            }

            if (errorMessages.message) {
                dispatch({ type: ACTIONS.setMessageError, payload: errorMessages.message });
            }

            if (errorMessages.image) {
                dispatch({ type: ACTIONS.setImageError, payload: errorMessages.image });
            }
        },
        onSuccess: () => {
            dispatch({ type: ACTIONS.reset });
            queryClient.invalidateQueries({ queryKey: ['posts']});
            onSuccess();
        },
    });

    return {
        isLoading,
        mutate,
        dispatch,
        data: {
            title,
            titleError,
            message,
            messageError,
            image,
            imageError,
        },
    };
}