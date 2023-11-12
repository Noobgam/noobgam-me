import React from "react";
import {Heading, Text} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import '../styles/Common.css'

export const Header = () => {
    return (
        <nav>
            <Heading className={'Header'}>
                <NavLink className={'Header-Button'} to="">
                    <Text color={"tomato"}>
                        Home
                    </Text>
                </NavLink>
                <NavLink className={'Header-Button'} to="/languages">
                    <Text color={"tomato"}>
                        Languages
                    </Text>
                </NavLink>
                <NavLink className={'Header-Button'} to="/about">
                    <Text color={"tomato"}>
                        About
                    </Text>
                </NavLink>
            </Heading>
        </nav>
    );
}
