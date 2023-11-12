import React, {FC} from "react";
import {Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export const GenericInfoSection: FC<{}> = () => {
    return (
        <Text color={"wheat"}>
            I like programming. <br/>
            A lot. <br/>
            Also like learning <Link to={'/languages'}>languages</Link> <br/>
            Maybe in the future I will publish how I do that in a casual-ish manner with my ChatGPT tooling alongside. <br/>
        </Text>
    )
}
