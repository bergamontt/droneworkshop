import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllStacks = async (page = defaultPage, size = elementsPerPage) => {
    const response = await api.get(`/stack?page=${page}&size=${size}`);
    return response.data;
}

export const getStackById = async (id) => {
    const response = await api.get(`/stack/${id}`);
    return response.data;
}