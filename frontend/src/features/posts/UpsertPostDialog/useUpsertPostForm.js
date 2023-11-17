import { useReducer } from 'react';
import { ACTIONS, initState, isPostUpdated, reducer } from './formReducer.js';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
    createPostRequest,
    handleCreatePostRequestError,
    updatePostRequest,
    validatePostData,
} from './request.js';
import { useNavigate } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';
import { logout } from '../../authentication/user.slice.js';
import { selectUserId } from '../../../utils/selectors.js';

/**
 * Hook handling form validation, submission and request errors for the post creation form
 * @param {Function} onSuccess - Function to execute on success
 * @param {{postId: number, title: string, message: string, imageUrl: string, writerId: number}} [post]
 * @returns {Object} Returns the form data, the loading state, as well as the mutate and dispatch function.
 */
export function useUpsertPostForm(onSuccess, post) {
    const redirect = useNavigate();
    const { dispatch: globalDispatch } = useStore();
    const userId = useSelector(selectUserId);
    const queryClient = useQueryClient();
    const [
        {
            title,
            titleError,
            message,
            messageError,
            image,
            imageError,
            globalError,
        },
        dispatch,
    ] = useReducer(reducer, post, initState);

    const { mutate, isLoading } = useMutation({
        mutationFn: async () => {
            validatePostData({
                title: { required: !post, value: title },
                message: { required: !post, value: message },
                image: { format: image instanceof File, value: image },
            });

            if (!isPostUpdated({ title, message, image }, post)) {
                return;
            }

            if (post) {
                return updatePostRequest(
                    {
                        title,
                        message,
                        image,
                        deleteImage: !image && post.imageUrl,
                    },
                    post.postId,
                );
            }

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
                dispatch({
                    type: ACTIONS.setTitleError,
                    payload: errorMessages.title,
                });
            }

            if (errorMessages.message) {
                dispatch({
                    type: ACTIONS.setMessageError,
                    payload: errorMessages.message,
                });
            }

            if (errorMessages.image) {
                dispatch({
                    type: ACTIONS.setImageError,
                    payload: errorMessages.image,
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
            queryClient.invalidateQueries({ queryKey: ['posts'] });
            if (post) {
                queryClient.invalidateQueries({
                    queryKey: ['posts', post.writerId],
                });
            } else {
                queryClient.invalidateQueries({ queryKey: ['posts', userId] });
            }
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
            globalError,
        },
    };
}
