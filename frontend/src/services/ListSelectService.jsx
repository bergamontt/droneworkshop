export const listSelectService = {
    startSelecting(){
        localStorage.setItem('currentlySelectingDetails', 'true');
    },

    finishSelecting(){
        localStorage.setItem('currentlySelectingDetails', null);
        this.setRxAntennaId(null);
        this.setVtxAntennaId(null);
        this.setBatteryId(null);
        this.setCameraId(null);
        this.setFrameId(null);
        this.setMotorId(null);
        this.setPropellerId(null);
        this.setRxId(null);
        this.setStackId(null);
        this.setVtxId(null);
    },

    isSelecting(){
        return localStorage.getItem('currentlySelectingDetails') === 'true';
    },

    setRxAntennaId(value) {
        localStorage.setItem('antenna_rx', value);
    },

    getRxAntennaId() {
        return Number(localStorage.getItem('antenna_rx'));
    },

    setVtxAntennaId(value) {
        localStorage.setItem('antenna_vtx', value);
    },

    getVtxAntennaId() {
        return Number(localStorage.getItem('antenna_vtx'));
    },

    setBatteryId(value) {
        localStorage.setItem('battery', value);
    },

    getBatteryId() {
        return Number(localStorage.getItem('battery'));
    },

    setCameraId(value) {
        localStorage.setItem('camera', value);
    },

    getCameraId() {
        return Number(localStorage.getItem('camera'));
    },

    setFrameId(value) {
        localStorage.setItem('frame', value);
    },

    getFrameId() {
        return Number(localStorage.getItem('frame'));
    },

    setMotorId(value) {
        localStorage.setItem('motor', value);
    },

    getMotorId() {
        return Number(localStorage.getItem('motor'));
    },

    setPropellerId(value) {
        localStorage.setItem('propeller', value);
    },

    getPropellerId() {
        return Number(localStorage.getItem('propeller'));
    },

    setRxId(value) {
        localStorage.setItem('rx', value);
    },

    getRxId() {
        return Number(localStorage.getItem('rx'));
    },

    setStackId(value) {
        localStorage.setItem('stack', value);
    },

    getStackId() {
        return Number(localStorage.getItem('stack'));
    },

    setVtxId(value) {
        localStorage.setItem('vtx', value);
    },

    getVtxId() {
        return Number(localStorage.getItem('vtx'));
    }
};