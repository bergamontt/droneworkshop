import api from './api.jsx'

export const getAllMotors = async () => {
    const response = await api.get('/motor');
    return response.data;
}

export const getMotorById = async (id) => {
    const response = await api.get(`/motor/${id}`);
    return response.data;
}