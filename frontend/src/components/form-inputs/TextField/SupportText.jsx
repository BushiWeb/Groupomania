import PropTypes from 'prop-types';
import style from './TextField.module.css';
import Icon from '../../Icon/Icon';
import { useSelector } from 'react-redux';
import { selectIsDarkTheme } from '../../../utils/selectors';

/**
 * TextField support text
 */
export default function SupportText({
    errorMessage, supportText, id, errorIcon,
}) {
    const darkTheme = useSelector(selectIsDarkTheme);

    if (errorMessage) {
        return <p className={errorIcon ? style.errorMessageWithIcon : style.errorMessage}>
            {errorIcon && <Icon name="error" label="Error" size={20} grad={50} isOnDark={darkTheme} className={style.errorMessageIcon}/>}
            <span id={id}>{errorMessage}</span>
        </p>;
    }

    if (supportText) {
        return <p className={style.supportText} id={id}>{supportText}</p>;
    }

    return;
}

SupportText.defaultProps = {
    errorMessage: undefined,
    supportText: undefined,
    errorIcon: false,
};

SupportText.propTypes = {
    errorMessage: PropTypes.string,
    supportText: PropTypes.string,
    id: PropTypes.string.isRequired,
    errorIcon: PropTypes.bool,
};