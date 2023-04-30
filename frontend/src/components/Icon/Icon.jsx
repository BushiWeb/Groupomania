import PropTypes from 'prop-types';
import style from './Icon.module.css';

/**
 * Insert a Google Font Icon.
 */
export default function Icon({
    name, weight, size, grad, fill, isOnDark, isWithText, hidden,
}) {

    return <span
        className={`material-icon ${isWithText ? style.withTypo : style.icon}`}
        style={{
            ...fill && { '--icon-fill': fill },
            '--icon-weight': weight || 'inherit',
            '--icon-grad': isOnDark ? grad - 25 : grad,
            ...size && { '--icon-optical-size': `${size}` },
        }}
        aria-hidden={hidden}
    >{name}</span>;
}

Icon.defaultProps = {
    weight: undefined,
    size: undefined,
    grad: 0,
    fill: false,
    isOnDark: false,
    isWithText: false,
    hidden: true,
};

Icon.propTypes = {
    /** Name of the icon */
    name: PropTypes.string.isRequired,

    /** Weight of the icon */
    weight: PropTypes.number,

    /** Optical size of the icon in px */
    size: PropTypes.number,

    /** Grad of the icon */
    grad: PropTypes.number,

    /** Fill of the icon */
    fill: PropTypes.bool,

    /** Weither the appearance of the icon should be tweaked for better readability on black backgrounds */
    isOnDark: PropTypes.bool,

    /** Weither the icon is next to some text, thus needing a baseline shif */
    isWithText: PropTypes.bool,

    /** Weither to hide the icon from screen-readers or not, defautls to true */
    hidden: PropTypes.bool,
};