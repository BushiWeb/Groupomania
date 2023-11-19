import PropTypes from 'prop-types';
import style from './Icon.module.css';

/**
 * Insert a Google Font Icon.
 */
export default function Icon({
    name,
    weight,
    size,
    grad,
    fill,
    isOnDark,
    label,
    className,
    ...props
}) {
    const elementsProps = {
        className: `material-icon ${style.icon} ${className}`,
        style: {
            ...(fill && { '--icon-fill': 1 }),
            '--icon-weight': weight || 'inherit',
            '--icon-grad': isOnDark ? grad - 25 : grad,
            ...(size && { '--icon-optical-size': `${size}` }),
        },
        ...(label ? { 'aria-label': label } : { 'aria-hidden': true }),
        ...props,
    };

    return <span {...elementsProps}>{name}</span>;
}

Icon.defaultProps = {
    weight: undefined,
    size: undefined,
    grad: 0,
    fill: false,
    isOnDark: false,
    label: undefined,
    className: '',
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

    /** Accessible label of the icon. If no label is given, the icon will be hidden. */
    label: PropTypes.string,

    /** Other class names to add to the icon */
    className: PropTypes.string,
};
