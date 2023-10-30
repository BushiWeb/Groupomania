import { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/authentication/user.slice.js';

/**
 * Handles request errors.
 * In case of a network error or server error, redirects to the error page with the right state.
 * In case of an unauthorised error, log the user out.
 * @param {boolean} isError
 * @param error
 * @return {number} Returns an error status
 */
export function useHandleRequestError(isError, error) {
    const redirect = useNavigate();
    const { dispatch } = useStore();
    const [errorStatus, setErrorStatus] = useState(undefined);

    useEffect(() => {
        if (!isError) {
            return;
        }

        // Handling network errors
        if (error instanceof TypeError) {
            redirect('/error', { state: { type: 'NetworkError' }});
            return;
        }

        if (!(error instanceof Response)) {
            return;
        }

        // Handling server errors
        if (error.status >= 500) {
            redirect('/error', { state: { status: error.status, type: 'ResponseError' }});
            return;
        }

        // Handling 404 error
        if (error.status === 404) {
            setErrorStatus(404);
            return;
        }

        // Handling authentication error
        if (error.status === 401) {
            dispatch(logout());
            return;
        }
    }, [error, isError, redirect, dispatch]);

    return errorStatus;
}