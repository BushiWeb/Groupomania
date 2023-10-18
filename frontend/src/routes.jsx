import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import UI from './pages/UI/UI.jsx';
import Home from './pages/Home/Home.jsx';
import Network from './pages/Network/Network.jsx';
import User from './pages/User/User.jsx';
import EmptyUser from './pages/User/EmptyUser.jsx';
import { useBreakpoint } from './hooks/useBreakpoints.js';

/**
 * Adds responsive routing.
 * Depending on the size of the viewport, routes may be nested differently
 */
export default function ResponsiveRoutes() {
    const breakpoint = useBreakpoint();

    return <Routes>
        <Route path='/' element={<UI/>}>
            <Route index element={<Home/>} />
            <Route path='reseau' element={<Network/>}>
                <Route index element={<EmptyUser/>}/>
                {breakpoint === 3 && <Route path=':userId' element={<User/>}/>}
            </Route>
            {(breakpoint === 2 || breakpoint === 1) && <Route path='reseau/:userId' element={<User/>}/>}
            <Route path='profil' element={undefined} />
        </Route>
        {breakpoint === 0 && <Route path='/reseau/:userId' element={<User/>}/>}
        <Route path='/login' element={<Login/>} />
    </Routes>;
}
