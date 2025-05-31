import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllFrames = async (
    page = defaultPage,
    size = elementsPerPage,
    filters = {}
) => {
    const { modelPrefix, minPrice, maxPrice } = filters;
    const params = new URLSearchParams({
        page,
        size,
        ...(modelPrefix && { modelPrefix }),
        ...(minPrice !== undefined && { minPrice }),
        ...(maxPrice !== undefined && { maxPrice }),
    });
    const response = await api.get(`/frame?${params.toString()}`);
    return response.data;
};

export const getFrameById = async (id) => {
    const response = await api.get(`/frame/${id}`);
    return response.data;
}