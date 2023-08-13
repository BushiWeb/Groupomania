import { useBreakpoint } from '../../hooks/useBreakpoints';
import Navigation from './Navigation/Navigation';
import style from './NavigationSection.module.css';
import PropTypes from 'prop-types';
import FAB from '../../components/buttons/FAB/FAB';

export default function NavigationSection({ fab }) {
    const breakpoint = useBreakpoint();
    const links = [
        {
            label: 'Accueil',
            target: '/',
            icon: 'home',
        },
        {
            label: 'Réseau',
            target: '/reseau',
            icon: 'groups',
        },
        {
            label: 'Profil',
            target: '/profil',
            icon: 'account_circle',
        },
    ];

    let component;

    if (breakpoint >= 3) {
        component = <Navigation links={links} type="drawer"/>;
    } else if (breakpoint >= 1) {
        component = <Navigation links={links} type="rail"/>;
    } else {
        component = <Navigation links={links} type="bar"/>;
    }

    let fabChildren;
    let fabProps;
    if (fab) {
        fabChildren = breakpoint >= 3 ? fab.value || fab.label : undefined;
        fabProps = { ...fab, low: breakpoint >= 1 };
        delete fabProps.value;
    }

    return <div className={style.container}>
        {component}
        {fab && <FAB {...fabProps} className={style.fab}>{fabChildren}</FAB>}
    </div>;
}

NavigationSection.propTypes = {
    // fab props, if undefined, no fab is displayed
    fab: PropTypes.exact({
        onClick: PropTypes.func,
        label: PropTypes.string,
        icon: PropTypes.string,
        value: PropTypes.string,
    }),
};