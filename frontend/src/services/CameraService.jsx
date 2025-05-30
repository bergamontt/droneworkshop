import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllCameras = async (page = defaultPage, size = elementsPerPage) => {
    const response = await api.get(`/camera?page=${page}&size=${size}`);
    return response.data;
}

export const getCameraById = async (id) => {
    const response = await api.get(`/camera/${id}`);
    return response.data;
}