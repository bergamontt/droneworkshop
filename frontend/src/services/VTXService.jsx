import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllVTX = async (
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

    const response = await api.get(`/vtx?${params.toString()}`);
    return response.data;
};

export const getVTXById = async (id) => {
    if (id === null || id === undefined || Number.isNaN(id))
        return null;
    const response = await api.get(`/vtx/${id}`);
    return response.data;
}

export const getVTXManufacturers = async () => {
    const response = await api.get(`/vtx/manufacturers`);
    return response.data;
}

export const getVTXDistributors = async () => {
    const response = await api.get(`/vtx/distributors`);
    return response.data;
}