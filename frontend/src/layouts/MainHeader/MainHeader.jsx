import Logo from '../../components/Logo/Logo.jsx';
import { useSelector, useStore } from 'react-redux';
import { selectTheme } from '../../utils/selectors.js';
import { THEMES_NAMES, themeToggle } from '../../features/theme/theme.slice';
import PropTypes from 'prop-types';
import { useMutation } from '@tanstack/react-query';
import { simpleFetch } from '../../utils/fetch';
import { logout } from '../../features/authentication/user.slice';
import TopAppBar from '../../components/TopAppBar/TopAppBar';
import { useMainHeaderActions } from '../../hooks/useMainHeaderActions.js';

/**
 * Main header off the application, used for the top level pages.
 */
export default function MainHeader({ mainContentId, ...props }) {
    const actions = useMainHeaderActions();

    return <TopAppBar
        hiddenLinkTargetId={mainContentId}
        actions={actions}
        className={props.className || ''}
    >
        <Logo label="Retourner à la page d'accueil" target="/"/>
    </TopAppBar>;
}

MainHeader.propTypes = {
    /** Id of the main content, to create a link to it */
    mainContentId: PropTypes.string.isRequired,
};