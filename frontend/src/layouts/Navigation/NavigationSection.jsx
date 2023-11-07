import { useBreakpoint } from '../../hooks/useBreakpoints';
import Navigation from './Navigation/Navigation';
import style from './NavigationSection.module.css';
import PropTypes from 'prop-types';
import FAB from '../../components/buttons/FAB/FAB';
import { BP_ID } from '../../context/BreakpointContext';

export default function NavigationSection({ fab, ...props }) {
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

    let type;

    if (breakpoint >= BP_ID.extraLarge) {
        type = 'drawer';
    } else if (breakpoint >= BP_ID.medium) {
        type = 'rail';
    } else {
        type = 'bar';
    }

    let fabChildren;
    let fabProps;
    if (fab) {
        fabChildren = breakpoint >= 3 ? fab.value || fab.label : undefined;
        fabProps = { ...fab, low: breakpoint >= 1 };
        delete fabProps.value;
    }

    const className = `${style.container} ${props.className || ''}`;

    return <div className={className}>
        <Navigation links={links} type={type} className={style.navigation}/>
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