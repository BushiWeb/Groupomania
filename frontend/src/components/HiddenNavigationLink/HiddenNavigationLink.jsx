import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './HiddenNavigationLink.module.css';
import { useRef } from 'react';

/**
 * Hidden navigation link, useful for accessibility. It can be used for a "skip to main content" link for example.
 */
export default function HiddenNavigationLink({ label, target }) {
    const timeoutId = useRef(null);

    function handleFocus(e) {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
            timeoutId.current = null;
        }
        e.target.classList.add(style.focused);
        e.target.classList.remove(style.blured);
        e.target.classList.remove('sr-only');
    }

    function handleBlur(e) {
        e.target.classList.add(style.blured);
        e.target.classList.remove(style.focused);
        timeoutId.current = setTimeout(() => {
            e.target.classList.add('sr-only');
            timeoutId.current = null;
        }, 150);
    }

    return <Link
        to={target}
        className={`state-layer target-layer sr-only ${style.hiddenLink}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        data-states="hovered pressed"
    >
        {label}
    </Link>;
}

HiddenNavigationLink.propTypes = {
    /** Text of the link */
    label: PropTypes.string.isRequired,

    /** Target of the link */
    target: PropTypes.string.isRequired,
};