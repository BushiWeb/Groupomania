import PropTypes from 'prop-types';
import style from './TonalButton.module.css';
import Button from '../Button/Button.jsx';

/**
 * Tonal button
 */
export default function TonalButton({
    isDisabled, hasInitialFocus, action, label, icon, isLabelHidden,
}) {
    return (
        <Button
            isDisabled={isDisabled}
            hasInitialFocus={hasInitialFocus}
            action={action}
            label={label}
            icon={icon}
            isLabelHidden={isLabelHidden}
            classNames={style.tonalButton}
        />
    );
}

TonalButton.defaultProps = {
    isDisabled: false,
    hasInitialFocus: false,
    action: undefined,
    icon: undefined,
    isLabelHidden: false,
};

TonalButton.propTypes = {
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

    /** Icon name to add before the label */
    icon: PropTypes.string,

    /** Weither to show or hide the label. Only works if an icon is present */
    isLabelHidden: PropTypes.bool,
};