import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/theme.slice.js';
import snackbarReducer from '../features/snackbar/snackbar.slice.js';

export default configureStore({
    reducer: {
        theme: themeReducer,
        snackbar: snackbarReducer,
    },
});