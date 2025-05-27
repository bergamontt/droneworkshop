import api from './api.jsx'

export const getAllRX = async () => {
    const response = await api.get('/rx');
    return response.data;
}

export const getRXById = async (id) => {
    const response = await api.get(`/rx/${id}`);
    return response.data;
}