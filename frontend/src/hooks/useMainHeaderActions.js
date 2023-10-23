import { useSelector, useStore } from 'react-redux';
import { selectTheme } from '../utils/selectors.js';
import { useMutation } from '@tanstack/react-query';
import { simpleFetch } from '../utils/fetch.js';
import { logout } from '../features/authentication/user.slice.js';
import { THEMES_NAMES, themeToggle } from '../features/theme/theme.slice.js';

/**
 * Returns the actions needed in the main page header.
 * @returns {Array}
 */
export function useMainHeaderActions() {
    const theme = useSelector(selectTheme);
    const { dispatch } = useStore();
    const { mutate } = useMutation({
        mutationFn: async () => {
            return simpleFetch({
                url: '/data/logout',
                method: 'POST',
            });
        },
        onSettled: () => {
            dispatch(logout());
        },
    });

    function handleLogoutClick(e) {
        mutate();
    }

    function handleThemeClick(e) {
        dispatch(themeToggle());
    }

    return [
        {
            label: theme === THEMES_NAMES.dark ? 'Passer au mode clair' : 'Passer au mode sombre',
            onClick: handleThemeClick,
            icon: theme === THEMES_NAMES.dark ? 'light_mode' : 'dark_mode',
        },
        {
            label: 'Se déconnecter',
            onClick: handleLogoutClick,
            icon: 'logout',
        },
    ];
}