import { useSelector, useStore } from 'react-redux';
import { selectIsAuthenticated } from '../../utils/selectors.js';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { simpleFetch } from '../../utils/fetch.js';
import { handleCSRFToken } from '../../utils/antiCSRFToken.js';
import { useEffect } from 'react';
import { login } from '../../features/authentication/user.slice.js';

/**
 * Hook rederecting the user to the main page if already authenticated, and trying to log the user in if not.
 * @returns {boolean} Returns weither the login succedeed or not
 */
export function useAutoLogin() {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const redirect = useNavigate();
    const store = useStore();

    const {
        mutate: loginMutate, isError: loginError,
    } = useMutation({
        mutationFn: async () => {
            return simpleFetch({
                url: '/data/login',
                method: 'POST',
            });
        },
        onSuccess: async (data) => {
            const userData = await data.json();
            store.dispatch(login(userData));
        },
        onSettled: handleCSRFToken,
    });

    useEffect(() => {
        if (isAuthenticated) {
            return redirect('/');
        }

        loginMutate();

    }, [isAuthenticated, redirect, loginMutate]);

    return loginError;
}