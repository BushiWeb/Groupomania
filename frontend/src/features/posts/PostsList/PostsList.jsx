import { useSelector } from 'react-redux';
import Post from '../Posts/Post';
import PropTypes from 'prop-types';
import { selectRighInfos } from '../../../utils/selectors';
import { useArrowNavigation } from '../../../hooks/useArrowNavigation';
import style from './PostsList.module.css';
import ProgressIndicator from '../../../components/ProgressIndicator/ProgressIndicator';

/** List of posts */
export default function PostsList({
    posts, busy, handleLike, ...props
}) {
    const { isAdmin, userId } = useSelector(selectRighInfos);
    const {
        handleBlur,
        handleFocus,
        handleKeyDown,
        focusId,
    } = useArrowNavigation(posts?.length || 0, { usePageKeys: true, useHomeEnd: true });

    return <section
        className={`${props.className || ''} ${style.postsList}`}
        role="feed"
        aria-busy={busy}
        aria-label="Liste des posts"
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
    >
        {posts && posts.map(({
            title,
            message,
            writer: { email: authorEmail, writerId },
            creationDate: date,
            imageUrl,
            usersLiked,
            likes: likeNumber,
            postId,
        }, index) => {
            const postData = {
                title,
                message,
                authorEmail,
                date,
                imageUrl,
                liked: usersLiked?.includes(userId),
                likeNumber,
                hasRights: isAdmin || userId === writerId,
            };
            return <Post
                {...postData}
                key={postId}
                focused={index === focusId}
                onFocus={handleFocus(index)}
                onLike={handleLike(postId, postData.liked)}
            />;
        })}

        {busy && <ProgressIndicator label="Chargement d'anciens posts" circular/>}
    </section>;
}

PostsList.defaultProps = {
    busy: false,
};

PostsList.propTypes = {
    /** Liste des posts à afficher */
    posts: PropTypes.arrayOf(PropTypes.exact({
        postId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
        writer: PropTypes.exact({
            writerId: PropTypes.number.isRequired,
            email: PropTypes.string.isRequired,
            roleId: PropTypes.number,
        }).isRequired,
        creationDate: PropTypes.string.isRequired,
        lastUpdateDate: PropTypes.string,
        likes: PropTypes.number,
        usersLiked: PropTypes.arrayOf(PropTypes.number),
    })),

    /** value of aria-busy, should be true if the posts list is being updated */
    busy: PropTypes.bool,

    /** Function taking the post id and weither the user likes the post or not,
     * and returns the function to be executed to handle the like action. */
    handleLike: PropTypes.func.isRequired,
};