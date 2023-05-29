import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './HiddenNavigationLink.module.css';
import { useEnterExitWithinBounds } from '../../hooks/useEnterExitWithinBounds.js';
import { useTargetLayer } from '../../hooks/useTargetLayer';
import { useStateLayer } from '../../hooks/useStateLayer';

/**
 * Hidden navigation link, useful for accessibility. It can be used for a "skip to main content" link for example.
 */
export default function HiddenNavigationLink({ label, target }) {
    const { enter, exit } = useEnterExitWithinBounds({ origin: 'left', className: 'sr-only' });
    const targetLayerProps = useTargetLayer();
    const stateLayerProps = useStateLayer({ hover: true, active: true });

    function handleFocus(e) {
        enter(e.target);
    }

    function handleBlur(e) {
        exit(e.target);
    }

    return <Link
        to={target}
        className={`sr-only ${style.hiddenLink}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...targetLayerProps}
        {...stateLayerProps}
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