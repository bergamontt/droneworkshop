import api from './api.jsx';

export const registerUser = async (user) => {
    const response = await api.post('/user', user);
    return response.data;
};

export const deleteUser = async (username) => {
    const response = await api.delete(`/user/${username}`);
    return response.data;
};

export const updateUserInfo = async (user) => {
    const response = await api.patch('/user', user);
    return response.data;
};

export const updateUserPassword = async (username, password) => {
    const response = await api.patch(`/user/${username}`, { password });
    return response.data;
};

export const login = async (username, password) => {
    const response = await api.post('/auth/log-in', {username, password});
    return response.data;
};

export const getUserByUsername = async (username) => {
    try {
        const response = await api.get(`/user/${username}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch user: " + error.message);
    }
};
