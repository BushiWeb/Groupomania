import PropTypes from 'prop-types';
import style from './TextField.module.css';
import Icon from '../../Icon/Icon';
import SimpleIconButton from '../../icon-button/SimpleIconButton/SimpleIconButton.jsx';
import { useSelector } from 'react-redux';
import { selectIsDarkTheme } from '../../../utils/selectors';

/**
 * TextField trailing icon
 */
export default function TrailingIcon({
    name, label, onClick, error, disabled, ...iconProps
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
            className={style.trailingIconButton}
            disabled={disabled}
            {...iconProps}
        />;
    }

    if (error) {
        return <Icon name="error" label="Error" fill={true} className={style.trailingIcon} isOnDark={darkTheme}/>;
    }

    return <Icon
        name={name}
        label={label}
        className={style.trailingIconButton}
        disabled={disabled}
        {...iconProps}
    />;
}

TrailingIcon.defaultProps = {
    label: '',
    onClick: undefined,
    error: false,
    disabled: false,
    name: '',
};

TrailingIcon.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    error: PropTypes.bool,
    disabled: PropTypes.bool,
};