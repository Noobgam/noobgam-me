import React from "react";
import {Heading, Text} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import '../styles/Common.css'

export const Header = () => {
    return (
        <nav>
            <Heading className={'Header'}>
                <NavLink to="">
                    <Text color={"tomato"}>
                        Home
                    </Text>
                </NavLink>
                <NavLink to="playground">
                    <Text color={"tomato"}>
                        Playground
                    </Text>
                </NavLink>
            </Heading>
        </nav>
    );
}
