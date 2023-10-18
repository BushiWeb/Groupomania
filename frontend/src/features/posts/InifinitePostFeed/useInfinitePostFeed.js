import { useState } from 'react';
import { simpleFetch } from '../../../utils/fetch.js';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll.js';
import { useLikePost } from './useLikePost.js';
import { useHandleRequestError } from '../../../hooks/useHandleRequestError.js';

/**
 * Hooks for the InfinitePostFeed logic
 * @param containerElt - Element that will receive the scrolling event
 * @param {number} [userId] - user id filter
 * @return {{
 *       data,
 *       isFetchingPostNextPage,
 *       isLoadingPost,
 *       isPostError,
 *       isMenuOpen,
 *       menuAnchor,
 *       targetPost,
 *       isDeleteDialogOpen,
 *       isUpdateDialogOpen,
 *       handleLike,
 *       handleMoreActions,
 *       onDeletePost,
 *       onUpdatePost,
 *       setIsMenuOpen,
 *       setIsDeleteDialogOpen,
 *       setIsUpdateDialogOpen,
 *   }}
 */
export function useInfinitePostFeed(containerElt, userId) {
    const {
        data,
        isFetchingNextPage: isFetchingPostNextPage,
        isLoading: isLoadingPost,
        isError: isPostError,
        error: postError,
    } = useInfiniteScroll(
        containerElt,
        ['posts'],
        async ({ pageParam = 1 }) => {
            const data = await simpleFetch({ url: `/data/posts?page=${pageParam}${userId ? `&userId=${userId}` : ''}` });
            return { data, pageParam };
        }
    );

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

    return {
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
    };
}