import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/theme.slice.js';
import snackbarReducer from '../features/snackbar/snackbar.slice.js';
import userReducer from '../features/authentication/user.slice.js';
import navigationInfoReducer from '../features/navigationInfo/navigationInfo.slice.js';

export default configureStore({
    reducer: {
        theme: themeReducer,
        snackbar: snackbarReducer,
        user: userReducer,
        navigationInfo: navigationInfoReducer,
    },
});
