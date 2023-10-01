import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ChakraProvider} from "@chakra-ui/react";
import {Header} from "./components/Header";
import {BrowserRouter} from 'react-router-dom';
import {Router} from "./routes/Router";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ChakraProvider>
            <BrowserRouter>
                <Header/>
                <Router/>
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
);
