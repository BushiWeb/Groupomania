import PostsList from '../PostsList/PostsList';
import { useInfiniteScroll } from './useInfiniteScroll';
import PropTypes from 'prop-types';
import { useLikePost } from './useLikePost';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'react-redux';
import { logout } from '../../authentication/user.slice';
import { useHandleRequestError } from '../../../hooks/useHandleRequestError';

/**
 * Allows the insertion of an infinite scrolling post list.
 * As the user scrolls, more posts are loaded.
 * When a user clicks on a like button, optimistic UI is used to make the app more responsive.
 * Use an ErrorBoundary to handle errors.
 */
export default function InfinitePostFeed({ containerElt, errorClassName, className }) {
    const {
        posts,
        isFetchingNextPage: isFetchingPostNextPage,
        isLoading: isLoadingPost,
        isError: isPostError,
        error: postError,
    } = useInfiniteScroll(containerElt);
    const {
        mutate: likeMutate,
        isError: isLikeError,
        error: likeError,
    } = useLikePost();

    useHandleRequestError(isPostError, postError);
    useHandleRequestError(isLikeError, likeError);

    function handleLike(postId, liked) {
        return () => {
            likeMutate({ postId, likeAction: !liked });
        };
    }

    if (isPostError) {
        return <p className={errorClassName}>
            Une erreur est survenue lors du chargement des données. Vous pouvez essayer de recharger la page.
            Si le problème persiste, n'hésitez pas à vous rapprocher d'un administrateur.
        </p>;
    }

    return <PostsList
        posts={posts}
        className={className}
        busy={isFetchingPostNextPage || isLoadingPost}
        handleLike={handleLike}
    />;
}

InfinitePostFeed.propTypes = {
    /** Container reference */
    containerElt: PropTypes.object,

    /** Classname to give to the post list */
    className: PropTypes.string,

    /** ClassName to give to the error message */
    errorClassName: PropTypes.string,
};