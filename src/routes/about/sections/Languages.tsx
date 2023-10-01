import React, {FC} from "react";
import {Text} from "@chakra-ui/react"

export const Languages: FC<{}> = () => {
    return (
        <Text color={"tomato"}>
            I like learning languages. <br/>
            Right now I am at the point in life where I have to learn 3rd language.<br/>
            Currently my aspiration is to be fluent in all four eventually:<br/>
            JP: N5-ish<br/>
            GER: B1<br/>
            ENG: C2-ish<br/>
            RU: native<br/>
        </Text>
    )
}
