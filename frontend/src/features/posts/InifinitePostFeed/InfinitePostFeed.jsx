import PostsList from '../PostsList/PostsList';
import PropTypes from 'prop-types';
import PostActionsMenu from './PostActionsMenu';
import UpsertPostDialog from '../UpsertPostDialog/UpsertPostDialog';
import DeletePostDialog from '../DeletePostDialog/DeletePostDialog';
import { useInfinitePostFeed } from './useInfinitePostFeed';

/**
 * Allows the insertion of an infinite scrolling post list.
 * As the user scrolls, more posts are loaded.
 * When a user clicks on a like button, optimistic UI is used to make the app more responsive.
 * Use an ErrorBoundary to handle errors.
 */
export default function InfinitePostFeed({ containerElt, errorClassName, className }) {
    const {
        data,
        isFetchingPostNextPage,
        isLoadingPost,
        isPostError,
        isMenuOpen,
        menuAnchor,
        targetPost,
        isDeleteDialogOpen,
        isUpdateDialogOpen,
        handleLike,
        handleMoreActions,
        onDeletePost,
        onUpdatePost,
        setIsMenuOpen,
        setIsDeleteDialogOpen,
        setIsUpdateDialogOpen,
    } = useInfinitePostFeed(containerElt);

    if (isPostError) {
        return <p className={errorClassName}>
            Une erreur est survenue lors du chargement des données. Vous pouvez essayer de recharger la page.
            Si le problème persiste, n'hésitez pas à vous rapprocher d'un administrateur.
        </p>;
    }

    return <>
        <PostsList
            posts={data}
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