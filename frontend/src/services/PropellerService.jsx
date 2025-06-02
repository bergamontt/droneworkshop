import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllPropellers = async (
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

    const response = await api.get(`/propeller?${params.toString()}`);
    return response.data;
};

export const getPropellerById = async (id) => {
    const response = await api.get(`/propeller/${id}`);
    return response.data;
}

export const getPropellerManufacturers = async () => {
    const response = await api.get(`/propeller/manufacturers`);
    return response.data;
}

export const getPropellerDistributors = async () => {
    const response = await api.get(`/propeller/distributors`);
    return response.data;
}