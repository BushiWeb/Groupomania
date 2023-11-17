import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePostRequest, handleDeletePostRequestError } from './request.js';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'react-redux';
import { logout } from '../../authentication/user.slice.js';

/**
 * Hook handling the logic behind the post deletion
 * @param {Function} onSuccess - Function to execute when the request is successful
 * @param {number} postId - Id of the post to delete
 * @param {number} writerId
 * @returns {Object} Returns the mutate function and the error
 */
export function useDeletePostForm(onSuccess, postId, writerId) {
    const redirect = useNavigate();
    const { dispatch: globalDispatch } = useStore();
    const queryClient = useQueryClient();
    const [error, setError] = useState(null);

    const { mutate } = useMutation({
        mutationFn: async () => {
            return deletePostRequest(postId);
        },
        onMutate: () => {
            setError(null);
        },
        onError: async (error) => {
            let errorMessages = error;
            try {
                if (error instanceof Response) {
                    errorMessages = await handleDeletePostRequestError(error);
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

            setError(errorMessages);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
            queryClient.invalidateQueries({ queryKey: ['posts', writerId] });
            onSuccess();
        },
    });

    return {
        mutate,
        error,
    };
}
