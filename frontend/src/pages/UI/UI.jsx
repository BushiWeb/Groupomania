import { Outlet } from 'react-router-dom';
import MainHeader from '../../layouts/MainHeader/MainHeader';
import NavigationSection from '../../layouts/Navigation/NavigationSection';
import style from './UI.module.css';
import { useId, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../utils/selectors';
import { fabContext } from '../../context/fabContext';

/** Global UI, containing the main pages */
export default function UI() {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const mainId = useId();
    const [fab, setFab] = useState(undefined);

    return <fabContext.Provider value={{ fab, setFab }}>
        <div className={style.container}>
            {
                isAuthenticated &&
            <>
                <MainHeader mainContentId={mainId} className={style.header}/>
                <NavigationSection fab={fab} className={style.navigation}/>
                <Outlet context={{ id: mainId, className: style.main }}/>
            </>
            }
        </div>
    </fabContext.Provider>;
}