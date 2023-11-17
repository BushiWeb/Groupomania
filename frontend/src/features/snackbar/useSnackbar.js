import { useStore } from 'react-redux';
import { snackbarPushMessage } from './snackbar.slice.js';

export function useSnackbar() {
    const { dispatch } = useStore();

    /**
     * Dispatch the action to push a message to the snackbar queue.
     * @param {string} message - Message to display
     */
    const displaySnackbar = (message) => {
        dispatch(snackbarPushMessage(message));
    };

    return displaySnackbar;
}
