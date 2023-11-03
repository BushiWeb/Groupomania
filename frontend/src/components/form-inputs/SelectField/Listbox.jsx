import PropTypes from 'prop-types';
import style from './Listbox.module.css';
import { forwardRef } from 'react';

/**
 * Listbox component, to be used within a select
 */
const Listbox = forwardRef(({
    open,
    anchor,
    className,
    children,
}, ref) => {
    /* const {
        position: {
            top,
            left,
        },
        ref,
    } = useListbox({
        anchor,
        open,
    }); */

    if (!open) {
        return;
    }

    return <ul
        className={`${style.listbox} ${className}`}
        role="listbox"

        /* style={{
            '--menu-top': `${top}px`,
            '--menu-left': `${left}px`,
        }} */
        ref={ref}
    >
        {children}
    </ul>;
});

Listbox.defaultProps = {
    open: false,
    className: '',
};

Listbox.propTypes = {
    /* Weither the menu is opened or not, default to false */
    open: PropTypes.bool,

    /* Element to anchor the menu to */
    anchor: PropTypes.instanceOf(HTMLElement),

    /* Additional classnames */
    className: PropTypes.string,
};

export default Listbox;