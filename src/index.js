import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import App from './app/App';
import { StoreProvider } from './app/providers/store/store';
import { AppRouter } from './app/providers/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StoreProvider>
            <AppRouter>
                <App />
            </AppRouter>
        </StoreProvider>
    </React.StrictMode>,
);
