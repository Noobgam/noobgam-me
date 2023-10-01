import { Link } from "react-router-dom";
import {Text} from "@chakra-ui/react";
import React from "react";

export default function Home() {
    return (
        <div className="Background">
            <Link to={"/"}>
                <Text color={"tomato"}>
                    Hi, I'm Noob
                </Text>
            </Link>
        </div>
    );
}
