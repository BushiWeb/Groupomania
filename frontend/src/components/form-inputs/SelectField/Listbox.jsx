import PropTypes from 'prop-types';
import style from './SelectField.module.css';
import useListbox from './useListbox';

/**
 * Listbox component, to be used within a select
 */
export default function Listbox({
    open,
    anchor,
    className,
    children,
}) {
    const {
        position: {
            top,
            left,
            width,
        },
        ref,
    } = useListbox({
        anchor,
        open,
    });

    if (!open) {
        return;
    }

    return <ul
        className={`${style.listbox} ${className}`}
        role="listbox"
        style={{
            '--listbox-top': `${top}px`,
            '--listbox-left': `${left}px`,
            ...width !== null && { '--listbox-width': `${width}px` },
        }}
        ref={ref}
    >
        {children}
    </ul>;
}

Listbox.defaultProps = {
    open: false,
    className: '',
};

Listbox.propTypes = {
    /* Weither the listbox is opened or not, default to false */
    open: PropTypes.bool,

    /* Element to anchor the listbox to */
    anchor: PropTypes.instanceOf(HTMLElement),

    /* Additional classnames */
    className: PropTypes.string,
};