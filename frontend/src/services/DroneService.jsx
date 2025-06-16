import api from './api.jsx'
import {defaultPage, elementsPerPage} from "./ServiceConfig.jsx";

export const getAllDrones = async (
    page = defaultPage,
    size = elementsPerPage,
    filters = {}
) => {
    const { droneNamePrefix, username, isPublished, sortBy, sortDirection } = filters;
    const params = new URLSearchParams({
        page,
        size,
        ...(droneNamePrefix && { droneNamePrefix }),
        ...(username && { username }),
        ...(isPublished != null && { isPublished }),
        ...(sortBy && { sortBy }),
        ...(sortDirection && { sortDirection }),
    });
    const response = await api.get(`/drone?${params.toString()}`);
    return response.data;
};

export const getDroneById = async (id) => {
    if (id === null || id === undefined || Number.isNaN(id))
        return null;
    const response = await api.get(`/drone/${id}`);
    return response.data;
};

export const deleteDroneById = async (id) => {
    if (id === null || id === undefined || Number.isNaN(id))
        return null;
    await api.delete(`/drone/${id}`);
};

export const addDrone = async (drone) => {
    function formatAsSqlTimestamp(date) {
        return date.getFullYear() + '-' +
            String(date.getMonth() + 1).padStart(2, '0') + '-' +
            String(date.getDate()).padStart(2, '0') + ' ' +
            String(date.getHours()).padStart(2, '0') + ':' +
            String(date.getMinutes()).padStart(2, '0') + ':' +
            String(date.getSeconds()).padStart(2, '0') + '.' +
            String(date.getMilliseconds()).padStart(3, '0');
    }

    const formData = new FormData();
    formData.append('droneName', drone.droneName);
    formData.append('createdAt', formatAsSqlTimestamp(drone.createdAt));
    if(drone.photo)
        formData.append('photo', drone.photo);
    const fields = [
        'userId',
        'frameId',
        'propellerId',
        'cameraId',
        'vtxId',
        'rxId',
        'vtxAntennaId',
        'rxAntennaId',
        'batteryId',
        'motorId',
        'stackId'
    ];
    fields.forEach((field) => {
        if (drone[field] !== undefined && drone[field] !== null) {
            formData.append(field, drone[field]);
        }
    });

    const response = await api.post('/drone', formData, {
        headers: {
            'Content-Type': undefined,
        },
    });
    return response.data;
}