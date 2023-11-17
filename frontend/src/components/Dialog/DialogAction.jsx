import PropTypes from 'prop-types';
import TextButton from '../buttons/TextButton/TextButton';

/**
 * Dialog action button, used for acknowledgment, dismiss or acceptance.
 * The value is given as the children.
 */
export default function DialogAction({ onClick, children, ...props }) {
    return (
        <TextButton onClick={onClick} {...props}>
            {children}
        </TextButton>
    );
}

DialogAction.propTypes = {
    /* Function to execute when clicking the button */
    onClick: PropTypes.func.isRequired,
};
