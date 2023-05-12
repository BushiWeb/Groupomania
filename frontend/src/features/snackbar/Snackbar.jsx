import style from './Snackbar.module.css';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useStore } from 'react-redux';
import { selectNextSnackbarMessage } from '../../utils/selectors';
import { snackbarShiftMessage } from './snackbar.slice';

/**
 * Tooltip. Should be used to displaythe meaning of interactive elements with no visible label.
 * Useful only for sighted users, as all interactive elements must have an accessible label.
 * As such, it is hidden from the accessible content to avoid duplication for user using screen readers.
 */
export default function Snackbar() {
    const message = useSelector(selectNextSnackbarMessage);
    const [isVisible, setVisible] = useState(false);
    const { dispatch } = useStore();
    const hideTimeoutId = useRef(null);
    const showTimeoutId = useRef(null);
    const displayDuration = 5000;

    useEffect(() => {
        clearTimeout(hideTimeoutId.current);
        hideTimeoutId.current = null;
        setVisible(false);

        if (message === null) {
            return;
        }

        showTimeoutId.current = setTimeout(() => {
            setVisible(true);

            setTimeout(() => {
                setVisible(false);
                dispatch(snackbarShiftMessage());
            }, displayDuration);
        }, 200);

        return () => {
            clearTimeout(showTimeoutId);
            clearTimeout(hideTimeoutId);
        };
    }, [message, dispatch]);

    if (!isVisible) {
        return;
    }

    return <div
        className={style.snackbar}
        role='alert'
    >{message}</div>;
}