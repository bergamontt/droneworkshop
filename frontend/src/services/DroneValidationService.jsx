function allSelected(drone){
    return drone && drone.rxAntenna && drone.vtxAntenna &&
        drone.battery && drone.camera && drone.frame && drone.motor &&
        drone.propeller && drone.rx && drone.stack && drone.vtx;
}

function propsFrameMatch(drone) {
    if (!drone || !drone.frame || !drone.propeller)
        return true;
    const { frame, propeller } = drone;
    return Math.abs(frame.propellersInches - propeller.sizeInches) < 0.5;
}

function cameraFrameMatch(drone) {
    if (!drone || !drone.frame || !drone.camera)
        return true;
    const frameMounts = drone.frame.camMountSize.split(',');
    const camMounts = drone.camera.mountSize.split(',');
    for (const frameMount of frameMounts) {
        for (const camMount of camMounts) {
            const camDims = camMount.split('*').map(Number);
            if (camDims[0] <= frameMount && camDims[1] <= frameMount) {
                return true;
            }
        }
    }
    return false;
}

function motorFrameMatch(drone) {
    if (!drone || !drone.frame || !drone.motor)
        return true;
    const frameMounts = drone.frame.motorMountSize.split(',').map(Number);
    const motorMount = Number(drone.motor.mountSize);
    for (const frameMount of frameMounts) {
        if (motorMount === frameMount) {
            return true;
        }
    }
    return false;
}


function antennaVtxConnectorMatch(){
    return true;
}

function parseFrequency(str) {
    const match = str.match(/^([\d.]+)\s*([MG])$/i);
    if (!match) {
        return null;
    }
    const value = parseFloat(match[1]);
    const unit = match[2].toUpperCase();
    switch (unit) {
        case 'M':
            return value;
        case 'G':
            return value * 1000;
        default:
            return null;
    }
}

function antennaVtxFreqMatch(drone){
    if (!drone || !drone.vtx || !drone.vtxAntenna)
        return true;
    const antennaFrequencies = drone.vtxAntenna.frequency.split(',');
    const vtxFreqMhz = parseFrequency(drone.vtx.frequency);
    for (const freq of antennaFrequencies) {
        const freqAntennaMhz = parseFrequency(freq);
        if (Math.abs(freqAntennaMhz - vtxFreqMhz) < 500) {
            return true;
        }
    }
    return false;
}

function antennaRxConnectorMatch(){
    return true;
}

function antennaRxFreqMatch(drone){
    if (!drone || !drone.rx || !drone.rxAntenna)
        return true;
    const antennaFrequencies = drone.rxAntenna.frequency.split(',');
    const rxFrequencies = drone.rx.frequency.split(',');
    for (const antennaFreq of antennaFrequencies) {
        for (const rxFreq of rxFrequencies) {
            const freqAntennaMhz = parseFrequency(antennaFreq);
            const rxFreqMhz = parseFrequency(rxFreq);
            if (Math.abs(freqAntennaMhz - rxFreqMhz) < 200) {
                return true;
            }
        }
    }
    return false;
}

function extractXTConnector(str) {
    const match = str.match(/XT\d{2}/i);
    return match ? match[0].toUpperCase() : null;
}

function batteryStackConnectorMatch(drone){
    if (!drone || !drone.stack || !drone.battery)
        return true;
    const stackConnector = extractXTConnector(drone.stack.cableConnector);
    const batteryConnector = extractXTConnector(drone.battery.cableConnector);
    return stackConnector === batteryConnector;
}

function getBatteryCurrent(battery){
    if(!battery.dischargeRate || !battery.capacity)
        return null;
    return (battery.dischargeRate * battery.capacity) / 1000;
}

function batteryStackCurrentMatch(drone){
    if (!drone || !drone.stack || !drone.battery)
        return true;
    const maxCurrent = drone.stack.maxCurrent * 4;
    const batteryCurrent = getBatteryCurrent(drone.battery);
    return batteryCurrent <= maxCurrent;
}

function batteryMotorCurrentMatch(drone){
    if (!drone || !drone.motor || !drone.battery)
        return true;
    const maxCurrent = drone.motor.maxCurrent;
    const batteryCurrent = getBatteryCurrent(drone.battery);
    return batteryCurrent / 4 <= maxCurrent;
}

function batteryMotorVoltageMatch(drone){
    if (!drone || !drone.motor || !drone.battery)
        return true;
    const motorRangeS = drone.motor.rangeS.split('-');
    const batteryS = drone.battery.numS;
    if(motorRangeS.length === 1){
        return batteryS === Number(motorRangeS[0]);
    } else {
        return Number(motorRangeS[0]) <= batteryS && batteryS <= Number(motorRangeS[1]);
    }
}


export const droneValidationService = {
    isValid(drone) {
        return allSelected(drone) && propsFrameMatch(drone) && cameraFrameMatch(drone) &&
            motorFrameMatch(drone) && antennaVtxConnectorMatch(drone) && antennaRxConnectorMatch(drone) &&
            antennaVtxFreqMatch(drone) && antennaRxFreqMatch(drone) && batteryStackConnectorMatch(drone) &&
            batteryStackConnectorMatch(drone) && batteryMotorVoltageMatch(drone);
            // && batteryMotorCurrentMatch(drone)
    },

    getIssues(drone) {
        const issues = [];
        if (!allSelected(drone)) {
            issues.push("Не всі деталі обрані!");
        }
        if (!propsFrameMatch(drone)) {
            issues.push("Не співпадає розмір пропелерів та рами!");
        }
        if (!cameraFrameMatch(drone)) {
            issues.push("Камера завелика для рами!");
        }
        if (!motorFrameMatch(drone)) {
            issues.push("Мотори не підходять для рами!");
        }
        if (!antennaVtxConnectorMatch(drone)) {
            issues.push("Несумісні конектори VTX та антени!");
        }
        if (!antennaRxConnectorMatch(drone)) {
            issues.push("Несумісні конектори RX та антени!");
        }
        if (!antennaVtxFreqMatch(drone)) {
            issues.push("Несумісні частоти VTX та антени!");
        }
        if (!antennaRxFreqMatch(drone)) {
            issues.push("Несумісні частоти RX та антени!");
        }
        if(!batteryStackConnectorMatch(drone)) {
            issues.push("Несумісні конектори батареї та стека!");
        }
        if(!batteryStackCurrentMatch(drone)) {
            issues.push("Струм батареї перевищує максимально безпечну межу для ESC!");
        }
        // if(!batteryMotorCurrentMatch(drone)) {
        //     issues.push("Струм батареї перевищує максимально безпечну межу для двигунів!");
        // }
        if (!batteryMotorVoltageMatch(drone)) {
            issues.push("Напруга батареї не є рекомендованою для двигунів!");
        }
        return issues;
    },
};