import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem';
import style from './NavigationBar.module.css';

/**
 * Inserts a navigation bar, generally at the bottom of the screen.
 */
export default function NavigationBar({ links }) {
    return <ul className={style.navigationBar} role="tablist">
        {links.map((value) => <NavigationItem {...value} key={`${value.label}-${value.target}`}/>)}
    </ul>;
}

NavigationBar.propTypes = {
    // Descriptions of the links, with their label, icon and target, as well as if the link is active or not
    links: PropTypes.arrayOf(PropTypes.exact({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        target: PropTypes.string.isRequired,
        active: PropTypes.bool,
    })).isRequired,
};