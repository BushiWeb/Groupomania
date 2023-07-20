import PropTypes from 'prop-types';
import colorLogo from '../../assets/images/groupomania-logo.svg';
import whiteLogo from '../../assets/images/groupomania-logo-white.svg';
import blackLogo from '../../assets/images/groupomania-logo-black.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../utils/selectors.js';
import { THEMES_NAMES } from '../../features/theme/theme.slice.js';

/**
 * Displays the logo.
 * The logo can be placed within a link.
 * It can be either in color or monochrome. The monochrome value will depend on the theme.
 * Only giving one of the dimension will scale the image proportionnaly.
 */
export default function Logo({
    target, color, width, height, label, ...otherProps
}) {
    // Calculating the size of the image
    const initialWidth = 136, initialHeight = 25;
    if (!width && !height) {
        width = initialWidth;
        height = initialHeight;
    } else if (width && !height) {
        height = Math.round(width * initialHeight / initialWidth);
    } else if (height && !width) {
        width = Math.round(height * initialWidth / initialHeight);
    }

    // Choosing the logo
    const theme = useSelector(selectTheme);
    const monochromeLogo = theme === THEMES_NAMES.light ? blackLogo : whiteLogo;
    const logoElement = <img
        src={color ? colorLogo : monochromeLogo}
        alt={`Groupomania${label ? ` ${label}` : ''}`}
        loading='lazy'
        width={width}
        height={height}
        className={target ? undefined : otherProps?.className}
    />;

    // The structure depends weither or not the logo is a link
    if (target) {
        return (
            <Link to={target} className={otherProps?.className}>{logoElement}</Link>
        );
    }

    return logoElement;
}

Logo.defaultProps = {
    target: undefined,
    label: undefined,
    color: false,
    width: undefined,
    height: undefined,
};

Logo.propTypes = {
    /* Target of the logo link. If no target, then the logo is not within a link */
    target: PropTypes.string,

    /* Label of the action of the link, appended to the image alt text.
    It must convey the action in a short form facor */
    label: PropTypes.string,

    /* Weither to use the colored version of the logo or the monochrome */
    color: PropTypes.bool,

    /* Widht of the image */
    width: PropTypes.number,

    /* Height of the image */
    height: PropTypes.number,
};