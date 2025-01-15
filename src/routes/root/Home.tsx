import { Link } from "react-router-dom";
import {Text} from "@chakra-ui/react";
import React from "react";
import {transition} from "../../utils/transition";

function HomeRoute() {
    return (
        <div className="Background">
            <Link to={"/"}>
                <Text color={"tomato"}>
                    <p>Hi, I'm Noob.</p>
                    <p>And this is under construction</p>
                </Text>
            </Link>
        </div>
    );
}

export const Home = transition(HomeRoute);
