import api from './api.jsx'

export const getAllBatteries = async () => {
    const response = await api.get('/battery');
    return response.data;
}

export const getBatteryById = async (id) => {
    const response = await api.get(`/battery/${id}`);
    return response.data;
}