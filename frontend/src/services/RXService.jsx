import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllRX = async (
    page = defaultPage,
    size = elementsPerPage,
    filters = {}
) => {

    const { modelPrefix, minPrice, maxPrice, manufacturerNames, distributorNames, sortBy, sortDirection } = filters;
    const params = new URLSearchParams({
        page,
        size,
        ...(modelPrefix && { modelPrefix }),
        ...(minPrice !== undefined && { minPrice }),
        ...(maxPrice !== undefined && { maxPrice }),
        ...(sortBy && { sortBy }),
        ...(sortDirection && { sortDirection }),
    });

    if (manufacturerNames && Array.isArray(manufacturerNames) && manufacturerNames.length > 0) {
        manufacturerNames.forEach(name => params.append('manufacturerNames', name));
    }

    if (distributorNames && Array.isArray(distributorNames) && distributorNames.length > 0) {
        distributorNames.forEach(name => params.append('distributorNames', name));
    }

    const response = await api.get(`/rx?${params.toString()}`);
    return response.data;
};

export const getRXById = async (id) => {
    if (id === null || id === undefined || Number.isNaN(id))
        return null;
    const response = await api.get(`/rx/${id}`);
    return response.data;
}

export const getRXManufacturers = async () => {
    const response = await api.get(`/rx/manufacturers`);
    return response.data;
}

export const getRXDistributors = async () => {
    const response = await api.get(`/rx/distributors`);
    return response.data;
}