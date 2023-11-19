import PropTypes from 'prop-types';
import Menu from '../../../components/Menu/Menu';
import MenuIcon from '../../../components/Menu/MenuIcon';

/** Menu containing the post actions */
export default function PostActionsMenu({
    open,
    onClose,
    anchor,
    deletePost,
    updatePost,
}) {
    return (
        <Menu
            label="Actions sur le post"
            open={open}
            anchor={anchor}
            onClose={onClose}
            menuItems={[
                {
                    label: 'Modifier',
                    leadingIcon: <MenuIcon name="edit" />,
                    onClick: updatePost,
                },
                {
                    label: 'Supprimer',
                    leadingIcon: <MenuIcon name="delete" />,
                    onClick: deletePost,
                },
            ]}
        />
    );
}

PostActionsMenu.defaultProps = {
    open: false,
};

PostActionsMenu.propTypes = {
    /* Weither the menu is opened or closed, defaults to false */
    open: PropTypes.bool,

    /* Function to execute when closing the menu, required */
    onClose: PropTypes.func.isRequired,

    /* Element used to position the menu */
    anchor: PropTypes.instanceOf(HTMLElement),

    /* Function to delete the post, required */
    deletePost: PropTypes.func.isRequired,

    /* Function to update the post, required */
    updatePost: PropTypes.func.isRequired,
};
