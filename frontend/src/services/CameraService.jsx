import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllCameras = async (
    page = defaultPage,
    size = elementsPerPage,
    filters = {}
) => {

    const { modelPrefix, minPrice, maxPrice, manufacturerNames, distributorNames } = filters;
    const params = new URLSearchParams({
        page,
        size,
        ...(modelPrefix && { modelPrefix }),
        ...(minPrice !== undefined && { minPrice }),
        ...(maxPrice !== undefined && { maxPrice }),
    });

    if (manufacturerNames && Array.isArray(manufacturerNames) && manufacturerNames.length > 0) {
        manufacturerNames.forEach(name => params.append('manufacturerNames', name));
    }

    if (distributorNames && Array.isArray(distributorNames) && distributorNames.length > 0) {
        distributorNames.forEach(name => params.append('distributorNames', name));
    }

    const response = await api.get(`/camera?${params.toString()}`);
    return response.data;
};

export const getCameraById = async (id) => {
    const response = await api.get(`/camera/${id}`);
    return response.data;
}