import { Outlet, useNavigate } from 'react-router-dom';
import MainHeader from '../../layouts/MainHeader/MainHeader';
import NavigationSection from '../../layouts/Navigation/NavigationSection';
import style from './UI.module.css';
import { useEffect, useId } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../utils/selectors';

/** Global UI, containing the main pages */
export default function UI() {
    const redirect = useNavigate();
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const mainId = useId();

    useEffect(() => {
        if (!isAuthenticated) {
            return redirect('/login');
        }
    }, [isAuthenticated, redirect]);

    const fab = {
        icon: 'favorite',
        label: 'favorite',
        onClick: () => console.log('coucou'),
    };

    return <div className={style.container}>
        {
            isAuthenticated &&
            <>
                <MainHeader mainContentId={mainId} className={style.header}/>
                <NavigationSection fab={fab} className={style.navigation}/>
                <Outlet context={{ id: mainId, className: style.main }}/>
            </>
        }
    </div>;
}