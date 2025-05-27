import api from './api.jsx'

export const getAllFrames = async () => {
    const response = await api.get('/frame');
    return response.data;
}

export const getFrameById = async (id) => {
    const response = await api.get(`/frame/${id}`);
    return response.data;
}