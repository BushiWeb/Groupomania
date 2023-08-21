import { Outlet, useNavigate } from 'react-router-dom';
import MainHeader from '../../layouts/MainHeader/MainHeader';
import NavigationSection from '../../layouts/Navigation/NavigationSection';
import style from './UI.module.css';
import { useEffect, useId } from 'react';
import { useSelector, useStore } from 'react-redux';
import { selectIsAuthenticated } from '../../utils/selectors';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import createErrorFallback from './ErrorFallback';
import { logout } from '../../features/authentication/user.slice';

/** Global UI, containing the main pages */
export default function UI() {
    const redirect = useNavigate();
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const mainId = useId();
    const { dispatch } = useStore();

    useEffect(() => {
        if (!isAuthenticated) {
            redirect('/login');
        }
    }, [isAuthenticated, redirect]);

    function handleError(error, info) {
        if (!(error instanceof Response)) {
            return;
        }

        if (error.status >= 500) {
            redirect('/error', { state: { status: error.status }});
        }

        if (error.status === 401) {
            dispatch(logout());
            redirect('/login');
        }
    }


    const fab = {
        icon: 'favorite',
        label: 'favorite',
        onClick: () => console.log('coucou'),
    };

    return <div className={style.container}>
        <MainHeader mainContentId={mainId} className={style.header}/>
        <NavigationSection fab={fab} className={style.navigation}/>
        <ErrorBoundary onError={handleError} fallback={createErrorFallback(style.main)}>
            <Outlet context={{ id: mainId, className: style.main }}/>
        </ErrorBoundary>
    </div>;
}