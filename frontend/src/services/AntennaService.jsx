import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllAntennas = async (
    page = defaultPage,
    size = elementsPerPage,
    filters = {}
) => {
    return getFilteredAntennas('antenna', page, size, filters);
};

export const getAllRXAntennas  = async (
    page = defaultPage,
    size = elementsPerPage,
    filters = {}
) => {
    return getFilteredAntennas('antenna_rx', page, size, filters);
};

export const getAllVTXAntennas  = async (
    page = defaultPage,
    size = elementsPerPage,
    filters = {}
) => {
    return getFilteredAntennas('antenna_vtx', page, size, filters);
};

export const getAntennaById = async (id) => {
    if (id === null || id === undefined || Number.isNaN(id))
        return null;
    const response = await api.get(`/antenna/${id}`);
    return response.data;
}

export const getAntennaManufacturers = async () => {
    const response = await api.get(`/antenna/manufacturers`);
    return response.data;
}

export const getAntennaDistributors = async () => {
    const response = await api.get(`/antenna/distributors`);
    return response.data;
}

const getFilteredAntennas = async (
    path,    
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

    const response = await api.get(`/${path}?${params.toString()}`);
    return response.data;
}