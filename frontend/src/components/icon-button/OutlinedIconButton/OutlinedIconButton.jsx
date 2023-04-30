import PropTypes from 'prop-types';
import style from './OutlinedIconButton.module.css';
import IconButton from '../IconButton/IconButton.jsx';

/**
 * Outlined icon button button
 */
export default function OutlinedIconButton({
    isDisabled, hasInitialFocus, action, label, icon, toggle,
}) {
    return (
        <IconButton
            isDisabled={isDisabled}
            hasInitialFocus={hasInitialFocus}
            action={action}
            label={label}
            icon={icon}
            classNames={
                toggle ?
                    style.outlinedIconButtonSelected :
                    toggle === false ?
                        style.outlinedIconButtonUnselected :
                        style.outlinedIconButton
            }
            toggle={toggle}
        />
    );
}

OutlinedIconButton.defaultProps = {
    isDisabled: false,
    hasInitialFocus: false,
    action: undefined,
    toggle: undefined,
};

OutlinedIconButton.propTypes = {
    /** Weither the button is disabled or not */
    isDisabled: PropTypes.bool,

    /** Weither the button gets the focus when the component mounts */
    hasInitialFocus: PropTypes.bool,

    /** Action that should be executed when clicking on the button */
    action: PropTypes.func,

    /**
     * Label of the button. If the label is visible, it will be displayed in the button. Otherwise, it will only serve
     * as the button label.
     */
    label: PropTypes.string.isRequired,

    /** Icon name */
    icon: PropTypes.string.isRequired,

    /** State of the button. If no set, the button only has one state. If true, the button is selected.
     * If false, the button is not selected.
     */
    toggle: PropTypes.bool,
};