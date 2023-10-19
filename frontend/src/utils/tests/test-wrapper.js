import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import {
    MemoryRouter, Routes, Route, useLocation, Outlet,
} from 'react-router-dom';
import themeReducer from '../../features/theme/theme.slice.js';
import snackbarReducer from '../../features/snackbar/snackbar.slice.js';
import userReducer from '../../features/authentication/user.slice.js';
import { Provider } from 'react-redux';
import Login from '../../pages/Login/Login.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UI from '../../pages/UI/UI.jsx';
import Home from '../../pages/Home/Home.jsx';
import TooltipWrapper from '../../features/tooltip/TooltipWrapper.jsx';
import Network from '../../pages/Network/Network.jsx';
import ThemeSwitcher from '../../features/theme/ThemeSwitcher.jsx';
import ResponsiveRoutes from '../../routes.jsx';

export function render(ui, {
    preloadedState,
    store,
    renderOptions,
    initialEntries = ['/test'],
} = {}) {
    if (!store) {
        store = configureStore({
            reducer: {
                theme: themeReducer,
                snackbar: snackbarReducer,
                user: userReducer,
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
        const queryClient = new QueryClient({
            defaultOptions: {
                queries: {
                    retry: false,
                },
            },
            logger: {
                log: console.log,
                warn: console.warn,
                error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
            },
        });

        return (
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <TooltipWrapper>
                        <ThemeSwitcher>
                            <MemoryRouter initialEntries={initialEntries}>
                                <ResponsiveRoutes test/>
                                <ShowLocation/>
                                {children}
                            </MemoryRouter>
                        </ThemeSwitcher>
                    </TooltipWrapper>
                </Provider>
            </QueryClientProvider>
        );
    }

    return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) };
}