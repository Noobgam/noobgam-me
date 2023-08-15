import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ChakraProvider} from "@chakra-ui/react";
import {Header} from "./components/Header";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./routes/root/Home";
import Playground from "./routes/playground/Playground";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ChakraProvider>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="playground" element={<Playground/>} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
);
