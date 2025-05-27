import api from './api.jsx'

export const getAllPropellers = async () => {
    const response = await api.get('/propeller');
    return response.data;
}

export const getPropellerById = async (id) => {
    const response = await api.get(`/propeller/${id}`);
    return response.data;
}