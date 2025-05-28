import api from './api.jsx'

export const getAllTutorials = async () => {
    const response = await api.get('/tutorial');
    return response.data;
}

export const getTutorialById = async (id) => {
    const response = await api.get(`/tutorial/${id}`);
    return response.data;
}