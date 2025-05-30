import api from './api.jsx'
import {elementsPerPage, defaultPage} from './ServiceConfig.jsx'

export const getAllMotors = async (page = defaultPage, size = elementsPerPage) => {
    const response = await api.get(`/motor?page=${page}&size=${size}`);
    return response.data;
}

export const getMotorById = async (id) => {
    const response = await api.get(`/motor/${id}`);
    return response.data;
}