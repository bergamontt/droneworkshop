
export const getAttributeName = (key) => {
    switch (key) {
        case "model": return "Модель";
        case "manufacturer": return "Виробник";
        case "connector": return "Конектор";
        case "mass": return "Вага";
        case "sizeMm": return "Розмір";
        case "frequency": return "Частота";
        case "dbi": return "Коефіцієнт підсилення";
        case "polarization": return "Поляризація";
        case "swr": return "Коефіцієнт стоячої хвилі";
        case "antennaType": return "Тип антенти";
        case "numS": return "Кількість банок";
        case "dischargeRate": return "Номінальний струм розряду";
        case "batteryType": return "Тип акумулятора";
        case "capacity": return "Номінальна ємність";
        case "cableConnector": return "Тип розʼєму";
        case "propellersInches": return "Розмір пропелерів";
        case "material": return "Матеріал";
        case "camMountSize": return "Розмір кріплення камери";
        case "motorMountSize": return "Розмір кріплення моторів";
        case "mountSize": return "Розмір кріплення";
        case "tvl": return "Горизонтальна роздільна здатність";
        case "aspectRatio": return "Співвідношення сторін";
        case "videoFormat": return "Система сигналу";
        case "rotationSpeed": return "Частота обертання";
        case "rangeS": return "Рекомендована батарея";
        case "maxCurrent": return "Максимальний струм";
        case "maxPower": return "Максимальна потужність";
        case "sizeInches": return "Діаметр";
        case "protocol": return "Протокол";
        case "workingCurrent": return "Постійний струм";
    }
}