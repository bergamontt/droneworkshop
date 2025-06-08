import api from './api.jsx'
import {defaultPage, elementsPerPage} from "./ServiceConfig.jsx";

export const getAllPosts = async (
    page = defaultPage,
    size = elementsPerPage,
    filters = {}
) => {
    const { postPrefix, username } = filters;
    const params = new URLSearchParams({
        page,
        size,
        ...(postPrefix && { postPrefix }),
        ...(username && { username })
    });
    const response = await api.get(`/post?${params.toString()}`);
    return response.data;
};

export const getPostById = async (id) => {
    if (id === null || id === undefined || Number.isNaN(id))
        return {data: null};
    const response = await api.get(`/post/${id}`);
    return response.data;
};

export const addPost = async (post) => {
    const response = await api.post('/post', post);
    return response.data;
}