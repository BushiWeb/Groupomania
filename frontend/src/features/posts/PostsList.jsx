import { useSelector } from 'react-redux';
import Post from './Post';
import PropTypes from 'prop-types';
import { selectRighInfos } from '../../utils/selectors';
import { useArrowNavigation } from '../../hooks/useArrowNavigation';
import style from './PostsList.module.css';

/** List of posts */
export default function PostsList({ posts, busy, ...props }) {
    const { isAdmin, userId } = useSelector(selectRighInfos);
    const {
        handleBlur,
        handleFocus,
        handleKeyDown,
        focusId,
    } = useArrowNavigation(posts.length, { usePageKeys: true, useHomeEnd: true });

    return <section
        className={`${props.className || ''} ${style.postsList}`}
        role="feed"
        aria-busy={busy}
        aria-label="Liste des posts"
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
    >
        {posts.map((value, index) => <Post
            title={value.title}
            message={value.message}
            authorEmail={value.writer.email}
            date={value.creationDate}
            imageUrl={value.imageUrl}
            liked={value.usersLiked?.includes(userId)}
            likeNumber={value.likes}
            hasRights={isAdmin || userId === value.writer.writerId}
            key={value.postId}
            focused={index === focusId}
            onFocus={handleFocus(index)}
        />)}
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
        }).isRequired,
        creationDate: PropTypes.string.isRequired,
        lastUpdateDate: PropTypes.string,
        likes: PropTypes.number,
        usersLiked: PropTypes.arrayOf(PropTypes.number),
    })),

    /** value of aria-busy, should be true if the posts list is being updated */
    busy: PropTypes.bool,
};