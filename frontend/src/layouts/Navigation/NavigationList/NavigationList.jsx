import PropTypes from 'prop-types';
import NavigationItem from '../NavigationItem/NavigationItem';
import style from './NavigationList.module.css';
import { useArrowNavigation } from '../../../hooks/useArrowNavigation';

/**
 * Inserts a navigation list, the format depends on the type
 */
export default function NavigationList({
    links, type, ...props
}) {
    const {
        handleBlur,
        handleFocus,
        handleKeyDown,
        focusId,
    } = useArrowNavigation(links.length);

    let className = style.navigationBar;
    if (type === 'rail') {
        className = style.navigationRail;
    } else if (type === 'drawer') {
        className = style.navigationDrawer;
    }

    return <ul
        className={`${className} ${props.className || ''}`}
        role="tablist"
        {...type === 'drawer' && {
            onBlur: handleBlur,
            onKeyDown: handleKeyDown,
        }}
        {...props}
    >
        {links.map((value, index) => <NavigationItem
            {...value}
            key={`${value.label}-${value.target}`}
            type={type}
            {...type === 'drawer' && {
                onFocus: handleFocus(index),
                focused: focusId === index,
            }}
        />)}
    </ul>;
}

NavigationList.defaultProps = {
    type: 'bar',
};

NavigationList.propTypes = {
    // Descriptions of the links, with their label, icon and target, as well as if the link is active or not
    links: PropTypes.arrayOf(PropTypes.exact({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        target: PropTypes.string.isRequired,
        active: PropTypes.bool,
    })).isRequired,

    //Type of navigation list, defaults to bar
    type: PropTypes.oneOf(['bar', 'rail', 'drawer']),
};