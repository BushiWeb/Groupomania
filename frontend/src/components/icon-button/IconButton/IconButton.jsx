import PropTypes from 'prop-types';
import style from './IconButton.module.css';
import Button from '../../buttons/Button/Button.jsx';

/**
 * Icon button. Should be used as a blueprint to create other stylised button like outlined ones.
 */
export default function IconButton({
    isDisabled, hasInitialFocus, action, label, icon, classNames, toggle,
}) {
    return (
        <Button
            isDisabled={isDisabled}
            hasInitialFocus={hasInitialFocus}
            action={action}
            label={label}
            icon={icon}
            isLabelHidden={true}
            classNames={`${toggle ? style.iconButtonSelected : style.iconButton} ${classNames}`}
        />
    );
}

IconButton.defaultProps = {
    isDisabled: false,
    hasInitialFocus: false,
    action: undefined,
    classNames: '',
    toggle: undefined,
};

IconButton.propTypes = {
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

    /** Additional class names */
    classNames: PropTypes.string,

    /** State of the button. If no set, the button only has one state. If true, the button is selected.
     * If false, the button is not selected.
     */
    toggle: PropTypes.bool,
};