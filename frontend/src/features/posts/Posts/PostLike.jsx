import PropTypes from 'prop-types';
import StandardIconButton from '../../../components/icon-button/StandardIconButton/StandardIconButton';
import style from './Post.module.css';
import { postContext } from './Post';
import { useContext } from 'react';

/** Displays one post data. */
export default function PostLike({
    onLike,
}) {
    const {
        liked,
        likeNumber,
    } = useContext(postContext);

    return <div className={style.like}>
        <StandardIconButton
            label={`${liked ? 'Ne plus aimer' : 'Aimer'}, ${likeNumber} j'aimes`}
            name="favorite"
            toggle={liked}
            onClick={onLike}
        />
        <span className={liked ? style.likedLikeNumber : style.likeNumber}>{likeNumber}</span>
    </div>;
}

PostLike.propTypes = {
    /** Function to execute when a user clicks on the like button */
    onLike: PropTypes.func.isRequired,
};