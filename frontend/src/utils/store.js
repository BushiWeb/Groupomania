import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/theme.slice.js';
import tooltipReducer from '../features/tooltip/tooltip.slice.js';

export default configureStore({
    reducer: {
        theme: themeReducer,
        tooltip: tooltipReducer,
    },
});