import { useSelector } from 'react-redux';
import { selectTheme } from '../../utils/selectors.js';
import { LOCAL_STORAGE_KEY, THEMES_NAMES } from './theme.slice';
import { useEffect } from 'react';

/**
 * Reacts to theme changes in the global state and changes the theme of the page
 */
export default function ThemeSwitcher({ children }) {
    const theme = useSelector(selectTheme);

    useEffect(() => {
        document.body.classList.forEach((value) => {
            if (THEMES_NAMES[value]) {
                document.body.classList.remove(value);
            }
        });
        document.body.classList.add(theme);
        localStorage.setItem(LOCAL_STORAGE_KEY, theme);
    }, [theme]);

    return children;
}
