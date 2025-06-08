import api from './api.jsx'

export const getAllTutorials = async () => {
    const response = await api.get('/tutorial');
    return response.data;
}

export const getTutorialById = async (id) => {
    if (id === null || id === undefined || Number.isNaN(id))
        return {data: null};
    const response = await api.get(`/tutorial/${id}`);
    return response.data;
}