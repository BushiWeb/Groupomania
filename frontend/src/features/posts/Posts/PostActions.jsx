import PropTypes from 'prop-types';
import StandardIconButton from '../../../components/icon-button/StandardIconButton/StandardIconButton';
import { useContext, useState } from 'react';
import PostActionsMenu from './PostActionsMenu';
import { postContext } from './Post';

/** Displays one post data. */
export default function PostActions({
    deletePost,
    updatePost,
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuAnchor, setMenuAnchor] = useState(null);

    const {
        hasRights,
    } = useContext(postContext);

    if (!hasRights) {
        return;
    }

    return <>
        <StandardIconButton
            label={'Plus d\'actions'}
            name="more_vert"
            onClick={(e) => {
                setMenuAnchor(e.currentTarget);
                setIsMenuOpen(previous => !previous);
            }}
        />
        <PostActionsMenu
            open={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            anchor={menuAnchor}
            deletePost={deletePost}
            updatePost={updatePost}
        />
    </>;

}

PostActions.propTypes = {
    /* Function to delete the post, required */
    deletePost: PropTypes.func.isRequired,

    /* Function to update the post, required */
    updatePost: PropTypes.func.isRequired,
};