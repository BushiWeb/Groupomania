import PropTypes from 'prop-types';
import StandardIconButton from '../../../components/icon-button/StandardIconButton/StandardIconButton';
import Divider from '../../../components/Divider/Divider';
import { useId, useState } from 'react';
import style from './Post.module.css';
import { useFocusable } from '../../../hooks/useFocusable';
import ImageWithLighbox from '../../../components/Image/ImageWithLightbox';
import Menu from '../../../components/Menu/Menu';
import MenuItem from '../../../components/Menu/MenuItem';
import MenuIcon from '../../../components/Menu/MenuIcon';

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
    const headerId = useId();
    const messageId = useId();
    const emailId = useId();
    const dateId = useId();
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

    const postRef = useFocusable(focused);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuAnchor, setMenuAnchor] = useState(null);

    return <article
        className={imageUrl ? style.imagePost : style.post}
        tabIndex={0}
        ref={postRef}
        onFocus={props.onFocus}
        aria-posinset={posinset}
        aria-setsize={setsize}
        aria-labelledby={headerId}
        aria-describedby={`${emailId} ${dateId} ${messageId}`}
    >
        <header className={style.header}>
            <div className={style.postInfo}>
                <address className={style.author} id={emailId}>{authorEmail}</address>
                <time className={style.date} dateTime={date} id={dateId}>{formatedDate}</time>
            </div>

            <div className={style.like}>
                <StandardIconButton label={`${liked ? 'Ne plus aimer' : 'Aimer'}, ${likeNumber} j'aimes`} name="favorite" toggle={liked} onClick={onLike}/>
                <span className={liked ? style.likedLikeNumber : style.likeNumber}>{likeNumber}</span>
            </div>

            {hasRights &&
            <StandardIconButton
                label={'Plus d\'actions'}
                name="more_vert"
                onClick={(e) => {
                    setMenuAnchor(e.currentTarget);
                    setIsMenuOpen(previous => !previous);
                }}
            />}
        </header>

        <Divider className={style.divider}/>

        <div className={style.content}>
            <h2 className={style.title} id={headerId}>{title}</h2>
            <p className={style.message} id={messageId}>{message}</p>
        </div>

        {
            imageUrl &&
            <ImageWithLighbox
                className={style.image}
                src={imageUrl}
                lightboxLabel={`Lightbox contenant l'image du post ${title} de ${authorEmail}`}
            />
        }
        <Menu
            label="Actions sur le post"
            open={isMenuOpen}
            anchor={menuAnchor}
            onClose={() => setIsMenuOpen(false)}
        >
            <MenuItem
                label="Modifier"
                leadingIcon={<MenuIcon name="edit"/>}
                onClick={() => console.log('coucou')}
            />
            <MenuItem
                label="Supprimer"
                leadingIcon={<MenuIcon name="delete"/>}
                onClick={() => console.log('coucou')}
            />
        </Menu>
    </article>;

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