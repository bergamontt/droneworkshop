import api from './api.jsx'
import {defaultPage, elementsPerPage} from "./ServiceConfig.jsx";

export const getCommentsByPublicationtId = async (
    page = defaultPage,
    size = elementsPerPage,
    publicationId
) => {
    const params = new URLSearchParams({
        page,
        size,
        ...(publicationId && { publicationId }),
    });
    const response = await api.get(`/comment?${params.toString()}`);
    return response.data;
};

export const addComment = async (comment) => {
    await api.post('/comment', comment);
}