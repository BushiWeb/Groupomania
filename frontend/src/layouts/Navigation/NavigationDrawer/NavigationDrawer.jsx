import PropTypes from 'prop-types';
import NavigationItem from '../NavigationItem/NavigationItem';
import style from './NavigationDrawer.module.css';
import { useArrowNavigation } from '../../../hooks/useArrowNavigation';

/**
 * Inserts a navigation drawer, generally on the side of the screen on large screens.
 */
export default function NavigationDrawer({ links, ...props }) {
    const {
        handleBlur,
        handleFocus,
        handleKeyDown,
        focusId,
    } = useArrowNavigation(links.length);

    return <ul
        className={`${style.navigationDrawer} ${props.className || ''}`}
        role="tablist"
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
    >
        {links.map((value, index) => <NavigationItem
            {...value}
            key={`${value.label}-${value.target}`}
            type='drawer'
            onFocus={handleFocus(index)}
            focused={focusId === index}
        />)}
    </ul>;
}

NavigationDrawer.propTypes = {
    // Descriptions of the links, with their label, icon and target, as well as if the link is active or not
    links: PropTypes.arrayOf(PropTypes.exact({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        target: PropTypes.string.isRequired,
        active: PropTypes.bool,
    })).isRequired,
};