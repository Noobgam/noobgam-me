'use client';

import Link from "next/link";
import {Text} from "@chakra-ui/react";

function Home() {
    return (
        <div className="Background">
            <Link href="/public">
                <Text color={"tomato"}>
                    <span>Hi, I'm Noob.</span>
                    <span>And this is under construction</span>
                </Text>
            </Link>
        </div>
    );
}

export default Home;
