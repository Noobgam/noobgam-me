import React from 'react';
import '../../styles/Common.css'
import { Text } from '@chakra-ui/react'
import {ColorsThatWorkInGoogleCalendar, GoogleCalendar, SourceCalendar} from "../../components/GoogleCalendar";



function Playground() {
    const mapHere: SourceCalendar[] = [{
        "id": "c2hlc3NtYXN0ZXIxMkBnbWFpbC5jb20",
        "color": ColorsThatWorkInGoogleCalendar.red,
    }, {
        "id": "ZjMxMTY1MzY4NTg0YjFkNTVlNjJjNGU2OWVmM2M5OGUzZmY1YTdjZTdkM2I0MmUyMWI4MWYwZjNhYWIxOWYyYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
        "color": ColorsThatWorkInGoogleCalendar.orange,
    }, {
        "id": "MzlvdXZjMzVnb2d1cDA3ZWYydjNrZG90OHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
        "color": ColorsThatWorkInGoogleCalendar.green,
    }, {
        "id": "Yzh2amYzOTVwOXA5NGgzbGNuN2s4aDg2Zm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
        "color": ColorsThatWorkInGoogleCalendar.darkBlue,
    }, {
        "id": "Ymh1ajhuYzd2ZGEzMDI3dGg5MHZjbWdqaG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
        "color": ColorsThatWorkInGoogleCalendar.orange,
    }, {
        "id": "bm9vYmdhbS5kdW1teS5lbWFpbEBnbWFpbC5jb20",
        "color": ColorsThatWorkInGoogleCalendar.yellowIsh,
    }]
    return (
        <div className="Background">
            <div style={{flex: 1, flexDirection: "column"}}>
                <div style={{flex: 1}}>
                    <Text color={"tomato"}>
                        What am I up to?
                    </Text>
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
                    <GoogleCalendar
                        height={600}
                        bgColor={"#aaaaaa"}
                        src={mapHere}
                    />
                </div>
            </div>
        </div>
    );
}

export default Playground;
