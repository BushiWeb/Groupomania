import { useSelector } from 'react-redux';
import AuthenticationForm from '../../features/authentication/AuthenticationForm';
import style from './Login.module.css';
import { selectIsAuthenticated } from '../../utils/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login() {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const redirect = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            return redirect('/');
        }
    }, [isAuthenticated, redirect]);

    return <div className={style.login}>
        <AuthenticationForm/>
    </div>;
}