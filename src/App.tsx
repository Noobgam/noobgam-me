import React from 'react';
import './App.css';
import {ChakraProvider} from "@chakra-ui/react"

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <header className="App-header">
                    <div style={{flex: 1, flexDirection: "column"}}>
                        <div style={{flex: 1}}>
                            <span
                                className="App-link"
                                rel="noopener noreferrer"
                            >
                                What am I up to?
                            </span>
                            <iframe
                                title="grafana-anki"
                                src="https://grafana.noobgam.com/d-solo/ce95cd2d-acf6-4682-a8a1-df42e8a73a76/noobgam-personal-dashboard?orgId=1&panelId=1"
                                width="450" height="200" frameBorder="0"
                            />
                        </div>
                        <div>
                            <span>
                                My schedule
                            </span>
                            <iframe
                                title="personal-calendar"
                                src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FBerlin&mode=WEEK&showPrint=0&showCalendars=0&showNav=1&showTitle=0&src=c2hlc3NtYXN0ZXIxMkBnbWFpbC5jb20&src=ZjMxMTY1MzY4NTg0YjFkNTVlNjJjNGU2OWVmM2M5OGUzZmY1YTdjZTdkM2I0MmUyMWI4MWYwZjNhYWIxOWYyYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MzlvdXZjMzVnb2d1cDA3ZWYydjNrZG90OHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Yzh2amYzOTVwOXA5NGgzbGNuN2s4aDg2Zm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Ymh1ajhuYzd2ZGEzMDI3dGg5MHZjbWdqaG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bm9vYmdhbS5kdW1teS5lbWFpbEBnbWFpbC5jb20&color=%234285F4&color=%23D50000&color=%230B8043&color=%23D81B60&color=%23E4C441&color=%23009688"
                                style={{border: "solid 1px #777"}} width="800" height="600" frameBorder="0" scrolling="no"
                            />
                        </div>
                    </div>
                </header>
            </div>
        </ChakraProvider>
    );
}

export default App;
