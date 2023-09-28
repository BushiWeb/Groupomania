import PropTypes from 'prop-types';
import style from './supportText.module.css';
import Icon from '../../Icon/Icon';
import { useSelector } from 'react-redux';
import { selectIsDarkTheme } from '../../../utils/selectors';

/**
 * Support text form form inputs
 */
export default function SupportText({
    errorMessage,
    supportText,
    id,
    errorIcon,
    required,
    disabled,
    className,
}) {
    const darkTheme = useSelector(selectIsDarkTheme);
    const dataProps = {
        ...disabled && { 'data-disabled': 'true' },
        ...errorMessage && { 'data-error': 'true' },
    };
    const computedClassName = `${style.supportText} ${className}`;

    if (required) {
        supportText = `*requis${supportText ? `, ${supportText}` : ''}`;
    }

    if (errorMessage) {
        return <p className={computedClassName} {...dataProps}>
            {errorIcon && <Icon name="error" label="Error" size={20} grad={50} isOnDark={darkTheme} className={style.supportTextIcon}/>}
            <span id={id}>{errorMessage}</span>
        </p>;
    }

    if (supportText) {
        return <p className={computedClassName} id={id} {...dataProps}>{supportText}</p>;
    }

    return;
}

SupportText.defaultProps = {
    errorMessage: undefined,
    supportText: undefined,
    errorIcon: false,
    required: false,
    disabled: false,
    className: '',
};

SupportText.propTypes = {
    /* Error message to display */
    errorMessage: PropTypes.string,

    /* Support text to display */
    supportText: PropTypes.string,

    /* Id for the support text element, to link to the input, required */
    id: PropTypes.string.isRequired,

    /* Weither to show the error icon when an error message is displayed, defaults to false */
    errorIcon: PropTypes.bool,

    /* Weither the input is required or not, defaults to false */
    required: PropTypes.bool,

    /* Weither the input is disabled or not, defaults to falsen */
    disabled: PropTypes.bool,

    /* Additional class names */
    className: PropTypes.string,
};