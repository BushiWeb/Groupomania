import PropTypes from 'prop-types';
import StandardIconButton from '../../components/icon-button/StandardIconButton/StandardIconButton';
import Divider from '../../components/Divider/Divider';
import { useId } from 'react';
import style from './Post.module.css';

/** Displays one post data. */
export default function Post({
    title, message, authorEmail, date, imageUrl, liked, likeNumber, posinset, setsize, hasRights,
}) {
    const headerId = useId();
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

    return <article className={style.post} aria-posinset={posinset} aria-setsize={setsize} aria-labelledby={headerId}>
        <header className={style.header}>
            <div className={style.postInfo}>
                <address className={style.author}>{authorEmail}</address>
                <time className={style.date} dateTime={date}>{formatedDate}</time>
            </div>
            <div className={style.like}>
                <StandardIconButton label={`${liked ? 'Ne plus aimer' : 'Aimer'}, ${likeNumber} j'aimes`} icon="favorite" toggle={liked}/>
                <span className={liked ? style.likedLikeNumber : style.likeNumber}>{likeNumber}</span>
            </div>
            {hasRights && <StandardIconButton label={'More actions'} icon="more_vert"/>}
        </header>
        <Divider className={style.divider}/>
        <div className={style.content}>
            <h2 className={style.title} id={headerId}>{title}</h2>
            <p className={style.message}>{message}</p>
        </div>
        {imageUrl && <img className={style.image} src={imageUrl} alt=""/>}
    </article>;

}

Post.defaultProps = {
    liked: false,
    likeNumber: 0,
    imageUrl: undefined,
    hasRights: false,
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

    /** Position of the post within the post feed, for accessibility */
    posinset: PropTypes.number.isRequired,

    /** Number of posts within the feed, for accessibility */
    setsize: PropTypes.number.isRequired,

    /** Weither the user has the rights of update and deletion on the post. False by default. */
    hasRights: PropTypes.bool,
};