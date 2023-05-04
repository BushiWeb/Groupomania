import PropTypes from 'prop-types';
import style from './Icon.module.css';

/**
 * Insert a Google Font Icon.
 */
export default function Icon({
    name, weight, size, grad, fill, isOnDark, isWithText, label, action,
}) {
    const elementsProps = {
        className: `material-icon ${isWithText ? style.withTypo : style.icon}`,
        style: {
            ...fill && { '--icon-fill': 1 },
            '--icon-weight': weight || 'inherit',
            '--icon-grad': isOnDark ? grad - 25 : grad,
            ...size && { '--icon-optical-size': `${size}` },
        },
        ...label ? { 'aria-label': label } : { 'aria-hidden': true },
    };

    if (!action) {
        return <span {...elementsProps}>{name}</span>;
    }

    return <button {...elementsProps} onClick={action}>{name}</button>;
}

Icon.defaultProps = {
    weight: undefined,
    size: undefined,
    grad: 0,
    fill: false,
    isOnDark: false,
    isWithText: false,
    label: undefined,
    action: undefined,
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

    /** Accessible label of the icon. If no label is given, the icon will be hidden. */
    label: PropTypes.string,

    /** Action to execute on click on the icon. Transforms the icon into a button */
    action: PropTypes.func,
};