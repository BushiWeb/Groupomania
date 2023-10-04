import PropTypes from 'prop-types';
import style from './Menu.module.css';
import { useSelector } from 'react-redux';
import { selectIsDarkTheme } from '../../utils/selectors';
import Icon from '../Icon/Icon';

/**
 * Icon to add to a list item
 */
export default function MenuIcon({
    name, ...props
}) {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return <Icon
        name={name}
        size={24}
        isOnDark={isDarkTheme}
        className={style.icon}
        {...props}
    />;
}

MenuIcon.propTypes = {
    /* Name of the icon */
    name: PropTypes.string.isRequired,
};