import PropTypes from 'prop-types';
import style from './Menu.module.css';
import InteractiveElement from '../InteractiveElement/InteractiveElement';
import { useFocusable } from '../../hooks/useFocusable';

/**
 * Item of a list, used within the List component.
 */
export default function MenuItem({
    label,
    leadingIcon,
    onClick,
    disabled,
    focused,
    onFocus,
}) {
    const ref = useFocusable(focused);

    return <li
        className={style.menuItem}
        role="menuitem"
    >
        <InteractiveElement
            rootElement={'button'}
            stateLayerColor="on-surface"
            rippleDuration={350}
            aria-label={label}
            className={`${style.button}`}
            onClick={onClick}
            onFocus={onFocus}
            disabled={disabled}
            ref={ref}
        >
            {leadingIcon}
            {label}
        </InteractiveElement>
    </li>;
}

MenuItem.defaultProps = {
    disabled: false,
    focused: false,
};

MenuItem.propTypes = {
    /* Label of the button, required */
    label: PropTypes.string.isRequired,

    /* Action to execute when clicking on the button, required */
    onClick: PropTypes.func.isRequired,

    /* Leading icon */
    leadingIcon: PropTypes.element,

    /* Weither the menu item is disabled or not, default to false */
    disabled: PropTypes.bool,

    /* Weither the menu item is focused or not, default to false */
    focused: PropTypes.bool,

    /* Function to execute when the element gains focus */
    onFocus: PropTypes.func,
};