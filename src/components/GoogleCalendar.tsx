import React, {FC} from "react";

// for whatever reason you can't just use any color.
// it will mess up pretty much all of them.
// these are the ones that I found to be working for sure.
export const ColorsThatWorkInGoogleCalendar = {
    yellowIsh: "#E4C441",
    lightBlue: "#4285F4",
    darkBlue: '#001B60',
    green: '#0B8043',
    red: '#D50000',
    orange: "#F4511E",
}

export interface SourceCalendar {
    id: string;
    color: string;
    disabled?: boolean;
}

interface GoogleCalendarProps {
    height: number;
    bgColor: string;
    src: SourceCalendar[];
}

export const GoogleCalendar: FC<GoogleCalendarProps> = ({height, bgColor, src}) => {
    const encodedColor = encodeURIComponent(bgColor)
    let sourceUrl = `https://calendar.google.com/calendar/embed?height=${height}` +
        `&wkst=2&bgcolor=${encodedColor}` +
        `&ctz=Europe%2FBerlin&mode=WEEK` +
        `&showPrint=0&showCalendars=0&showNav=1&showTitle=0`

    sourceUrl += '&' + src.map(cal => cal.disabled ? "" : `src=${cal.id}&color=${encodeURIComponent(cal.color)}`).join('&')

    return (<iframe
        title="personal-calendar"
        src={sourceUrl}
        style={{border: "solid 1px #777"}} width="800" height="600" frameBorder="0" scrolling="no"
    />);
}
