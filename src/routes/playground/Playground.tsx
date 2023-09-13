import React, {useEffect, useState} from 'react';
import '../../styles/Common.css'
import { Text } from '@chakra-ui/react'
import {ColorsThatWorkInGoogleCalendar, GoogleCalendar, SourceCalendar} from "../../components/GoogleCalendar";
import {getAllAnkiReviews} from "../../data/fetchers/clickhouse";
import {ReviewedCard} from "../../data/models/anki";
import {AbstractGraph} from "../../components/AbstractGraph";
import {type} from "os";



function Playground() {
    // todo query
    const [ankiReviews, setAnkiReviews] = useState<Record<string, number>>()
    useEffect(() => {
        getAllAnkiReviews().then(
            r => {
                const aggregated = r.reduce((res: any, reviewedCard: ReviewedCard) => {
                    const d = new Date(parseInt(reviewedCard.reviewTime as any as string, 10)).toDateString();
                    if (!res[d]) {
                        res[d] = 0;
                    }
                    res[d] += 1;
                    return res;
                }, {})
                setAnkiReviews(aggregated)
            }
        )
    }, []);
    console.log(`Anki reviews ${JSON.stringify(ankiReviews)}`);
    const mapHere: SourceCalendar[] = [{
        "id": "c2hlc3NtYXN0ZXIxMkBnbWFpbC5jb20",
        "color": ColorsThatWorkInGoogleCalendar.red,
    }, {
        "id": "MzlvdXZjMzVnb2d1cDA3ZWYydjNrZG90OHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
        "color": ColorsThatWorkInGoogleCalendar.green,
    }, {
        "id": "Yzh2amYzOTVwOXA5NGgzbGNuN2s4aDg2Zm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
        "color": ColorsThatWorkInGoogleCalendar.darkBlue,
    }, {
        "id": "ZDg3ODczOWE1YzI4MTYyMDA1MmQ3NzVlZmI0NzM5ZjllMjVhM2ViYTdmMWNjZmZmZjJjNTdlYWIxZWJiZDg1Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
        "color": ColorsThatWorkInGoogleCalendar.orange,
    }, {
        "id": "bm9vYmdhbS5kdW1teS5lbWFpbEBnbWFpbC5jb20",
        "color": ColorsThatWorkInGoogleCalendar.yellowIsh,
    }]
    return (
        <div className="Background">
            <div style={{flex: 1, flexDirection: "column"}}>
                <div style={{width: '800px', height: '800px'}}>
                    {ankiReviews && (<Text>Anki reviews should be there...</Text>)}
                    {ankiReviews && (<AbstractGraph data={[{
                        id: "test-serie",
                        data: Object.entries(ankiReviews).map(([date, num]) => {
                            return {
                                x: date,
                                y: num,
                            }
                        })
                    }]}/>)}
                </div>
                <div style={{flex: 1}}>
                    <Text align={'center'} color={"tomato"}>
                        What am I up to?
                    </Text>
                    <iframe
                        title="grafana-anki"
                        src="https://grafana.noobgam.com/d-solo/ce95cd2d-acf6-4682-a8a1-df42e8a73a76/noobgam-personal-dashboard?orgId=1&panelId=1"
                        width="450" height="200" frameBorder="0"
                    />
                </div>
                <div>
                    <Text align={'center'} color={"tomato"}>
                        My schedule
                    </Text>
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
