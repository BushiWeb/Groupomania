import PropTypes from 'prop-types';
import StandardIconButton from '../../../components/icon-button/StandardIconButton/StandardIconButton';
import Divider from '../../../components/Divider/Divider';
import { createContext, useId, useState } from 'react';
import style from './Post.module.css';
import { useFocusable } from '../../../hooks/useFocusable';
import ImageWithLighbox from '../../../components/Image/ImageWithLightbox';
import Menu from '../../../components/Menu/Menu';
import MenuIcon from '../../../components/Menu/MenuIcon';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostImage from './PostImage';

export const postContext = createContext();

/** Displays one post data. */
export default function Post({
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
                deletePost={(e) => console.log('delete')}
                updatePost={(e) => console.log('update')}
                onLike={onLike}
            />

            <Divider className={style.divider}/>

            <PostContent/>

            <PostImage/>
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