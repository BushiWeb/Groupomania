import PropTypes from 'prop-types';
import style from './FAB.module.css';
import Button from '../Button/Button.jsx';
import Icon from '../../Icon/Icon';
import { useSelector } from 'react-redux';
import { selectIsDarkTheme } from '../../../utils/selectors';

/**
 * Floating Action Button.
 * If no children are given but a icon is, this is a classical FAB.
 * With children, this is an extended FAB.
 * All additionnal props are passed to the DOM element.
 */
export default function FAB({
    autoFocus, onClick, label, children, icon, floating, ...other
}) {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    let className = `${children ? style.extendedFab : style.fab} ${floating ? style.floating : ''}`;

    return <Button
        classNames={className}
        autoFocus={autoFocus}
        onClick={onClick}
        label={label}
        stateLayerColor="on-secondary-container"
        {...other}
    >
        {icon && <Icon name={icon} className={style.icon} size={24} isWithText={true} isOnDark={isDarkTheme}/>}
        {children}
    </Button>;
}

FAB.defaultProps = {
    autoFocus: false,
    onClick: undefined,
    label: undefined,
    icon: undefined,
    floating: true,
};

FAB.propTypes = {
    /** Weither the button gets the focus when the component mounts. Defaults to false. */
    autoFocus: PropTypes.bool,

    /** Action that should be executed when clicking on the button */
    onClick: PropTypes.func,

    /**
     * Accessible label for the button.
     * It should be provided if the button value has no accessible text.
     */
    label: PropTypes.string,

    /** Name of the icon to add before the text. */
    icon: PropTypes.string,

    /** Weither the button is floating or still within the flow. Defaults to true. */
    floating: PropTypes.bool,
};