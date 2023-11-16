import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.module.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TooltipWrapper from './features/tooltip/TooltipWrapper.jsx';
import ResponsiveRoutes from './routes.jsx';
import ThemeSwitcher from './features/theme/ThemeSwitcher.jsx';
import BreakpointContext from './context/BreakpointContext.js';
//import reportWebVitals from './utils/reportWebVitals.js';

const queryClientLoggerOptions = process.env.NODE_ENV === 'production' ?
    {
        log: (...args) => {},
        warn: (...args) => {},
        error: (...args) => {},
    } :
    {
        log: (...args) => console.log(...args),
        warn: (...args) => console.warn(...args),
        error: (...args) => console.error(...args),
    };

const queryClient = new QueryClient({
    logger: queryClientLoggerOptions,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <React.StrictMode>
                <TooltipWrapper>
                    <ThemeSwitcher>
                        <BreakpointContext>
                            <BrowserRouter>
                                <ResponsiveRoutes/>
                            </BrowserRouter>
                        </BreakpointContext>
                    </ThemeSwitcher>
                </TooltipWrapper>
            </React.StrictMode>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
