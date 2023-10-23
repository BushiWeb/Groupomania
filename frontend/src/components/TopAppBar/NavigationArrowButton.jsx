import StandardIconButton from '../icon-button/StandardIconButton/StandardIconButton.jsx';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

/**
 * Button to navigate, in the header
 */
export default function NavigationArrowButton({ to, label }) {
    const navigate = useNavigate();

    return <StandardIconButton
        name="arrow_back"
        onClick={() => {
            navigate(to);
        }}
        label={label}
    />;
}

NavigationArrowButton.propTypes = {
    /* Target of the button */
    to: PropTypes.string.isRequired,

    /* Label of the button */
    label: PropTypes.string.isRequired,
};