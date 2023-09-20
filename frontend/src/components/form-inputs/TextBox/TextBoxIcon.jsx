import PropTypes from 'prop-types';
import style from './TextBox.module.css';
import Icon from '../../Icon/Icon';
import SimpleIconButton from '../../icon-button/SimpleIconButton/SimpleIconButton.jsx';
import { useSelector } from 'react-redux';
import { selectIsDarkTheme } from '../../../utils/selectors';

/**
 * TextField trailing icon
 */
export default function TextBoxIcon({
    name,
    label,
    onClick,
    disabled,
    error,
    ...props
}) {
    const darkTheme = useSelector(selectIsDarkTheme);

    if (onClick && name) {
        return <SimpleIconButton
            name={name}
            label={label}
            onClick={(e) => {
                e.stopPropagation();
                onClick(e);
            }}
            onMouseDown={e => e.preventDefault()}
            className={style.textBoxIconButton}
            disabled={disabled}
            {...props}
        />;
    }

    if (error) {
        return <Icon
            name="error"
            label="Error"
            fill={true}
            className={style.textBoxIcon}
            isOnDark={darkTheme}
            {...props}
        />;
    }

    if (!name) {
        return;
    }

    return <Icon
        name={name}
        label={label}
        className={style.textBoxIcon}
        isOnDark={darkTheme}
        {...props}
    />;
}

TextBoxIcon.defaultProps = {
    name: undefined,
    label: '',
    onClick: undefined,
    error: false,
    disabled: false,
};

TextBoxIcon.propTypes = {
    /* Name of the icon, if no name is given and there is no error, no icon is displayed */
    name: PropTypes.string,

    /* Label of the icon */
    label: PropTypes.string,

    /* Action to execute when clicking on the icon, transforms the icon into a button */
    onClick: PropTypes.func,

    /* Weither the input has an error or not, false by default */
    error: PropTypes.bool,

    /* Weither the button should be disabled, false, by default */
    disabled: PropTypes.bool,
};