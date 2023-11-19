import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import themeReducer from '../../features/theme/theme.slice.js';
import snackbarReducer from '../../features/snackbar/snackbar.slice.js';
import userReducer from '../../features/authentication/user.slice.js';
import navigationReducer from '../../features/navigationInfo/navigationInfo.slice.js';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TooltipWrapper from '../../features/tooltip/TooltipWrapper.jsx';
import ThemeSwitcher from '../../features/theme/ThemeSwitcher.jsx';
import ResponsiveRoutes from '../../routes.jsx';
import BreakpointContext from '../../context/BreakpointContext.js';

export function render(
    ui,
    { preloadedState, store, renderOptions, initialEntries = ['/test'] } = {},
) {
    if (!store) {
        store = configureStore({
            reducer: {
                theme: themeReducer,
                snackbar: snackbarReducer,
                user: userReducer,
                navigationInfo: navigationReducer,
            },
            ...(preloadedState && { preloadedState }),
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
                error:
                    process.env.NODE_ENV === 'test' ? () => {} : console.error,
            },
        });

        return (
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <TooltipWrapper>
                        <ThemeSwitcher>
                            <BreakpointContext>
                                <MemoryRouter initialEntries={initialEntries}>
                                    <ResponsiveRoutes test />
                                    <ShowLocation />
                                    {children}
                                </MemoryRouter>
                            </BreakpointContext>
                        </ThemeSwitcher>
                    </TooltipWrapper>
                </Provider>
            </QueryClientProvider>
        );
    }

    return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) };
}
