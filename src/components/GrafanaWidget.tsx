import {FC} from "react";

type GrafanaWidgetProps = {
    dashboardId?: string;
    panelId: number;

    width?: number;
    height?: number;
    from?: number;
}

const baseUrl = "https://grafana.noobgam.com/d-solo";
const defaultDashboardId = "ce95cd2d-acf6-4682-a8a1-df42e8a73a76";

export const GrafanaWidget: FC<GrafanaWidgetProps> = ({dashboardId, panelId, width, height, from}) => {
    const dashboard = dashboardId ?? defaultDashboardId;

    let iframeSrc = `${baseUrl}/${dashboard}?orgId=1&theme=dark&panelId=${panelId}`
    if (from) {
        iframeSrc += `&from=${from}`;
    }
    return (
        <iframe
            style={{border: '1px'}}
            src={iframeSrc}
            {...(width ? {width} : {})}
            {...(height ? {height} : {})}
        />
    )
}

