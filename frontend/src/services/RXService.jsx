import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllRX = async (page = defaultPage, size = elementsPerPage) => {
    const response = await api.get(`/rx?page=${page}&size=${size}`);
    return response.data;
}

export const getRXById = async (id) => {
    const response = await api.get(`/rx/${id}`);
    return response.data;
}