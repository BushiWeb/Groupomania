import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store.js';
import Login from './pages/Login/Login.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import UI from './pages/UI/UI.jsx';
import Home from './pages/Home/Home.jsx';
import TooltipWrapper from './features/tooltip/TooltipWrapper.jsx';
import Network from './pages/Network/Network.jsx';
//import reportWebVitals from './utils/reportWebVitals.js';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <React.StrictMode>
                <TooltipWrapper>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<UI/>}>
                                <Route index element={<Home/>} />
                                <Route path='reseau' element={<Network/>} />
                                <Route path='profil' element={undefined} />
                            </Route>
                            <Route path='/login' element={<Login/>} />
                        </Routes>
                    </BrowserRouter>
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
