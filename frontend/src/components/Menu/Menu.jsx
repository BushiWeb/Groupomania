import PropTypes from 'prop-types';
import style from './Menu.module.css';
import useMenu from './useMenu';
import { menuContext } from './menuContext';

/**
 * Menu component
 */
export default function Menu({
    children,
    label,
    open,
    anchor,
    className,
    onClose,
}) {
    const {
        top,
        left,
        ref,
    } = useMenu({
        anchor,
        open,
        onClose,
    });

    if (!open) {
        return;
    }

    return <menuContext.Provider value={onClose}>
        <ul
            className={`${style.menu} ${className}`}
            aria-label={label}
            role="menu"
            style={{
                '--menu-top': `${top}px`,
                '--menu-left': `${left}px`,
            }}
            ref={ref}
        >
            {children}
        </ul>
    </menuContext.Provider>;
}

Menu.defaultProps = {
    open: false,
    className: '',
};

Menu.propTypes = {
    /** Label of the list */
    label: PropTypes.string.isRequired,

    /* Weither the menu is opened or not, default to false */
    open: PropTypes.bool,

    /* Element to anchor the menu to */
    anchor: PropTypes.instanceOf(HTMLElement),

    /* Additional classnames */
    className: PropTypes.string,

    /* Function to execute when closing the menu, required */
    onClose: PropTypes.func.isRequired,
};