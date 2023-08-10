import PropTypes from 'prop-types';
import Link from '../../../components/Link/Link';
import Icon from '../../../components/Icon/Icon';
import { useSelector } from 'react-redux';
import { selectIsDarkTheme } from '../../../utils/selectors.js';
import style from './NavigationItem.module.css';
import { useRipple } from '../../../hooks/useRipple';
import { useRef } from 'react';

/**
 * Navigation item for the different navigation elements
 */
export default function NavigationItem({
    label, icon, target, active, type, focused, onFocus, ...rest
}) {
    const isOnDark = useSelector(selectIsDarkTheme);
    const rippleTrigger = useRipple(350);
    const stateLayerRef = useRef(null);

    const linkRef = (node) => {
        if (focused) {
            node?.focus();
        }
    };

    function handlePointerDown(e) {
        rest.onPointerDown?.(e);

        rippleTrigger(stateLayerRef.current, { x: e.clientX, y: e.clientY });
    }

    function handleKeyDown(e) {
        rest.onKeyDown?.(e);

        if (e.key === ' ' || e.key === 'Enter') {
            rippleTrigger(stateLayerRef.current);
        }
    }

    let className = style.navigationBarItem;
    if (type === 'rail') {
        className = style.navigationRailItem;
    } else if (type === 'drawer') {
        className = style.navigationDrawerItem;
    }

    return <li
        className={`${style.navigationItem} ${className}`}
        {...active && { 'data-active': 'true' }}
        onFocus={onFocus}
    >
        <div className={style.activeIndicator}>
            <div className={style.stateLayer} ref={stateLayerRef}/>
        </div>

        <Link
            to={target}
            className={style.link}
            role="tab"
            aria-selected={active}
            ref={linkRef}
            onPointerDown={handlePointerDown}
            onKeyDown={handleKeyDown}
        >
            <div className={style.icon}>
                <Icon name={icon} fill={active} isOnDark={isOnDark} size={24}/>
            </div>
            {label}
        </Link>
    </li>;
}

NavigationItem.defaultProps = {
    active: false,
    type: 'bar',
    focused: false,
};

NavigationItem.propTypes = {
    // Name of the navigation item, required
    label: PropTypes.string.isRequired,

    // Icon of the navigation item, required
    icon: PropTypes.string.isRequired,

    // Target of the navigation item, required, must be a link
    target: PropTypes.string.isRequired,

    // Weither the navigation item is active or not
    active: PropTypes.bool,

    // Type of navigation containing the item
    type: PropTypes.oneOf(['bar', 'rail', 'drawer']),

    /** Weither the element is focused or not */
    focused: PropTypes.bool,

    /** Function to execute on focus of the element */
    onFocus: PropTypes.func,
};