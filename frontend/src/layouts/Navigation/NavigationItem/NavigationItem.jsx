import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon/Icon';
import { useSelector } from 'react-redux';
import { selectIsDarkTheme } from '../../../utils/selectors.js';
import style from './NavigationItem.module.css';

/**
 * Navigation item for the different navigation elements
 */
export default function NavigationItem({
    label, icon, target, active, type, focused, onFocus,
}) {
    const isOnDark = useSelector(selectIsDarkTheme);

    const linkRef = (node) => {
        if (focused) {
            node?.focus();
        }
    };

    function handleKeyDown(e) {
        if (e.key === ' ') {
            e.preventDefault();
            e.target.click();
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
        <div className={style.activeIndicator}></div>
        <Link
            to={target}
            className={style.link}
            role="tab"
            aria-selected={active}
            ref={linkRef}
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