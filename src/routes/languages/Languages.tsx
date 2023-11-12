import React, {FC} from "react";
import {Section} from "../../components/Section";
import {GenericLanguageSection} from "../sections/GenericLanguageSection";
import {Text} from "@chakra-ui/react";
import {GrafanaWidget} from "../../components/GrafanaWidget";
import {transition} from "../../utils/transition";


const LanguagesRoute: FC<{}> = () => {
    return (
        <div className="Background">
            <Section header={"Language learner"} open={true}>
                <GenericLanguageSection/>
                <Section header={"Japanese"}>
                    <Text color={"wheat"}>
                        For Japanese I have actually spent quite a while developing my own way of learning.
                        Because of how demanding Japanese by forcing you to repeat vocab/kanji a lot I use different things <br/>
                    </Text>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 1, width: 'fit-content'}}>
                            <GrafanaWidget panelId={6} width={600} height={300}/>
                        </div>
                        <div style={{flex: 1, width: 'fit-content'}}>
                            <GrafanaWidget panelId={5} width={600} height={300}/>
                        </div>
                    </div>
                </Section>
                <Section header={"German"}>
                   <Text color={"magenta"}>
                       TBD
                   </Text>
                </Section>
            </Section>
        </div>
    )
}

export const Languages = transition(LanguagesRoute);
