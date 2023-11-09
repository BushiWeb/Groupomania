import { createSelector } from '@reduxjs/toolkit';
import { THEMES_NAMES } from '../features/theme/theme.slice.js';
import { isAdmin } from './roles.js';

export const selectTheme = (state) => state.theme;

export const selectIsDarkTheme = createSelector(
    selectTheme,
    theme => [THEMES_NAMES.dark].includes(theme)
);

export const selectNextSnackbarMessage = (state) => state.snackbar.messages[0] || null;

export const selectIsAuthenticated = (state) => !!state.user.email;

export const selectIsAdmin = (state) => isAdmin(state.user?.role?.roleId);

export const selectUserId = (state) => state.user.userId;

export const selectRighInfos = createSelector(
    selectIsAdmin,
    selectUserId,
    (isAdmin, userId) => ({ isAdmin, userId })
);

export const selectUser = (state) => state.user;

export const selectPreviousLocation = (state) => state.navigationInfo.prevLocation;

export const selectPreviousState = (state) => state.navigationInfo.prevState;

export const selectKey = (state) => state.navigationInfo.locationKey;

export const selectPreviousNavigation = createSelector(
    selectPreviousLocation,
    selectPreviousState,
    selectKey,
    (prevLocation, prevState, key) => ({ prevLocation, prevState, key })
);

export const selectLocation = (state) => state.navigationInfo.location;

export const selectState = (state) => state.navigationInfo.state;

export const selectNavigation = createSelector(
    selectLocation,
    selectState,
    (location, state) => ({ location, state })
);