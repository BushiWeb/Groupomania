import PropTypes from 'prop-types';
import NavigationItem from '../NavigationItem/NavigationItem';
import style from './NavigationRail.module.css';

/**
 * Inserts a navigation rail, generally on the side of the screen on tablets.
 */
export default function NavigationRail({ links, ...props }) {
    return <ul className={`${style.navigationRail} ${props.className || ''}`} role="tablist">
        {links.map((value) => <NavigationItem {...value} key={`${value.label}-${value.target}`} type='rail'/>)}
    </ul>;
}

NavigationRail.propTypes = {
    // Descriptions of the links, with their label, icon and target, as well as if the link is active or not
    links: PropTypes.arrayOf(PropTypes.exact({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        target: PropTypes.string.isRequired,
        active: PropTypes.bool,
    })).isRequired,
};