import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/theme.slice.js';

export default configureStore({
    reducer: {
        theme: themeReducer,
    },
});