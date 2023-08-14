import style from './MainHeader.module.css';
import StandardIconButton from '../../components/icon-button/StandardIconButton/StandardIconButton.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import { useSelector, useStore } from 'react-redux';
import { selectTheme } from '../../utils/selectors.js';
import { THEMES_NAMES, themeToggle } from '../../features/theme/theme.slice';
import { useEffect } from 'react';
import HiddenNavigationLink from '../../components/HiddenNavigationLink/HiddenNavigationLink.jsx';
import PropTypes from 'prop-types';
import { useMutation } from '@tanstack/react-query';
import { simpleFetch } from '../../utils/fetch';
import { handleCSRFToken } from '../../utils/antiCSRFToken';
import { logout } from '../../features/authentication/user.slice';

/**
 * Main header off the application, used for the top level pages.
 */
export default function MainHeader({ mainContentId, ...props }) {
    const theme = useSelector(selectTheme);
    const { dispatch } = useStore();
    const { mutate } = useMutation({
        mutationFn: async () => {
            return simpleFetch({
                url: '/data/logout',
                method: 'POST',
            });
        },
        onSettled: async (data, error) => {
            handleCSRFToken(data, error);
            dispatch(logout());
        },
    });

    function handleLogoutClick(e) {
        mutate();
    }

    useEffect(() => {
        document.body.classList.forEach((value) => {
            if (THEMES_NAMES[value]) {
                document.body.classList.remove(value);
            }
        });
        document.body.classList.add(theme);
    }, [theme]);

    const className = `${style.header} ${props.className || ''}`;

    return <header className={className}>
        <HiddenNavigationLink target={`#${mainContentId}`}>Accéder directement au contenu</HiddenNavigationLink>

        <div className={style.logo}>
            <Logo label="Retourner à la page d'accueil" target="/"/>
        </div>

        <StandardIconButton name={theme === THEMES_NAMES.dark ? 'light_mode' : 'dark_mode'} onClick={() => {
            dispatch(themeToggle());
        }} label={theme === THEMES_NAMES.dark ? 'Passer au mode clair' : 'Passer au mode sombre'} />

        <StandardIconButton name="logout" onClick={handleLogoutClick} label="Se déconnecter" />
    </header>;
}

MainHeader.propTypes = {
    /** Id of the main content, to create a link to it */
    mainContentId: PropTypes.string.isRequired,
};