import { useMutation, useQueryClient } from '@tanstack/react-query';
import { simpleFetch } from '../../../utils/fetch.js';
import { useSelector } from 'react-redux';
import { selectUserId } from '../../../utils/selectors.js';

/**
 * Hooks used for liking a post with optimistic UI
 */
export function useLikePost() {
    const queryClient = useQueryClient();
    const userId = useSelector(selectUserId);

    const {
        mutate,
        isError,
        error,
    } = useMutation({
        mutationFn: async ({ postId, likeAction }) => {
            return simpleFetch({
                url: `/data/posts/${postId}/like`,
                method: 'POST',
                data: { like: likeAction },
            });
        },

        onMutate: async ({ postId, likeAction }) => {
            await queryClient.cancelQueries({ queryKey: ['posts']});
            const previousPosts = queryClient.getQueryData({ queryKey: ['posts']});

            queryClient.setQueryData(['posts'], (old) => {
                for (const { data } of old.pages) {
                    for (const post of data) {
                        if (post.postId !== postId) {
                            continue;
                        }

                        if (likeAction) {
                            post.likes++;
                            post.usersLiked.push(userId);
                        } else {
                            post.likes--;
                            post.usersLiked.splice(post.usersLiked.indexOf(userId), 1);
                        }
                    }
                }
            });

            return { previousPosts };
        },

        onError: (error, variables, context) => {
            queryClient.setQueryData(['posts'], context.previousPosts);
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['posts']});
        },
    });

    return {
        mutate,
        isError,
        error,
    };
}