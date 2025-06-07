export const droneValidationService = {
    isValid(drone){
        return drone && drone.rxAntennaId && drone.vtxAntennaId &&
            drone.batteryId && drone.cameraId && drone.frameId && drone.motorId &&
            drone.propellerId && drone.rxId && drone.stackId && drone.vtxId;
    }
};