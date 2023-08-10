import { useLocation } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import NavigationRail from './NavigationRail/NavigationRail';
import { useBreakpoint } from '../../hooks/useBreakpoints';
import NavigationDrawer from './NavigationDrawer/NavigationDrawer';

export default function Navigation() {
    const { pathname } = useLocation();
    const breakpoint = useBreakpoint();
    const links = [
        {
            label: 'Accueil',
            target: '/',
            icon: 'home',
            active: pathname === '/',
        },
        {
            label: 'Réseau',
            target: '/reseau',
            icon: 'groups',
            active: pathname === '/reseau',
        },
        {
            label: 'Profil',
            target: '/profil',
            icon: 'account_circle',
            active: pathname === '/profil',
        },
    ];

    let component;

    if (breakpoint >= 3) {
        component = <NavigationDrawer links={links}/>;
    } else if (breakpoint >= 1) {
        component = <NavigationRail links={links}/>;
    } else {
        component = <NavigationBar links={links}/>;
    }

    return <nav>
        {component}
    </nav>;
}