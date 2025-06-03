
export const getAttributeMetric = (key, value) => {
    if (!value) return "-";
    switch (key) {
        case "model": return value;
        case "manufacturer": return value;
        case "connector": return value;
        case "mass": return `${value}г`;
        case "sizeMm": return `${value}мм`;
        case "frequency": return value;
        case "dbi": return `${value}дБІ`;
        case "polarization": return value;
        case "swr": return `≤${value}`;
        case "antennaType": return value;
        case "numS": return `${value}S`;
        case "dischargeRate": return `${value}C`;
        case "batteryType": return value;
        case "capacity": return `${value}mAh`;
        case "cableConnector": return value;
        case "propellersInches": return `${value}"`;
        case "material": return value;
        case "camMountSize": return `${value}мм`;
        case "motorMountSize": return `${value}мм`;
        case "mountSize": return `${value}мм`;
        case "tvl": return `${value}TVL`;
        case "aspectRatio": return value;
        case "videoFormat": return value;
        case "rotationSpeed": return `${value}KV`;
        case "rangeS": return `${value}S`;
        case "maxCurrent": return `${value}A`;
        case "maxPower": return `${value}W`;
        case "sizeInches": return `${value}"`;
        case "protocol": return value;
        case "workingCurrent": return `${value}A * 4`;
    }
}