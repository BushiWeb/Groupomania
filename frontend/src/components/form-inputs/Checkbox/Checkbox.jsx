import PropTypes from 'prop-types';
import style from './Checkbox.module.css';
import InteractiveElement from '../../InteractiveElement/InteractiveElement.jsx';
import Tooltip from '../../../features/tooltip/Tooltip.jsx';
import { useRef } from 'react';

/**
 * Checkbox, with or without label
 */
export default function Checkbox({
    checked, onChange, disabled, autoFocus, label, className, ...other
}) {
    const checkboxRef = useRef();

    function handleClickTarget(e) {
        checkboxRef.current.focus();
        checkboxRef.current.click();
    }

    function handleClickCheckbox(e) {
        e.stopPropagation();
    }

    const checkboxElt = <InteractiveElement
        rootElement="div"
        rippleDuration={disabled ? null : 350}
        stateLayerColor={checked ? 'primary' : 'on-surface'}
        className={`${style.checkboxContainer} ${!label ? className : ''}`}
        hover={!disabled}
        active={!disabled}
        focus={!disabled}
        onClick={!disabled ? handleClickTarget : undefined}
    >
        <input
            type="checkbox"
            className={style.checkbox}
            checked={checked}
            disabled={disabled}
            autoFocus={!disabled && autoFocus}
            onChange={onChange}
            onClick={handleClickCheckbox}
            aria-label={label}
            ref={checkboxRef}
            {...other}
        />
    </InteractiveElement>;

    if (label) {
        return <Tooltip label={label} className={className}>
            {checkboxElt}
        </Tooltip>;
    }

    return checkboxElt;
}

Checkbox.defaultProps = {
    checked: false,
    disabled: false,
    autoFocus: false,
    label: undefined,
    className: '',
};

Checkbox.propTypes = {
    /** Weither the checkbox is checked or not */
    checked: PropTypes.bool,

    /** Action to execute on click */
    onChange: PropTypes.func.isRequired,

    /** Weither the checkbox is disabled or not */
    disabled: PropTypes.bool,

    /** Weither the checkbox has focus or not */
    autoFocus: PropTypes.bool,

    /** Checkbox' label. Should be provided if no external label is present */
    label: PropTypes.string,

    /** Other classnames */
    className: PropTypes.string,
};