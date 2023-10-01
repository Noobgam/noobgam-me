// that should probably never go to production for safety reasons and should be hidden behind a lambda for authorization
import { createClient } from '@clickhouse/client-web'
import {ReviewedCard} from "../models/anki";

const client = createClient({
    host: process.env.REACT_APP_CLICKHOUSE_HOST ?? 'http://localhost:8123',
    username: process.env.REACT_APP_CLICKHOUSE_USERNAME ?? 'default',
    password: process.env.REACT_APP_CLICKHOUSE_PASSWORD ?? '',
});

export async function getAllAnkiReviews(): Promise<ReviewedCard[]> {
    const rs = await client.query({
        query: `SELECT * FROM "raw_anki_reviews"`,
        format: "JSONEachRow",
    })
    const ds = await rs.json();
    console.log(ds);
    return ds as ReviewedCard[];
}
