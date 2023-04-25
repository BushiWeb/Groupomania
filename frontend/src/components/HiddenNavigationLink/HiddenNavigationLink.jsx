import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './HiddenNavigationLink.module.css';
import { useEnterExitWithinBounds } from '../../hooks/useEnterExitWithinBounds.js';

/**
 * Hidden navigation link, useful for accessibility. It can be used for a "skip to main content" link for example.
 */
export default function HiddenNavigationLink({ label, target }) {
    const { enter, exit } = useEnterExitWithinBounds({ origin: 'left', className: 'sr-only' });

    function handleFocus(e) {
        enter(e.target);
    }

    function handleBlur(e) {
        exit(e.target);
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