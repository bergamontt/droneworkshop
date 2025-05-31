import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllBatteries = async (
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
    const response = await api.get(`/battery?${params.toString()}`);
    return response.data;
};

export const getBatteryById = async (id) => {
    const response = await api.get(`/battery/${id}`);
    return response.data;
}