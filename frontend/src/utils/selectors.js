import { createSelector } from '@reduxjs/toolkit';
import { THEMES_NAMES } from '../features/theme/theme.slice.js';

export const selectTheme = (state) => state.theme;

export const selectIsDarkTheme = createSelector(
    selectTheme,
    theme => [THEMES_NAMES.dark].includes(theme)
);