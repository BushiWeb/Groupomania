import PropTypes from 'prop-types';
import Divider from '../../../components/Divider/Divider';
import { createContext, useId, useState } from 'react';
import style from './Post.module.css';
import { useFocusable } from '../../../hooks/useFocusable';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostImage from './PostImage';
import DeletePostDialog from '../DeletePostDialog/DeletePostDialog';
import UpsertPostDialog from '../UpsertPostDialog/UpsertPostDialog';

export const postContext = createContext();

/** Displays one post data. */
export default function Post({
    postId,
    title,
    message,
    authorEmail,
    date,
    imageUrl,
    liked,
    likeNumber,
    posinset,
    setsize,
    hasRights,
    focused,
    onLike,
    ...props
}) {
    const titleId = useId();
    const messageId = useId();
    const emailId = useId();
    const dateId = useId();

    const postRef = useFocusable(focused);

    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);

    return <postContext.Provider value={{
        title,
        titleId,
        message,
        messageId,
        authorEmail,
        emailId,
        date,
        dateId,
        imageUrl,
        liked,
        likeNumber,
        hasRights,
    }}>
        <article
            className={imageUrl ? style.imagePost : style.post}
            tabIndex={0}
            ref={postRef}
            onFocus={props.onFocus}
            aria-posinset={posinset}
            aria-setsize={setsize}
            aria-labelledby={titleId}
            aria-describedby={`${emailId} ${dateId} ${messageId}`}
        >
            <PostHeader
                deletePost={(e) => setIsDeleteDialogOpen(true)}
                updatePost={(e) => setIsUpdateDialogOpen(true)}
                onLike={onLike}
            />

            <Divider className={style.divider}/>

            <PostContent/>

            <PostImage/>

            {
                isDeleteDialogOpen &&
                <DeletePostDialog
                    onClose={() => setIsDeleteDialogOpen(false)}
                    open={isDeleteDialogOpen}
                    postDate={date}
                    postId={postId}
                    postTitle={title}
                />
            }

            {
                isUpdateDialogOpen &&
                <UpsertPostDialog
                    isOpen={isUpdateDialogOpen}
                    setIsOpen={setIsUpdateDialogOpen}
                    post={{
                        postId,
                        title,
                        message,
                        imageUrl,
                    }}
                />
            }
        </article>
    </postContext.Provider>;

}

Post.defaultProps = {
    liked: false,
    likeNumber: 0,
    imageUrl: undefined,
    hasRights: false,
    setsize: -1,
    focused: false,
};

Post.propTypes = {
    /** Id of the post, required */
    postId: PropTypes.number.isRequired,

    /** Title of the post */
    title: PropTypes.string.isRequired,

    /** Message of the post */
    message: PropTypes.string.isRequired,

    /** Post's author's email */
    authorEmail: PropTypes.string.isRequired,

    /** Post's creation date */
    date: PropTypes.string.isRequired,

    /** Post's image url. Optionnal. */
    imageUrl: PropTypes.string,

    /** Indicates weither the post is liked by the current user or not. False by default. */
    liked: PropTypes.bool,

    /** Number of likes. 0 by default. */
    likeNumber: PropTypes.number,

    /** Position of the post within the post feed, for accessibility, required is setsize is set */
    posinset: PropTypes.number,

    /** Number of posts within the feed, for accessibility, defaults to -1 */
    setsize: PropTypes.number,

    /** Weither the user has the rights of update and deletion on the post. False by default. */
    hasRights: PropTypes.bool,

    /** Weither the element should receive the focus or not, defaults to false */
    focused: PropTypes.bool,

    /** Function to execute when a user clicks on the like button */
    onLike: PropTypes.func.isRequired,
};