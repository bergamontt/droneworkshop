import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllBatteries = async (page = defaultPage, size = elementsPerPage) => {
    const response = await api.get(`/battery?page=${page}&size=${size}`);
    return response.data;
}

export const getBatteryById = async (id) => {
    const response = await api.get(`/battery/${id}`);
    return response.data;
}