import { useSelector, useStore } from 'react-redux';
import AuthenticationForm from '../../features/authentication/AuthenticationForm';
import style from './Login.module.css';
import { selectIsAuthenticated } from '../../utils/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { simpleFetch } from '../../utils/fetch';
import { handleCSRFToken } from '../../utils/antiCSRFToken';
import { login } from '../../features/authentication/user.slice';
import ProgressIndicator from '../../components/ProgressIndicator/ProgressIndicator';

export default function Login() {
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

    let content;

    if (loginError) {
        content = <AuthenticationForm/>;

    } else {
        content = <ProgressIndicator circular label="Requête de connexion en attente en attente" />;
    }

    return <div className={style.login}>
        {content}
    </div>;
}