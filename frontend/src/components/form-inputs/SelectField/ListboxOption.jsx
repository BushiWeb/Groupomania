import PropTypes from 'prop-types';
import style from './SelectField.module.css';
import InteractiveElement from '../../InteractiveElement/InteractiveElement';

/**
 * Item of a listbox
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
    selected: false,
};

ListboxOption.propTypes = {
    /* Label of the button, required */
    label: PropTypes.string.isRequired,

    /* Weither the menu item is selected or not, default to false */
    selected: PropTypes.bool,

    /* Function to execute when the element is clicked, required */
    onClick: PropTypes.func.isRequired,

    /** Id of the element, required */
    id: PropTypes.string.isRequired,
};