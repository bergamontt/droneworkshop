import api from './api.jsx'

export const getAllStacks = async () => {
    const response = await api.get('/stack');
    return response.data;
}

export const getStackById = async (id) => {
    const response = await api.get(`/stack/${id}`);
    return response.data;
}