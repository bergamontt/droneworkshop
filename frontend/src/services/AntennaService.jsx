import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllAntennas = async (page = defaultPage, size = elementsPerPage) => {
    const response = await api.get(`/antenna?page=${page}&size=${size}`);
    return response.data;
}

export const getAntennaById = async (id) => {
    const response = await api.get(`/antenna/${id}`);
    return response.data;
}