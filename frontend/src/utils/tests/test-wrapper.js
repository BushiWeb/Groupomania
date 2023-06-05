import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import {
    MemoryRouter, Routes, Route, useLocation, Outlet,
} from 'react-router-dom';
import themeReducer from '../../features/theme/theme.slice.js';
import snackbarReducer from '../../features/snackbar/snackbar.slice.js';
import { Provider } from 'react-redux';

export function render(ui, {
    preloadedState,
    store,
    renderOptions,
    initialEntries = ['/'],
} = {}) {
    if (!store) {
        store = configureStore({
            reducer: {
                theme: themeReducer,
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
                <pre data-testid="search-anchor">{location.hash}</pre>
                <pre data-testid="search-path">{location.pathname}</pre>
            </>
        );
    }

    function Wrapper({ children }) {
        return (
            <Provider store={store}>
                <MemoryRouter initialEntries={initialEntries}>
                    <Routes>
                        <Route path="/" element={<Outlet/>}/>
                        <Route path="/test" element={<Outlet/>}/>
                    </Routes>
                    <ShowLocation/>
                    {children}
                </MemoryRouter>
            </Provider>
        );
    }

    return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) };
}