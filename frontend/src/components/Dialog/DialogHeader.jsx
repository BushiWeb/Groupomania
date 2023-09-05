import style from './Dialog.module.css';
import PropTypes from 'prop-types';

/**
 * Header of the dialog. Should contain the headline, and can contain a close button or any action button.
 */
export default function DialogHeader({ children, className, ...props }) {
    return <header className={`${style.header} ${className}`} {...props}>
        {children}
    </header>;
}

DialogHeader.defaultProps = {
    className: '',
};

DialogHeader.propTypes = {
    className: PropTypes.string,
};