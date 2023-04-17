import PropTypes from 'prop-types';
import style from './Icon.module.css';

/**
 * Insert a Google Font Icon.
 */
export default function Icon({
    name, weight, size, grad, fill, isOnDark, isWithText,
}) {
    return <span className={`material-symbols-rounded ${isWithText ? style.withTypo : style.icon}`}
        style={{
            '--icon-fill': fill ? 1 : 0,
            '--icon-weight': weight || 'inherit',
            '--icon-grad': isOnDark ? grad - 25 : grad,
            '--icon-size': `${size}px`,
            '--icon-optical-size': `${size}`,
        }}
    >{name}</span>;
}

Icon.defaultProps = {
    weight: undefined,
    size: 24,
    grad: 0,
    fill: false,
    isOnDark: false,
    isWithText: false,
};

Icon.propTypes = {
    /** Name of the icon */
    name: PropTypes.string.isRequired,

    /** Weight of the icon */
    weight: PropTypes.number,

    /** Size of the icon, in rem */
    size: PropTypes.number,

    /** Grad of the icon */
    grad: PropTypes.number,

    /** Fill of the icon */
    fill: PropTypes.bool,

    /** Weither the appearance of the icon should be tweaked for better readability on black backgrounds */
    isOnDark: PropTypes.bool,

    /** Weither the icon is next to some text, thus needing a baseline shif */
    isWithText: PropTypes.bool,
};