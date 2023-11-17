import style from './Dialog.module.css';
import PropTypes from 'prop-types';

/**
 * Content of the dialog. Can contain anything.
 */
export default function DialogContent({ children, className, ...props }) {
    return (
        <div className={`${style.content} ${className}`} {...props}>
            {children}
        </div>
    );
}

DialogContent.defaultProps = {
    className: '',
};

DialogContent.propTypes = {
    className: PropTypes.string,
};
