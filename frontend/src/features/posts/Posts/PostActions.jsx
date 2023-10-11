import PropTypes from 'prop-types';
import StandardIconButton from '../../../components/icon-button/StandardIconButton/StandardIconButton';
import { useContext } from 'react';
import { postContext } from './Post';

/** Displays one post data. */
export default function PostActions({
    onClick,
}) {
    const { hasRights } = useContext(postContext);

    if (!hasRights) {
        return;
    }

    return <StandardIconButton
        label={'Plus d\'actions'}
        name="more_vert"
        onClick={onClick}
    />;

}

PostActions.propTypes = {
    /* Function to execute on click, required */
    onClick: PropTypes.func.isRequired,
};