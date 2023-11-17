import PropTypes from 'prop-types';
import style from './Divider.module.css';

/** Divider to separate different zones or reinforce interactive zones */
export default function Divider({ fullWidth, className }) {
    return (
        <div
            className={`${className} ${
                fullWidth ? style.divider : style.shortDivider
            }`}
        ></div>
    );
}

Divider.defaultProps = {
    fullWidth: false,
    className: '',
};

Divider.propTypes = {
    /** Weither the divider spans the full width of the container or not. Defaults to false. */
    fullWidth: PropTypes.bool,

    /** More class names */
    className: PropTypes.string,
};
