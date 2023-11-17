import { useSelector, useStore } from 'react-redux';
import { selectIsAuthenticated } from '../../utils/selectors.js';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { simpleFetch } from '../../utils/fetch.js';
import { useEffect } from 'react';
import { login } from '../../features/authentication/user.slice.js';

/**
 * Hook rederecting the user to the main page if already authenticated, and trying to log the user in if not.
 * @param {string} target - Redirection target
 * @returns {boolean} Returns weither the login succedeed or not
 */
export function useAutoLogin(target) {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const redirect = useNavigate();
    const store = useStore();

    const { mutate: loginMutate, isError: loginError } = useMutation({
        mutationFn: async () => {
            return simpleFetch({
                url: '/data/login',
                method: 'POST',
            });
        },
        onSuccess: (data) => {
            store.dispatch(login(data));
        },
    });

    useEffect(() => {
        if (isAuthenticated) {
            return redirect(target);
        }

        loginMutate();
    }, [isAuthenticated, redirect, loginMutate, target]);

    return loginError;
}
