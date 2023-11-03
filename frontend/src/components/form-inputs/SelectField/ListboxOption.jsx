import PropTypes from 'prop-types';
import style from './Listbox.module.css';
import InteractiveElement from '../../InteractiveElement/InteractiveElement';

/**
 * Item of a list, used within the List component.
 */
export default function ListboxOption({
    label,
    selected,
    onClick,
    id,
    ...props
}) {
    return <li
        className={style.option}
        role="option"
        aria-selected={selected}
        id={id}
    >
        <InteractiveElement
            rootElement='button'
            type='button'
            stateLayerColor="on-surface"
            rippleDuration={350}
            aria-label={label}
            className={`${style.button}`}
            onClick={onClick}
            selected={selected}
            tabIndex={-1}
            {...props}
        >
            {label}
        </InteractiveElement>
    </li>;
}

ListboxOption.defaultProps = {
};

ListboxOption.propTypes = {
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