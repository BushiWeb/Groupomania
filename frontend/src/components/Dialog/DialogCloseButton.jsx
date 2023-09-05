import PropTypes from 'prop-types';
import StandardIconButton from '../icon-button/StandardIconButton/StandardIconButton';

/**
 * Displays a modal dialog with custom content.
 * The dialog can't be dismissed by clicking outside.
 */
export default function DialogCloseButton({
    onClick, label, ...props
}) {
    return <StandardIconButton onClick={onClick} label={label} name="close" {...props}/>;
}

DialogCloseButton.propTypes = {
    /* Function to execute when clicking the button, required */
    onClick: PropTypes.func.isRequired,

    /* Label of the button, required */
    label: PropTypes.string.isRequired,
};