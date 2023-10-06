import PropTypes from 'prop-types';
import style from './Post.module.css';
import PostLike from './PostLike';
import PostActions from './PostActions';
import { useContext } from 'react';
import { postContext } from './Post';

/** Post header, with the email, the date, the like button and the more actions button */
export default function PostHeader({
    onLike,
    deletePost,
    updatePost,
}) {
    const {
        authorEmail,
        emailId,
        date,
        dateId,
    } = useContext(postContext);

    const formatedDate = new Date(date).toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: undefined,
        hour: '2-digit',
        minute: '2-digit',
        second: undefined,
        timeZoneName: undefined,
    });

    return <header className={style.header}>
        <div className={style.postInfo}>
            <address className={style.author} id={emailId}>{authorEmail}</address>
            <time className={style.date} dateTime={date} id={dateId}>{formatedDate}</time>
        </div>

        <PostLike
            onLike={onLike}
        />

        <PostActions
            deletePost={deletePost}
            updatePost={updatePost}
        />
    </header>;

}

PostHeader.propTypes = {
    /** Function to execute when a user clicks on the like button */
    onLike: PropTypes.func.isRequired,

    /* Function to delete the post, required */
    deletePost: PropTypes.func.isRequired,

    /* Function to update the post, required */
    updatePost: PropTypes.func.isRequired,
};