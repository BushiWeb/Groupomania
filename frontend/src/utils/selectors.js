import { createSelector } from '@reduxjs/toolkit';
import { THEMES_NAMES } from '../features/theme/theme.slice.js';

export const selectTheme = (state) => state.theme;

export const selectIsDarkTheme = createSelector(
    selectTheme,
    theme => [THEMES_NAMES.dark].includes(theme)
);

export const selectNextSnackbarMessage = (state) => state.snackbar.messages[0] || null;

export const selectIsAuthenticated = (state) => !!state.user.email;

export const selectIsAdmin = (state) => state.user?.role?.roleId === 1;

export const selectUserId = (state) => state.user.userId;

export const selectRighInfos = createSelector(
    selectIsAdmin,
    selectUserId,
    (isAdmin, userId) => ({ isAdmin, userId })
);