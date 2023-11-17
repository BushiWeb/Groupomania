import { useMutation, useQueryClient } from '@tanstack/react-query';
import { simpleFetch } from '../../../utils/fetch.js';
import { useSelector } from 'react-redux';
import { selectUserId } from '../../../utils/selectors.js';

/**
 * Hooks used for liking a post with optimistic UI
 */
export function useLikePost(userId) {
    const queryClient = useQueryClient();
    const currentUserId = useSelector(selectUserId);
    const queryKey = userId ? ['posts', userId] : ['posts'];

    const { mutate, isError, error } = useMutation({
        mutationFn: async ({ postId, likeAction, writerId }) => {
            return simpleFetch({
                url: `/data/posts/${postId}/like`,
                method: 'POST',
                data: { like: likeAction },
            });
        },

        onMutate: async ({ postId, likeAction, ...data }) => {
            await queryClient.cancelQueries({ queryKey });
            const previousPosts = queryClient.getQueryData({ queryKey });

            queryClient.setQueryData(queryKey, (old) => {
                for (const { data } of old.pages) {
                    for (const post of data) {
                        if (post.postId !== postId) {
                            continue;
                        }

                        if (likeAction) {
                            post.likes++;
                            post.usersLiked.push(currentUserId);
                        } else {
                            post.likes--;
                            post.usersLiked.splice(
                                post.usersLiked.indexOf(currentUserId),
                                1,
                            );
                        }
                    }
                }
            });

            return { previousPosts };
        },

        onError: (error, variables, context) => {
            queryClient.setQueryData(queryKey, context.previousPosts);
        },

        onSuccess: (data, { writerId }) => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
            queryClient.invalidateQueries({ queryKey: ['posts', writerId] });
        },
    });

    return {
        mutate,
        isError,
        error,
    };
}
