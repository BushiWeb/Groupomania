import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import {
    MemoryRouter, Routes, Route, useLocation,
} from 'react-router-dom';
import themeReducer from '../../features/theme/theme.slice.js';
import tooltipReducer from '../../features/tooltip/tooltip.slice.js';
import snackbarReducer from '../../features/snackbar/snackbar.slice.js';
import { Provider } from 'react-redux';

export function render(ui, {
    preloadedState,
    store,
    renderOptions,
} = {}) {
    if (!store) {
        store = configureStore({
            reducer: {
                theme: themeReducer,
                tooltip: tooltipReducer,
                snackbar: snackbarReducer,
            },
            ...preloadedState && { preloadedState },
        });
    }

    function ShowLocation() {
        const location = useLocation();
        return (
            <>
                <pre data-testid="search-param">{location.search}</pre>
            </>
        );
    }

    function Wrapper({ children }) {
        return (
            <Provider store={store}>
                <MemoryRouter>
                    <Routes>
                        <Route path="/test" element={<ShowLocation/>}/>
                    </Routes>
                    {children}
                </MemoryRouter>
            </Provider>
        );
    }

    return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) };
}