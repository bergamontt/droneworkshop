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
        localStorage.setItem('rx_antenna', value);
    },

    getRxAntennaId() {
        return localStorage.getItem('rx_antenna');
    },

    setVtxAntennaId(value) {
        localStorage.setItem('vtx_antenna', value);
    },

    getVtxAntennaId() {
        return localStorage.getItem('vtx_antenna');
    },

    setBatteryId(value) {
        localStorage.setItem('battery', value);
    },

    getBatteryId() {
        return localStorage.getItem('battery');
    },

    setCameraId(value) {
        localStorage.setItem('camera', value);
    },

    getCameraId() {
        return localStorage.getItem('camera');
    },

    setFrameId(value) {
        localStorage.setItem('frame', value);
    },

    getFrameId() {
        return localStorage.getItem('frame');
    },

    setMotorId(value) {
        localStorage.setItem('motor', value);
    },

    getMotorId() {
        return localStorage.getItem('motor');
    },

    setPropellerId(value) {
        localStorage.setItem('propeller', value);
    },

    getPropellerId() {
        return localStorage.getItem('propeller');
    },

    setRxId(value) {
        localStorage.setItem('rx', value);
    },

    getRxId() {
        return localStorage.getItem('rx');
    },

    setStackId(value) {
        localStorage.setItem('stack', value);
    },

    getStackId() {
        return localStorage.getItem('stack');
    },

    setVtxId(value) {
        localStorage.setItem('vtx', value);
    },

    getVtxId() {
        return localStorage.getItem('vtx');
    }
};