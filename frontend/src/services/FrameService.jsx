import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllFrames = async (page = defaultPage, size = elementsPerPage) => {
    const response = await api.get(`/frame?page=${page}&size=${size}`);
    return response.data;
}

export const getFrameById = async (id) => {
    const response = await api.get(`/frame/${id}`);
    return response.data;
}