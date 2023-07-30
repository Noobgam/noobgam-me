import React from 'react';
import './App.css';
import {ChakraProvider} from "@chakra-ui/react"

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <header className="App-header">
                    <span
                        className="App-link"
                        rel="noopener noreferrer"
                    >
                        What am I up to?
                    </span>
                    <iframe
                        src="https://grafana.noobgam.com/d-solo/ce95cd2d-acf6-4682-a8a1-df42e8a73a76/noobgam-personal-dashboard?orgId=1&from=1690701118837&to=1690722718837&theme=dark&panelId=1"
                        width="450" height="200" frameBorder="0"/>
                </header>
            </div>
        </ChakraProvider>
    );
}

export default App;
