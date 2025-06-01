import api from './api.jsx'

export const getRepliesByPostId = async (postId) => {
    const response = await api.get('/reply', {
        params: { postId }
    });
    return response.data;
}

export const getReplyById = async (id) => {
    const response = await api.get(`/reply/${id}`);
    return response.data;
};