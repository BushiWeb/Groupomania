import { useLocation } from 'react-router-dom';
import { useBreakpoint } from '../../hooks/useBreakpoints';
import NavigationList from './NavigationList/NavigationList';

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
        component = <NavigationList links={links} type="drawer"/>;
    } else if (breakpoint >= 1) {
        component = <NavigationList links={links} type="rail"/>;
    } else {
        component = <NavigationList links={links} type="bar"/>;
    }

    return <nav>
        {component}
    </nav>;
}