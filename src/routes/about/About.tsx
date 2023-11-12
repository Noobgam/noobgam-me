import React, {FC} from "react";
import {Section} from "../../components/Section";
import {GenericInfoSection} from "../sections/GenericInfoSection";
import {transition} from "../../utils/transition";

const AboutRoute: FC<{}> = () => {
    return (
        <div className="Background">
            <Section header={"What am I?"}>
                <GenericInfoSection/>
            </Section>
        </div>
    );
}

export const About = transition(AboutRoute);
