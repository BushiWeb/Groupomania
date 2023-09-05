import style from './Dialog.module.css';
import PropTypes from 'prop-types';

/**
 * Dialog actions, placed at the end of the dialog. Contains the action buttons.
 */
export default function DialogActions({ children, className, ...props }) {
    return <div className={`${style.actions} ${className}`} {...props}>
        {children}
    </div>;
}

DialogActions.defaultProps = {
    className: '',
};

DialogActions.propTypes = {
    className: PropTypes.string,
};