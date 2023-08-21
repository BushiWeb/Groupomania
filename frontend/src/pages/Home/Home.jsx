import { useOutletContext } from 'react-router-dom';
import PostsList from '../../features/posts/PostsList';
import style from './Home.module.css';
import { useInfiniteScroll } from './useInfiniteScroll';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { simpleFetch } from '../../utils/fetch';
import { useSelector } from 'react-redux';
import { selectUserId } from '../../utils/selectors';

/** Home page, inserted within the global UI */
export default function Home() {
    const { id, className } = useOutletContext();
    const {
        posts,
        mainRef,
        isFetchingNextPage,
        isError,
        isLoading,
    } = useInfiniteScroll();
    const queryClient = useQueryClient();
    const userId = useSelector(selectUserId);

    const { mutate: likeMutate } = useMutation({
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

    function handleLike(postId, liked) {
        return () => {
            likeMutate({ postId, likeAction: !liked });
        };
    }

    return <main id={id} className={`${className} ${style.home}`} ref={mainRef}>
        <h1 className={style.heading}>Accueil</h1>
        {
            !isError || isLoading || isFetchingNextPage ?
                <PostsList
                    posts={posts}
                    className={style.posts}
                    busy={isFetchingNextPage || isLoading}
                    handleLike={handleLike}
                /> :
                <p className={style.error}>
                    Une erreur est survenue lors du chargement des données.
                    Vous pouvez essayer de recharger la page. Si le problème persiste,
                    n'hésitez pas à vous rapprocher d'un administrateur.
                </p>
        }
    </main>;
}