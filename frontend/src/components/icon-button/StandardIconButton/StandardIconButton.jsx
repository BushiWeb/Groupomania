import PropTypes from 'prop-types';
import style from './StandardIconButton.module.css';
import IconButton from '../IconButton/IconButton.jsx';

/**
 * Outlined icon button button
 */
export default function StandardIconButton({
    disabled, autoFocus, onClick, label, icon, toggle, ...other
}) {
    return (
        <IconButton
            disabled={disabled}
            autoFocus={autoFocus}
            onClick={onClick}
            label={label}
            icon={icon}
            classNames={style.standardIconButton}
            toggle={toggle}
            stateLayerColor={toggle ? 'primary' : 'on-surface-variant'}
            {...other}
        />
    );
}

StandardIconButton.defaultProps = {
    disabled: false,
    autoFocus: false,
    onClick: undefined,
    toggle: undefined,
};

StandardIconButton.propTypes = {
    /** Weither the button is disabled or not */
    disabled: PropTypes.bool,

    /** Weither the button gets the focus when the component mounts */
    autoFocus: PropTypes.bool,

    /** Action that should be executed when clicking on the button */
    onClick: PropTypes.func,

    /** Accessible label of the button */
    label: PropTypes.string.isRequired,

    /** Icon name */
    icon: PropTypes.string.isRequired,

    /**
     * State of the button.
     * If no set, the button only has one state.
     * If true, the button is selected.
     * If false, the button is not selected.
     */
    toggle: PropTypes.bool,
};