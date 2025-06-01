import api from './api.jsx'

export const getAllPosts = async () => {
    const response = await api.get('/post');
    return response.data;
};

export const getPostById = async (id) => {
    const response = await api.get(`/post/${id}`);
    return response.data;
}