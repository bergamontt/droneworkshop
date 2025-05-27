import api from './api.jsx'

export const getAllVTX = async () => {
    const response = await api.get('/vtx');
    return response.data;
}

export const getVTXById = async (id) => {
    const response = await api.get(`/vtx/${id}`);
    return response.data;
}