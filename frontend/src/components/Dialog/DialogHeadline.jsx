import style from './Dialog.module.css';
import PropTypes from 'prop-types';

/**
 * Headline of the dialog.
 */
export default function DialogHeadline({ children, className, ...props }) {
    return (
        <h1 className={`${style.headline} ${className}`} {...props}>
            {children}
        </h1>
    );
}

DialogHeadline.defaultProps = {
    className: '',
};

DialogHeadline.propTypes = {
    className: PropTypes.string,
};
