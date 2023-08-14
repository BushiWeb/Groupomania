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
        const queryClient = new QueryClient();

        return (
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <MemoryRouter initialEntries={initialEntries}>
                        <Routes>
                            <Route path='/' element={<UI/>}>
                                <Route index element={undefined} />
                                <Route path='reseau' element={undefined} />
                                <Route path='profil' element={undefined} />
                            </Route>
                            <Route path='/login' element={<Login/>} />
                            <Route path="/test" element={<Outlet/>}/>
                        </Routes>
                        <ShowLocation/>
                        {children}
                    </MemoryRouter>
                </Provider>
            </QueryClientProvider>
        );
    }

    return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) };
}