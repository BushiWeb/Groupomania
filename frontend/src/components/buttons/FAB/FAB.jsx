import PropTypes from 'prop-types';
import style from './FAB.module.css';
import Button from '../Button/Button.jsx';

/**
 * Filled button
 */
export default function FAB({
    hasInitialFocus, action, label, icon, extended,
}) {
    return (
        <Button
            hasInitialFocus={hasInitialFocus}
            action={action}
            label={label}
            icon={icon}
            isLabelHidden={!extended}
            classNames={extended ? style.extendedFab : style.fab}
        />
    );
}

FAB.defaultProps = {
    hasInitialFocus: false,
    action: undefined,
    icon: undefined,
    extended: true,
};

FAB.propTypes = {
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
    extended: PropTypes.bool,
};