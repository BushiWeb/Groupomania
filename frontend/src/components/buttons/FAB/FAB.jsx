import PropTypes from 'prop-types';
import style from './FAB.module.css';
import Button from '../Button/Button.jsx';
import Icon from '../../Icon/Icon';
import { useSelector } from 'react-redux';
import { selectIsDarkTheme } from '../../../utils/selectors';
import useTooltip from '../../../features/tooltip/useTooltip';

/**
 * Floating Action Button.
 * If no children are given but a icon is, this is a classical FAB.
 * With children, this is an extended FAB.
 * All additionnal props are passed to the DOM element.
 */
export default function FAB({
    autoFocus,
    onClick,
    label,
    children,
    icon,
    low,
    ...other
}) {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const { anchorEventHandlers } = useTooltip(label);

    const className = `${children ? style.extendedFab : style.fab} ${
        other.className ? other.className : ''
    }`;
    delete other.className;

    return (
        <Button
            classNames={className}
            autoFocus={autoFocus}
            onClick={onClick}
            label={label}
            stateLayerColor="on-secondary-container"
            {...(low && { 'data-low': true })}
            {...(!children && { ...anchorEventHandlers })}
            {...other}
        >
            {icon && (
                <Icon
                    name={icon}
                    className={style.icon}
                    size={24}
                    isOnDark={isDarkTheme}
                />
            )}
            {children}
        </Button>
    );
}

FAB.defaultProps = {
    autoFocus: false,
    onClick: undefined,
    label: undefined,
    icon: undefined,
    low: false,
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

    /** Decrease the visual elevation of the fav, default to false */
    low: PropTypes.bool,
};
