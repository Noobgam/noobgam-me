import React, {FC} from "react";
import {Section} from "../../components/Section";
import {Text} from "@chakra-ui/react";
import {Languages} from "./sections/Languages";

export const About: FC<{}> = () => {
    return (
        <div className="Background">
            <Section header={"What am I?"}>
                <Section header={"Language learner"}>
                    <Languages/>
                </Section>
                <Text color={"pink"}>
                    TBD
                </Text>
            </Section>
        </div>
    );
}
