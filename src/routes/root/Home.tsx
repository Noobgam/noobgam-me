import { Link } from "react-router-dom";
import {Text} from "@chakra-ui/react";
import React from "react";
import {transition} from "../../utils/transition";

function HomeRoute() {
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

export const Home = transition(HomeRoute);
