import { Link } from "react-router-dom";
import {Text} from "@chakra-ui/react";
import React from "react";

export default function Home() {
    return (
        <div className="Background">
            <Link to={"/playground"}>
                <Text color={"tomato"}>
                    Home
                </Text>
            </Link>
        </div>
    );
}
