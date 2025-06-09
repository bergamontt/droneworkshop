import api from './api.jsx'
import {defaultPage, elementsPerPage} from './ServiceConfig.jsx'

export const addPublication = async (droneId) => {
    return await api.post('/publication', {droneId});
}

export const getAllPublications = async (
    page = defaultPage,
    size = elementsPerPage,
    filters = {}
) => {
    const { username, droneNamePrefix } = filters;
    const params = new URLSearchParams({
        page,
        size,
        ...(droneNamePrefix && { droneNamePrefix }),
        ...(username && { username })
    });
    const response = await api.get(`/publication?${params.toString()}`);
    return response.data; 
};

export const getPublicationById = async (id) => {
    if (id === null || id === undefined || Number.isNaN(id))
        return null;
    const response = await api.get(`/publication/${id}`);
    return response.data; 
};