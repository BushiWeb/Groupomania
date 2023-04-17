import { createSlice } from '@reduxjs/toolkit';

export const THEMES_NAMES = {
    light: 'light',
    dark: 'dark',
};

const { actions, reducer } = createSlice({
    name: 'theme',
    initialState: THEMES_NAMES.light,
    reducers: {
        set: (state, action) => action.payload,
        reset: () => THEMES_NAMES.light,
        toggle: (state) => state === THEMES_NAMES.light ? THEMES_NAMES.dark : THEMES_NAMES.light,
    },
});

export const { set: themeSet, reset: themeReset, toggle: themeToggle } = actions;
export default reducer;