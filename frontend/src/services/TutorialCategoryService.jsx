import api from './api.jsx'

export const getAllTutorialCategories = async () => {
    const response = await api.get('/tutorial_category');
    return response.data;
}

export const getTutorialCategoryById = async (id) => {
    if (id === null || id === undefined || Number.isNaN(id))
        return {data: null};
    const response = await api.get(`/tutorial_category/${id}`);
    return response.data;
}