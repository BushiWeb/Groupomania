import PropTypes from 'prop-types';
import style from './TonalIconButton.module.css';
import IconButton from '../IconButton/IconButton.jsx';

/**
 * Outlined icon button button
 */
export default function TonalIconButton({
    disabled,
    autoFocus,
    onClick,
    label,
    name,
    toggle,
    className,
    ...other
}) {
    return (
        <IconButton
            disabled={disabled}
            autoFocus={autoFocus}
            onClick={onClick}
            label={label}
            name={name}
            className={`${style.tonalIconButton} ${className}`}
            toggle={toggle}
            stateLayerColor={
                toggle ? 'on-inverse-surface' : 'on-surface-variant'
            }
            {...other}
        />
    );
}

TonalIconButton.defaultProps = {
    disabled: false,
    autoFocus: false,
    onClick: undefined,
    toggle: undefined,
    className: '',
};

TonalIconButton.propTypes = {
    /** Weither the button is disabled or not */
    disabled: PropTypes.bool,

    /** Weither the button gets the focus when the component mounts */
    autoFocus: PropTypes.bool,

    /** Action that should be executed when clicking on the button */
    onClick: PropTypes.func,

    /** Accessible label of the button */
    label: PropTypes.string.isRequired,

    /** Icon name */
    name: PropTypes.string.isRequired,

    /**
     * State of the button.
     * If no set, the button only has one state.
     * If true, the button is selected.
     * If false, the button is not selected.
     */
    toggle: PropTypes.bool,

    /** Additional class, useful for positionning the element */
    className: PropTypes.string,
};
