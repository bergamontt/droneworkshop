import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllVTX = async (page = defaultPage, size = elementsPerPage) => {
    const response = await api.get(`/vtx?page=${page}&size=${size}`);
    return response.data;
}

export const getVTXById = async (id) => {
    const response = await api.get(`/vtx/${id}`);
    return response.data;
}