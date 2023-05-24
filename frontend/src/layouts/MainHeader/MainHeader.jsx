import style from './MainHeader.module.css';
import StandardIconButton from '../../components/icon-button/StandardIconButton/StandardIconButton.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import { useSelector, useStore } from 'react-redux';
import { selectTheme } from '../../utils/selectors.js';
import { THEMES_NAMES, themeToggle } from '../../features/theme/theme.slice';
import { useEffect } from 'react';
import HiddenNavigationLink from '../../components/HiddenNavigationLink/HiddenNavigationLink.jsx';
import PropTypes from 'prop-types';

/**
 * Main header off the application, used for the top level pages.
 */
export default function MainHeader({ mainContentId }) {
    const theme = useSelector(selectTheme);
    const { dispatch } = useStore();

    useEffect(() => {
        document.body.classList.forEach((value) => {
            if (THEMES_NAMES[value]) {
                document.body.classList.remove(value);
            }
        });
        document.body.classList.add(theme);
    }, [theme]);

    return <header className={style.header}>
        <HiddenNavigationLink label="Accéder directement au contenu" target={`#${mainContentId}`}/>
        <div className={style.logo}>
            <Logo label="Retourner à la page d'accueil" target="/"/>
        </div>
        <StandardIconButton icon={theme === THEMES_NAMES.dark ? 'light_mode' : 'dark_mode'} action={() => {
            dispatch(themeToggle());
        }} label={theme === THEMES_NAMES.dark ? 'Passer au mode clair' : 'Passer au mode sombre'} />
        <StandardIconButton icon="logout" action={() => {}} label="Se déconnecter" />
    </header>;
}

MainHeader.propTypes = {
    /** Id of the main content, to create a link to it */
    mainContentId: PropTypes.string.isRequired,
};