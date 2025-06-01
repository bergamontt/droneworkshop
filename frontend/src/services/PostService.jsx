import api from './api.jsx'
import {defaultPage, elementsPerPage} from "./ServiceConfig.jsx";

export const getAllPosts = async (
    page = defaultPage,
    size = elementsPerPage,
    filters = {}
) => {
    const { postPrefix } = filters;
    const params = new URLSearchParams({
        page,
        size,
        ...(postPrefix && { postPrefix }),
    });
    const response = await api.get(`/post?${params.toString()}`);
    return response.data;
};

export const getPostById = async (id) => {
    const response = await api.get(`/post/${id}`);
    return response.data;
};