import api from './api.jsx'
import {defaultPage, elementsPerPage} from "./ServiceConfig.jsx";

export const getRepliesByPostId = async (
    page = defaultPage,
    size = elementsPerPage,
    postId
) => {
    const params = new URLSearchParams({
        page,
        size,
        ...(postId && { postId }),
    });
    const response = await api.get(`/reply?${params.toString()}`);
    return response.data;
};

export const getReplyById = async (id) => {
    if (id === null || id === undefined || Number.isNaN(id))
        return null;
    const response = await api.get(`/reply/${id}`);
    return response.data;
};

export const addReply = async (reply) => {
    const response = await api.post('/reply', reply);
    return response.data;
}

export const deleteReply = async (id) => {
    const response = await api.delete(`/reply/${id}`);
    return response.data;
}