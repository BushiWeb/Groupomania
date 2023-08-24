import PostsList from '../PostsList/PostsList';
import { useInfiniteScroll } from './useInfiniteScroll';
import PropTypes from 'prop-types';
import { useLikePost } from './useLikePost';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'react-redux';
import { logout } from '../../authentication/user.slice';

/** Feeds the post list with the post data using infinite scrolling, and gives the like function with optimistic UI */
export default function InfiniteScrollingPostsList({ containerElt, errorClassName, className }) {
    const {
        posts,
        isFetchingNextPage,
        isLoading,
        isError,
        error,
    } = useInfiniteScroll(containerElt);
    const { likeMutate } = useLikePost();
    const redirect = useNavigate();
    const { dispatch } = useStore();


    useEffect(() => {
        if (!isError) {
            return;
        }

        // Handling network errors
        if (error instanceof TypeError) {
            return redirect('/error', { state: { type: 'NetworkError' }});
        }

        if (!(error instanceof Response)) {
            return;
        }

        // Handling server errors
        if (error.status >= 500) {
            return redirect('/error', { state: { status: error.status, type: 'ResponseError' }});
        }

        // Handling authentication error
        if (error.status === 401) {
            return dispatch(logout());
        }
    }, [error, isError, redirect, dispatch]);

    function handleLike(postId, liked) {
        return () => {
            likeMutate({ postId, likeAction: !liked });
        };
    }

    if (isError) {
        return <p className={errorClassName}>
            Une erreur est survenue lors du chargement des données. Vous pouvez essayer de recharger la page.
            Si le problème persiste, n'hésitez pas à vous rapprocher d'un administrateur.
        </p>;
    }

    return <PostsList
        posts={posts}
        className={className}
        busy={isFetchingNextPage || isLoading}
        handleLike={handleLike}
    />;
}

InfiniteScrollingPostsList.propTypes = {
    /** Container reference */
    containerElt: PropTypes.object,

    /** Classname of the element */
    className: PropTypes.string,

    /** Classname of the error element */
    errorClassName: PropTypes.string,
};