import PropTypes from 'prop-types';
import style from './TextField.module.css';
import Icon from '../../Icon/Icon.jsx';
import StandardIconButton from '../../icon-button/StandardIconButton/StandardIconButton.jsx';

/**
 * Text field component.
 */
export default function TextField({
    label, value, trailingIcon, trailingIconAction, supportText, inputType, disabled,
}) {
    return <div className={style.textField}>
        <label htmlFor="">{label}</label>
        <div>
            <input type={inputType} id="" value={value} disabled={disabled} />
            <StandardIconButton icon={trailingIcon} action={trailingIconAction}/>
        </div>
    </div>;
}

TextField.defaultProps = {
    value: undefined,
    trailingIcon: undefined,
    trailingIconAction: undefined,
    supportText: '',
    inputType: 'text',
    disabled: false,
};

TextField.propTypes = {
    /** Label of the checkbox */
    label: PropTypes.string.isRequired,

    /** Initial value of the text field */
    value: PropTypes.any,

    /** Trailing icon name. If no name is given, no icon will be present */
    trailingIcon: PropTypes.string,

    /** Action to execute when clicking on the trailing icon. If no action is given, the icon is not clickable */
    trailingIconAction: PropTypes.func,

    /** Text to display underneath the text field */
    supportText: PropTypes.func,

    /** Type of the input. Can be text (default), email, password, tel or url */
    inputType: PropTypes.oneOf(['text', 'email', 'password', 'tel', 'url']),

    /** Weither the element is disabled or not */
    disabled: PropTypes.bool,
};