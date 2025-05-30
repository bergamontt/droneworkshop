import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllPropellers = async (page = defaultPage, size = elementsPerPage) => {
    const response = await api.get(`/propeller?page=${page}&size=${size}`);
    return response.data;
}

export const getPropellerById = async (id) => {
    const response = await api.get(`/propeller/${id}`);
    return response.data;
}