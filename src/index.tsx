import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "./components/ui/provider"
import {Header} from "./components/Header";
import {BrowserRouter} from 'react-router-dom';
import {Router} from "./routes/Router";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider>
            <BrowserRouter>
                <Header/>
                <Router/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
