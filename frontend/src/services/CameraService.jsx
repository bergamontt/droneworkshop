import api from './api.jsx'

export const getAllCameras = async () => {
    const response = await api.get('/camera');
    return response.data;
}

export const getCameraById = async (id) => {
    const response = await api.get(`/camera/${id}`);
    return response.data;
}