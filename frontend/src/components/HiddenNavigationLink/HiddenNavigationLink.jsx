import PropTypes from 'prop-types';
import Link from '../Link/Link';
import style from './HiddenNavigationLink.module.css';
import { useEnterExitWithinBounds } from '../../hooks/useEnterExitWithinBounds.js';
import InteractiveElement from '../InteractiveElement/InteractiveElement.jsx';

/**
 * Hidden navigation link, useful for accessibility. It can be used for a "skip to main content" link for example.
 */
export default function HiddenNavigationLink({ children, target }) {
    const { enter, exit } = useEnterExitWithinBounds({ origin: 'left', className: 'sr-only' });

    function handleFocus(e) {
        enter(e.target);
    }

    function handleBlur(e) {
        exit(e.target);
    }

    return <InteractiveElement
        rootElement={Link}
        className={`sr-only ${style.hiddenLink}`}
        stateLayerColor="on-tertiary"
        focus={false}
        to={target}
        onFocus={handleFocus}
        onBlur={handleBlur}
    >
        {children}
    </InteractiveElement>;
}

HiddenNavigationLink.propTypes = {
    /** Target of the link */
    target: PropTypes.string.isRequired,
};