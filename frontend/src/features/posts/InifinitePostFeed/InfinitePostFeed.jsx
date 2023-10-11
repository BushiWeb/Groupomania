import PostsList from '../PostsList/PostsList';
import { useInfiniteScroll } from './useInfiniteScroll';
import PropTypes from 'prop-types';
import { useLikePost } from './useLikePost';
import { useHandleRequestError } from '../../../hooks/useHandleRequestError';
import { useState } from 'react';
import PostActionsMenu from './PostActionsMenu';
import UpsertPostDialog from '../UpsertPostDialog/UpsertPostDialog';
import DeletePostDialog from '../DeletePostDialog/DeletePostDialog';

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

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuAnchor, setMenuAnchor] = useState(null);
    const [targetPost, setTargetPost] = useState({
        postId: undefined,
        title: undefined,
        message: undefined,
        imageUrl: undefined,
        date: undefined,
    });
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);

    function handleLike(postId, liked) {
        return () => {
            likeMutate({ postId, likeAction: !liked });
        };
    }

    function handleMoreActions(post) {
        return (e) => {
            setMenuAnchor(e.currentTarget);
            setTargetPost(post);
            setIsMenuOpen(previous => !previous);
        };
    }

    function onDeletePost(e) {
        setIsDeleteDialogOpen(true);
    }

    function onUpdatePost(e) {
        setIsUpdateDialogOpen(true);
    }

    if (isPostError) {
        return <p className={errorClassName}>
            Une erreur est survenue lors du chargement des données. Vous pouvez essayer de recharger la page.
            Si le problème persiste, n'hésitez pas à vous rapprocher d'un administrateur.
        </p>;
    }

    return <>
        <PostsList
            posts={posts}
            className={className}
            busy={isFetchingPostNextPage || isLoadingPost}
            handleLike={handleLike}
            handleMoreActions={handleMoreActions}
        />

        {isMenuOpen &&
            <PostActionsMenu
                open={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                anchor={menuAnchor}
                deletePost={onDeletePost}
                updatePost={onUpdatePost}
            />
        }

        {isDeleteDialogOpen &&
            <DeletePostDialog
                onClose={() => setIsDeleteDialogOpen(false)}
                open={isDeleteDialogOpen}
                postDate={targetPost.date}
                postId={targetPost.postId}
                postTitle={targetPost.title}
            />
        }

        {isUpdateDialogOpen &&
            <UpsertPostDialog
                isOpen={isUpdateDialogOpen}
                setIsOpen={setIsUpdateDialogOpen}
                post={{
                    postId: targetPost.postId,
                    title: targetPost.title,
                    message: targetPost.message,
                    imageUrl: targetPost.imageUrl,
                }}
            />
        }
    </>;
}

InfinitePostFeed.propTypes = {
    /** Container reference */
    containerElt: PropTypes.object,

    /** Classname to give to the post list */
    className: PropTypes.string,

    /** ClassName to give to the error message */
    errorClassName: PropTypes.string,
};