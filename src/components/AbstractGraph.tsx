import {FC} from "react";
import {ResponsiveLine, Serie} from "@nivo/line";

interface GraphProps {
    data: Serie[],
}

export const AbstractGraph: FC<GraphProps> = ({data}) => {
    return (<ResponsiveLine
        data={data}
        xScale={{ type: "point" }}
        yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
        }}
        enableGridX={false}
        enableGridY={false}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
        }}
        axisLeft={{
            tickSize: 5,
            tickValues: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
        }}
        pointColor={{ theme: "background" }}
        legends={[
            {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemBackground: "rgba(0, 0, 0, .03)",
                            itemOpacity: 1,
                        },
                    },
                ],
            },
        ]}
    />);
}
