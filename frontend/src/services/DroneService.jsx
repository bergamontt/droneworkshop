import api from './api.jsx'
import {defaultPage, elementsPerPage} from "./ServiceConfig.jsx";

export const getAllDrones = async (
    page = defaultPage,
    size = elementsPerPage,
    filters = {}
) => {
    const { dronePrefix, username } = filters;
    const params = new URLSearchParams({
        page,
        size,
        ...(dronePrefix && { dronePrefix }),
        ...(username && { username })
    });
    const response = await api.get(`/post?${params.toString()}`);
    return response.data;
};

export const getDroneById = async (id) => {
    const response = await api.get(`/drone/${id}`);
    return response.data;
};

export const addDrone = async (drone) => {
    const params = new URLSearchParams({
        ...(drone)
    });
    const response = await api.post(`/drone?${params.toString()}`);
    return response.data;
}