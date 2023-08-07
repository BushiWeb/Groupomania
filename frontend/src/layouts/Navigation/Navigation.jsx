import { useLocation } from 'react-router-dom';
import NavigationBar from './NavigationBar';

export default function Navigation() {
    const { pathname } = useLocation();
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

    return <nav>
        <NavigationBar links={links}/>
    </nav>;
}