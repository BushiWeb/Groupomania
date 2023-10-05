import PropTypes from 'prop-types';
import style from './Menu.module.css';
import useMenu from './useMenu';
import MenuItem from './MenuItem';

/**
 * Menu component
 */
export default function Menu({
    label,
    open,
    anchor,
    className,
    onClose,
    menuItems,
}) {
    const {
        top,
        left,
        ref,
        focusId,
        handleFocus,
    } = useMenu({
        anchor,
        open,
        onClose,
        items: menuItems,
    });

    if (!open) {
        return;
    }

    return <ul
        className={`${style.menu} ${className}`}
        aria-label={label}
        role="menu"
        style={{
            '--menu-top': `${top}px`,
            '--menu-left': `${left}px`,
        }}
        ref={ref}
    >
        {menuItems.map((value, index) => {
            const props = {
                ...value,
                onClick: () => {
                    value.onClick();
                    onClose();
                },
                key: `${index}-${value.label}`,
                focused: focusId === index,
                onFocus: handleFocus,
            };
            return <MenuItem {...props}/>;
        })}
    </ul>;
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

    /* Data to insert menu items, required */
    menuItems: PropTypes.arrayOf(PropTypes.exact({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        leadingIcon: PropTypes.element,
        disabled: PropTypes.bool,
    })).isRequired,
};