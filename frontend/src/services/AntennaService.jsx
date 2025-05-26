import api from './api.jsx'

export const getAllAntennas = async () => {
    const response = await api.get('/antenna');
    return response.data;
}

export const getAntennaById = async (id) => {
    const response = await api.get(`/antenna/${id}`);
    return response.data;
}