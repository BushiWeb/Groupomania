import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './HiddenNavigationLink.module.css';

/**
 * Hidden navigation link, useful for accessibility. It can be used for a "skip to main content" link for example.
 */
export default function HiddenNavigationLink({ label, target }) {
    function handleFocus(e) {
        e.target.classList.add(style.focused);
        e.target.classList.remove(style.blured);
    }

    function handleBlur(e) {
        e.target.classList.add(style.blured);
        e.target.classList.remove(style.focused);
    }

    return <Link to={target} className={style.hiddenLink} onFocus={handleFocus} onBlur={handleBlur}>{label}</Link>;
}

HiddenNavigationLink.propTypes = {
    /** Text of the link */
    label: PropTypes.string.isRequired,

    /** Target of the link */
    target: PropTypes.string.isRequired,
};