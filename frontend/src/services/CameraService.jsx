import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllCameras = async (
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
    const response = await api.get(`/camera?${params.toString()}`);
    return response.data;
};

export const getCameraById = async (id) => {
    const response = await api.get(`/camera/${id}`);
    return response.data;
}