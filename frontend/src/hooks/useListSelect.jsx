import {useEffect, useState} from 'react';
import {listSelectService} from "../services/ListSelectService.jsx";

export const useListSelect = () => {
    const [isSelecting, setIsSelecting] = useState(listSelectService.isSelecting());
    const [rxAntennaId, setRxAntennaId] = useState(listSelectService.getRxAntennaId());
    const [vtxAntennaId, setVtxAntennaId] = useState(listSelectService.getVtxAntennaId());
    const [batteryId, setBatteryId] = useState(listSelectService.getBatteryId());
    const [cameraId, setCameraId] = useState(listSelectService.getCameraId());
    const [frameId, setFrameId] = useState(listSelectService.getFrameId());
    const [motorId, setMotorId] = useState(listSelectService.getMotorId());
    const [propellerId, setPropellerId] = useState(listSelectService.getPropellerId());
    const [rxId, setRxId] = useState(listSelectService.getRxId());
    const [stackId, setStackId] = useState(listSelectService.getStackId());
    const [vtxId, setVtxId] = useState(listSelectService.getVtxId());

    const startSelecting = () => {
        listSelectService.startSelecting();
        setIsSelecting(true);
    };

    const finishSelecting = () => {
        listSelectService.finishSelecting();
        setIsSelecting(false);
        setRxAntennaId(listSelectService.getRxAntennaId());
        setVtxAntennaId(listSelectService.getVtxAntennaId());
        setBatteryId(listSelectService.getBatteryId());
        setCameraId(listSelectService.getCameraId());
        setFrameId(listSelectService.getFrameId());
        setMotorId(listSelectService.getMotorId());
        setPropellerId(listSelectService.getPropellerId());
        setRxId(listSelectService.getRxId());
        setStackId(listSelectService.getStackId());
        setVtxId(listSelectService.getVtxId());
    };

    const selectDetailId = (name, id) => {
        switch (name) {
            case 'antenna_rx':
                setRxAntennaId(id);
                listSelectService.setRxAntennaId(id);
                break;
            case 'antenna_vtx':
                setVtxAntennaId(id);
                listSelectService.setVtxAntennaId(id);
                break;
            case 'battery':
                setBatteryId(id);
                listSelectService.setBatteryId(id);
                break;
            case 'camera':
                setCameraId(id);
                listSelectService.setCameraId(id);
                break;
            case 'frame':
                setFrameId(id);
                listSelectService.setFrameId(id);
                break;
            case 'motor':
                setMotorId(id);
                listSelectService.setMotorId(id);
                break;
            case 'propeller':
                setPropellerId(id);
                listSelectService.setPropellerId(id);
                break;
            case 'rx':
                setRxId(id);
                listSelectService.setRxId(id);
                break;
            case 'stack':
                setStackId(id);
                listSelectService.setStackId(id);
                break;
            case 'vtx':
                setVtxId(id);
                listSelectService.setVtxId(id);
                break;
        }
    };

    const getSelectedDetailId = (name) => {
        switch (name) {
            case 'antenna_rx':
                return rxAntennaId;
            case 'antenna_vtx':
                return vtxAntennaId;
            case 'battery':
                return batteryId;
            case 'camera':
                return cameraId;
            case 'frame':
                return frameId;
            case 'motor':
                return motorId;
            case 'propeller':
                return propellerId;
            case 'rx':
                return rxId;
            case 'stack':
                return stackId;
            case 'vtx':
                return vtxId;
            default:
                return null;
        }
    };

    useEffect(() => {
        const handlers = [
            () => setIsSelecting(listSelectService.isSelecting()),
            () => setRxAntennaId(listSelectService.getRxAntennaId()),
            () => setVtxAntennaId(listSelectService.getVtxAntennaId()),
            () => setBatteryId(listSelectService.getBatteryId()),
            () => setCameraId(listSelectService.getCameraId()),
            () => setFrameId(listSelectService.getFrameId()),
            () => setMotorId(listSelectService.getMotorId()),
            () => setPropellerId(listSelectService.getPropellerId()),
            () => setRxId(listSelectService.getRxId()),
            () => setStackId(listSelectService.getStackId()),
            () => setVtxId(listSelectService.getVtxId()),
        ];

        const handleStorage = () => {
            Object.values(handlers).forEach(fn => fn());
        };

        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    return { isSelecting, startSelecting, finishSelecting, selectDetailId, getSelectedDetailId };
}
