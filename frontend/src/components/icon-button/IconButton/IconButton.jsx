import PropTypes from 'prop-types';
import style from './IconButton.module.css';
import Button from '../../buttons/Button/Button.jsx';
import Icon from '../../Icon/Icon';
import { useSelector } from 'react-redux';
import { selectIsDarkTheme } from '../../../utils/selectors';
import Tooltip from '../../../features/tooltip/Tooltip.jsx';

/**
 * Icon button. Should be used as a blueprint to create other stylised button like outlined ones.
 */
export default function IconButton({
    disabled, autoFocus, onClick, label, icon, classNames, toggle, stateLayerColor, ...other
}) {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <Tooltip label={label}>
            <Button
                disabled={disabled}
                autoFocus={autoFocus}
                onClick={onClick}
                label={label}
                classNames={classNames}
                stateLayerColor={stateLayerColor}
                aria-pressed={toggle}
                {...other}
            >
                <Icon
                    name={icon}
                    className={style.icon}
                    size={24}
                    fill={toggle}
                    isOnDark={isDarkTheme}
                />
            </Button>
        </Tooltip>
    );
}

IconButton.defaultProps = {
    disabled: false,
    autoFocus: false,
    onClick: undefined,
    classNames: '',
    toggle: undefined,
    stateLayerColor: undefined,
};

IconButton.propTypes = {
    /** Weither the button is disabled or not */
    disabled: PropTypes.bool,

    /** Weither the button gets the focus when the component mounts */
    autoFocus: PropTypes.bool,

    /** Action that should be executed when clicking on the button */
    onClick: PropTypes.func,

    /**
     * Accessible label of the button.
     */
    label: PropTypes.string.isRequired,

    /** Icon name */
    icon: PropTypes.string.isRequired,

    /** Additional class names */
    classNames: PropTypes.string,

    /**
     * State of the button.
     * If no set, the button only has one state.
     * If true, the button is selected.
     * If false, the button is not selected.
     */
    toggle: PropTypes.bool,

    /** InteractiveElement's stateLayerColor prop. */
    stateLayerColor: PropTypes.string,
};